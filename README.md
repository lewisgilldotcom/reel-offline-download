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
2. Install homebrew (https://phoenixnap.com/kb/install-homebrew-on-mac)
3. Install yt-dlp (https://github.com/yt-dlp/yt-dlp/wiki/Installation in the binary section)
4. Install FFMPEG https://phoenixnap.com/kb/ffmpeg-mac
5. Install Chromium (https://www.google.com/chrome/canary/)
6. Run `npm run build` from extension directory
7. Start the server locally by running `npm start` from the server directory
8. Open `chrome://extensions/` in Chromium, enable developer mode
9. Select 'Load unpacked', then selected the `extension/dist` folder
10. Open the extension and ensure it reports the server is running
11. Scroll and download reels. Don't go too fast or use a VPN, you'll get rate limited!