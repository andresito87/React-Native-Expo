# Components App

A React Native mobile application built with Expo.

This project uses Expo with a **custom development build** as the recommended development workflow. This approach provides a native app experience during development and avoids the limitations of Expo Go when testing platform-specific behavior.

---

## Requirements

Before running the project, make sure you have the following tools installed:

- Node.js
- npm
- Expo CLI
- Android Studio for Android development
- Xcode for iOS development

Install the project dependencies:

```bash
npm install
```

---

## Recommended Development Workflow

This project should be developed using a **development build** instead of Expo Go.

A development build allows you to run the real native version of the app on an emulator, simulator, or physical device while still using Metro for fast refresh and JavaScript updates.

---

## Create and Install a Development Build

### Android

```bash
npx expo run:android
```

This command compiles and installs the native Android app on an emulator or connected physical device.

### iOS

```bash
npx expo run:ios
```

This command compiles and installs the native iOS app on the simulator or a connected device.

---

## Start the Development Server

After installing the development build, start Metro with:

```bash
npx expo start --dev-client
```

Then open the installed app on your emulator, simulator, or physical device.

This is the recommended command for day-to-day development.

---

## Why Use a Development Build?

Expo Go is useful for quick experiments, but it does not always behave the same as the final native app.

Some features may behave differently in Expo Go, especially:

- Keyboard behavior
- Safe areas
- Native permissions
- Native libraries
- Expo config plugins
- Android and iOS native configuration
- Gestures
- Splash screen
- App icons
- Device-specific behavior

A development build uses the actual native configuration of this project, including:

- `app.json`
- Expo plugins
- Native Android and iOS settings
- Installed native dependencies
- Real keyboard behavior
- Native permissions
- Native assets

For that reason, a development build provides a more accurate environment for testing the app on real devices.

---

## When Do You Need to Rebuild?

You do not need to rebuild the native app after every code change.

### Rebuild is not required when changing

- React components
- Screens
- Hooks
- State logic
- Forms
- Styles
- NativeWind or Tailwind classes
- JavaScript or TypeScript logic
- Text content
- JavaScript-based navigation
- Services written in JavaScript or TypeScript

For these changes, keep Metro running with:

```bash
npx expo start --dev-client
```

---

### Rebuild is required when changing

- `app.json`
- `app.config.ts`
- Expo plugins
- Native permissions
- Native app icons
- Splash screen configuration
- Android native configuration
- iOS native configuration
- Files inside the `android/` directory
- Files inside the `ios/` directory
- Libraries that include native code

For example, after changing a native Android option such as:

```json
{
  "expo": {
    "android": {
      "softwareKeyboardLayoutMode": "resize"
    }
  }
}
```

You need to rebuild the Android app:

```bash
npx expo run:android
```

---

## Common Commands

Install dependencies:

```bash
npm install
```

Start Metro for the development build:

```bash
npx expo start --dev-client
```

Build and install the Android app:

```bash
npx expo run:android
```

Build and install the iOS app:

```bash
npx expo run:ios
```

Start Expo normally:

```bash
npx expo start
```

The standard Expo start command may open the app in Expo Go. For this project, `npx expo start --dev-client` is preferred because it runs the installed native development build.

---

## Project Structure

This project uses Expo Router and file-based routing.

The main application code is located inside the `app` directory.

```txt
app/
  _layout.tsx
  index.tsx
```

Shared UI components, hooks, services, and other application code should be organized according to the project architecture.

---

## Notes

For reliable testing, especially when working with keyboard behavior, native permissions, device features, or platform-specific UI, always test using the installed development build on an emulator or physical device.

Expo Go should only be used for quick experiments and simple prototypes.
