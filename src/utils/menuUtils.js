// Utility functions for menu handling

/**
 * Recursively find a menu item by path
 * @param {Array} menuItems - Array of menu items
 * @param {string} path - Path to search for
 * @returns {Object|null} Menu item or null if not found
 */
export const findMenuItemByPath = (menuItems, path) => {
  for (const item of menuItems) {
    if (item.path === path) {
      return item;
    }
    if (item.submenu) {
      const found = findMenuItemByPath(item.submenu, path);
      if (found) return found;
    }
  }
  return null;
};

/**
 * Get the level of a menu item based on its position in the hierarchy
 * @param {Array} menuItems - Array of menu items
 * @param {string} path - Path to find level for
 * @param {number} currentLevel - Current nesting level (default: 0)
 * @returns {number} Nesting level (0 = root, 1 = first submenu, etc.)
 */
export const getMenuLevel = (menuItems, path, currentLevel = 0) => {
  for (const item of menuItems) {
    if (item.path === path) {
      return currentLevel;
    }
    if (item.submenu) {
      const level = getMenuLevel(item.submenu, path, currentLevel + 1);
      if (level > currentLevel) {
        return level;
      }
    }
  }
  return -1;
};

/**
 * Check if a menu item has submenu
 * @param {Object} menuItem - Menu item object
 * @returns {boolean} True if item has submenu
 */
export const hasSubmenu = (menuItem) => {
  return menuItem && menuItem.submenu && Array.isArray(menuItem.submenu) && menuItem.submenu.length > 0;
};

/**
 * Get all paths from menu configuration
 * @param {Array} menuItems - Array of menu items
 * @returns {Array} Array of all paths
 */
export const getAllMenuPaths = (menuItems) => {
  const paths = [];

  const traverse = (items) => {
    items.forEach(item => {
      paths.push(item.path);
      if (item.submenu && Array.isArray(item.submenu)) {
        traverse(item.submenu);
      }
    });
  };

  traverse(menuItems);
  return paths;
};