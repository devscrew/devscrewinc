// Menu configuration for DevsCrew Inc. website
// Supports up to 3 levels of submenu
const menuConfig = {
  "menu": [
    {
      "path": "/",
      "label": "Home"
    },
    {
      "path": "/about",
      "label": "About Us"
    },
    {
      "path": "/services",
      "label": "Services",
      "submenu": [
        {
          "path": "/netsuite",
          "label": "NetSuite ERP Solutions",
          "submenu": [
            {
              "path": "/netsuite/implementation",
              "label": "Implementation Services"
            },
            {
              "path": "/netsuite/customization",
              "label": "Customization"
            },
            {
              "path": "/netsuite/integration",
              "label": "Integration Services"
            }
          ]
        },
        {
          "path": "/suitecommerce",
          "label": "SuiteCommerce Solutions",
          "submenu": [
            {
              "path": "/suitecommerce/customization",
              "label": "Customization"
            },
            {
              "path": "/suitecommerce/development",
              "label": "Development Services"
            }
          ]
        }
      ]
    },
    {
      "path": "/contact",
      "label": "Contact"
    }
  ]
};

export default menuConfig;