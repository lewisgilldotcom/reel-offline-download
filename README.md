# reel-offline-download
Note: Will fail to build outside of Linux and Map due to copy script in package.json, simply modify this for Windows environment and this will build.

# Testing
1. Run `npm run build` from extension directory
2. Start the server locally by running `npm start` from the server directory
3. Open `chrome://extensions/` in Chrome
4. Select 'Load unpacked', then selected the `extension/dist` folder

Extension is installed and ready for testing

# Running
1. Install Node.js (https://nodejs.org/en/download)
2. Run `npm run build` from extension directory
3. Start the server locally by running `npm start` from the server directory
4. Open `chrome://extensions/` in Chrome
5. Select 'Load unpacked', then selected the `extension/dist` folder
6. Open the extension and ensure it reports the server is running
7. Scroll and download reels. Don't go too fast or use a VPN, you'll get rate limited!