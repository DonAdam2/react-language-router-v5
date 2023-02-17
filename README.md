## Custom language router (react router dom v5):

- The main purpose of this project is to create a localized react router.
- It shows you how to utilize route guards
- It uses [react-i18next](https://www.npmjs.com/package/react-i18next) package for translation

## It has the following route guards:

- Private route guard => protect the given route based on a token.
- Public route guard => used for public routes and authentication routes (ex: login, signup, ...etc) {if authenticated it will redirect the user to the home page}
- Restricted route guard => protect the given route based on a token, and a list of permissions (can be an array or a string).
- Restricted section => protect the given section based on a list of permissions (can be an array or a string).

## Prerequisites:

- nodeJS > 14.X.X or Docker

## Installing / Getting Started:

### Development (locally):

- Clone repo => `git clone git@github.com:react-custom-projects/webpack-react-boilerplate.git`
- `cd webpack-react-boilerplate`
- Install dependencies => `yarn install`
- Start the development server => `yarn start`

### Development (using Docker):

- Clone repo => `git clone git@github.com:react-custom-projects/webpack-react-boilerplate.git`
- `cd webpack-react-boilerplate`
- Install dependencies (required for prettier) => `yarn install`
- Start the development server => `docker-compose up --build`

## Update environment variables:

Please keep in mind that environment variables configured using webpack which means that you need to re-run the corresponding environment script (yarn start, yarn run build) if you update the environment file.

## Configuring Prettier

This build relies on [Prettier formatter](https://prettier.io/) to enforce a code style. And [ESLint](https://eslint.org/) for identifying problematic patterns found in JavaScript code.

- Setting up prettier:

  1- You can find steps on how to set up prettier formatter with WebStorm/PhpStorm [here](https://prettier.io/docs/en/webstorm.html#running-prettier-on-save-using-file-watcher).

  Notes:

  - It's better to use the local `node_modules` version of prettier instead of a global one. This is to avoid version conflicts (in case the globally installed version does not match with the versions specified in `package.json`). So when setting up the file watcher when you follow the steps from the above link you can set `program` to `$ProjectFileDir$\node_modules\.bin\prettier` (warning this assumes that node_modules sits in the root of your project. This will need to change if your directory structure changes).
  - You will have to create file watchers for TS, TSX and SCSS files. The webpack build tools are already configured to work with `eslint` and `prettier`. The only thing needed is the file watchers.

  2- Follow the next steps to set up **prettier** and **eslint** on **_VS Code_**:

  - Install `prettier` plugin

  - Install `eslint` plugin

  - Open **_VS Code settings_** `CTRL + ,`:

    a- Search for `formatter` => check **Format on save**

    b- Search for `prettier` => add `.prettierrc` in **_Prettier: Config Path_** section && check **_Prettier: Require Config_**

  3- Please refer to other tutorials if you are using a different IDE.

## Site meta tags:

- This app includes facebook, twitter and regular meta tags

#### To update them:

- Open constants.js file and update metaInfo object
- Open src/assets/images and replace (favicon.png, metaImage.jpg) with your images but using the same name

## Extra:

- Generic error boundary fallback component (you can customize it)
- Cookies, local storage and sessions storage mangers to store data in the browser. (**Note:** the data encrypted using crypto-js package before storing it.)
- Basic mixins `(scss/generic/_mixins.scss)`
- Normalize styles `(scss/generic/_normalize.scss)`
- App typography styles `(scss/generic/_typography.scss)`
- 4 break points `(scss/generic/_variables.scss)`

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
It will open [http://localhost:3000](http://localhost:3000) automatically in the browser to see your app.

All changes will be injected automatically without reloading the page.<br>

You will see in the console the following:

- Any of the following errors:
  1. Linting errors.
  2. Code format errors (because of [prettier](https://prettier.io/))

### `yarn build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `yarn build:serve`

Serves the app on `http://localhost:8080/` from the `dist` folder to check the production version.

**_Note:_** Use this script only if you ran the build script `yarn build`.

### `yarn analyze-bundle`

It allows you to analyze the bundle size.