// const { defineConfig, devices } = require('@playwright/test');

// module.exports = defineConfig({

//   fullyParallel: true,

//   use: {
//     headless: false,
//     screenshot: 'on',
//     video: 'on',
//     trace: 'on'
//   },

//   projects: [

//     // Windows Chrome
//     {
//       name: 'Windows-Chromium',
//       use: {
//         browserName: 'chromium',
//         ...devices['Desktop Chrome'],
//       },
//     },

//     // macOS Firefox simulation
//     {
//       name: 'macOS-Firefox',
//       use: {
//         browserName: 'firefox',
//         ...devices['Desktop Firefox'],
//       },
//     },

//   ],
// });



const { defineConfig } = require('@playwright/test');



const capabilityChrome = {
  browserName: "Chrome",
  browserVersion: "latest",
  "LT:Options": {
    platformName: "Windows 10",
    project: "Simple Form Demo",
    network: true,
    console: true,
    video: true,
    visual: true
  }
};

const capabilityFirefox = {
  browserName: "Firefox",
  browserVersion: "latest",
  "LT:Options": {
    platformName: "macOS Catalina",
    project: "Simple Form Demo",
    network: true,
    console: true,
    video: true,
    visual: true
  }
};

module.exports = defineConfig({

  fullyParallel: true,
  workers: 2,

  projects: [

    // ✅ Windows 10 - Chrome
    {
      name: 'Windows-Chrome',
      use: {
        connectOptions: {
          wsEndpoint:
            `wss://cdp.testmuai.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilityChrome))}`
        }
      }
    },

    // ✅ macOS Catalina - Firefox
    {
      name: 'macOS-Firefox',
      use: {
        connectOptions: {
          wsEndpoint:
            `wss://cdp.testmuai.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilityFirefox))}`
        }
      }
    }

  ]

});