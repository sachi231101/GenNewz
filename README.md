# GenNewz (Expo + React Native)

Short-form India-focused news reel app inspired by Spotify + Seekho.

## Implemented
- Expo Router app with 12 key screens and dark OTT design system.
- Firebase wiring stubs (`auth` + `firestore`) and user preference save helper.
- Reels playback using `expo-av`, haptic interactions, swipe feed.
- Pull to refresh on Home and Explore.
- Offline cache placeholder for last 10 reels via `expo-file-system`.
- Premium page, bookmarks tabs, channel page, onboarding flow.

## Run
```bash
npm install
npm run start
```

Set Firebase env vars in Expo config / `.env`:
- `EXPO_PUBLIC_FIREBASE_API_KEY`
- `EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN`
- `EXPO_PUBLIC_FIREBASE_PROJECT_ID`
- `EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET`
- `EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
- `EXPO_PUBLIC_FIREBASE_APP_ID`
