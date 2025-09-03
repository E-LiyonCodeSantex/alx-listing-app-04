# Step used to Create my First Mobile App using react native

1. I created a directory (prodev-mobile-app-0x00). 
    * I entered into it (cd prodev-mobile-app-0x00)
    * i Initialized a new Expo project using the latest Expo Router template:
      (npx create-expo-app@latest .) note: the directory should be empty so not overwrite thing or maybe the command might fall back.
2. *  I Started the Expo development server with: npx expo start
      (note:the default home page is in app/(tabs)/index.tsx). NOTE: It might prompt a print: 
      Need to install the following packages:
      expo@53.0.20
      Ok to proceed? (y): type 'y' and hit enter. (This prompt is just telling you that expo isn’t installed globally yet, so it’s going to install version 53.0.20 locally to run the command. That’s totally normal when using npx.). (NOTE: If it did not work on powershell, use bash terminal).
    * It printed a QR code which i scand with my phone by opening expo go app, clicked on scan with android (note: For iOS Devices: Scan the QR code in the terminal using your phone’s Camera app.). Then I scanned it and it connected.
    * To see some changes, i change the welcome! in app/(tabs)/index.txs to  ** First App Created**
3. move the default appilication to an isolated folder (instead of deleting it for learning sake): npm run reset-project
    * If it prompts; Do you want to move existing files to /app-example instead of deleting them? (Y/n): typte 'y' and enter

## Bonus: 
* always save you work (ctr + s / cmd s) to see changes.
* To render on web, do: npx expo start --web