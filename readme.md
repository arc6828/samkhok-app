# SAMKHOK APP
- use expo react native

## Installation
### Coding Tool
- nodejs LTS
- git-scm
- vs code
### Emulator
- nox player, disabled virtual machine
- Expo Go APK : https://apkpure.com/expo/host.exp.exponent/download 

## Get Started!!!
- create project
```bash
npx create-expo-app samkhok-app
```

## Run
- start server
```bash
npm start
```

## For developers
- Git clone & Dependencies install & run
```
git clone https://github.com/arc6828/samkhok-app
cd samkhok-app
npm install
npm start
```

## Dependencies
```bash
# Core Navigation
npm install @react-navigation/native
npx expo install react-native-screens react-native-safe-area-context
# Stack Navigation
npm install @react-navigation/stack
npx expo install react-native-gesture-handler
# Bottom Tabs Navigation
npm install @react-navigation/bottom-tabs
# Material Top Tabs Navigation
npm install @react-navigation/material-top-tabs react-native-tab-view
npx expo install react-native-pager-view
# Paper
npm install react-native-paper
# Web View
npx expo install react-native-webview
```
## Deployment on App Store and Google Play Store
### Tutorial
- App Store : https://youtu.be/LE4Mgkrf7Sk
- Google Play Store : https://youtu.be/oBWBDaqNuws 

### Deployment Dependencies
```bash
npm install --global eas-cli
```

### Build
```bash
eas login
eas whoami
eas build:configure
eas build --platform android

### Privacy 
- Privacy Generator
https://app-privacy-policy-generator.firebaseapp.com/

```
## Reference
- https://expo.dev
- https://reactnavigation.org 
 
