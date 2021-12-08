<p align="left">
  <a href="https://reactnative.dev/" target="blank"><img src="https://cdn.chelsea-apps.com/assets/mobile-cover.png" width="100%" alt="Chelsea Apps React Native Started" /></a>
</p>

# Chelsea Apps - React Native Starter

![Typescript](https://img.shields.io/badge/language-typescript-blue)
![React Native](https://img.shields.io/badge/framework-react_native-61dafb)
![Urql](https://img.shields.io/badge/networking-urql-8196ff)
![Tailwind](https://img.shields.io/badge/styling-tailwind-22D3EE)

A React Native project to be used as a starting point for developing hybrid mobile apps.

## **Includes:**

### Packages:

-   [CA React Native Elements](http://registry.chelsea-apps.com:4873/-/web/detail/@chelseaapps/react-native-elements)
-   [Typescript](https://www.typescriptlang.org/)
-   [TailwindCSS](https://tvke.github.io/react-native-tailwindcss/)
-   [ESLint](https://eslint.org/)
-   [Prettier (Airbnb Configuration)](https://prettier.io/)
-   [React navigation](https://reactnavigation.org/)
-   [Vector Icons](https://github.com/oblador/react-native-vector-icons)
-   [React Hook Form](https://react-hook-form.com/)
-   [Jest](https://jestjs.io/)
-   [URQL](https://formidable.com/open-source/urql/)
-   [Secure Storage](https://docs.expo.io/versions/latest/sdk/securestore/)
-   [Code Generator](www.graphql-code-generator.com)
-   [Sentry](https://sentry.io/welcome/)
-   [Jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
-   [jwt-decode](https://www.npmjs.com/package/jwt-decode)
-   Auth system ready to be connected to the [Backend starter](https://bitbucket.org/cube-academy/backend-starter/src).
-   SVG / GIF Support

## Before using as a template:

This `starter` includes an [elements package](http://registry.chelsea-apps.com:4873/-/web/detail/@chelseaapps/react-native-elements) built in house that can change it's version very frequently. To be sure that the new project will use the latest changes, clone this starter locally an run:

```
npm uninstall @chelseaapps/react-native-elements && npm install @chelseaapps/react-native-elements
```

Push the changes to master and then you will be able to have the latest changes.

## Releasing

Release candidates can be released using the _Release & Build_ GitHub Actions workflow. This will release a new version, and trigger a build in Bitrise.
**The branch this is run on determines what version gets released** on Bitrise:

-   `staging` - Beta release, `staging` branch, Staging workflow
-   `master` - Production release, `master` branch, Production workflow

To run builds on Bitrise, you'll need to add the following secrets to the repo on GH:

| Secret                 | Value                         |
| ---------------------- | ----------------------------- |
| `BITRISE_ACCESS_TOKEN` | Bitrise Personal Access Token |

## Local Development

**First time running**: When running the project for the first time, `npm packages` need to be installed using `npm install` in the `root` folder. Then, for iOS development, Pods need to be installed from the `ios` folder (`cd ios`). Being in the `ios` directory, simply run `pod install`.

**Dev mode**:
To run the project in development mode simply run `npm start` followed by `npm run ios` or `npm run android` in another terminal tab.

**Outcome**: The app runs in the development mode and a Simulator/Emulator should show up. In the case where the android emulator doesn't show up, simply open it from Android Studio and then run `npm run android` again.

## Linting / Formatting

To check the project for coding errors run `npm run lint`. To format the code to the default standards set run `npm run format`

## Production

To build the project for production run `npm run build:ios` or for Android, from Android Studio.

## Notes:

-   On a new project, before connecting to the [Backend starter](https://bitbucket.org/cube-academy/backend-starter/src), Code Generation needs to be [initialized](https://www.graphql-code-generator.com/docs/getting-started/installation).
-   For a working auth system, after the API connection is established, the code in `src/App.tsx` and `src/common/helpers/client.service.ts` needs to be un-commented.
