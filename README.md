<h1 align="center">Welcome to cra-enhanced 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.1-blue.svg?cacheSeconds=2592000" />
</p>

> Like Create React app, but with Redux store, component generator and more awesome features!

## Features

- [Redux](https://redux.js.org/) store
- [Storybook](https://storybook.js.org/)
- [API request proxying](#proxying)
- Based on [Create React App](https://github.com/facebook/create-react-app)
- [File templates + generator script](#generator)

## Usage

```bash
# Clone the boilerplate
git clone https://github.com/DEVICARUS/cra-enhanced.git

# Install dependencies
yarn

# Start development server
yarn start
```

## Basic Commands

| Command              | Description                                 |
|:-------------------- | ------------------------------------------- |
| `yarn start`         | Starts development server                   |
| `yarn build`         | Builds the app in the `build` directory     |
| `yarn run storybook` | Runs [Storybook](https://storybook.js.org/) |
| `yarn run generator` | Runs [file generator script](#generator)    |

## Docs

### Generator

The generator is a simple script for creating new components (and other things) using the templates from the `templates` directory. Simply run `yarn run generator` to start using it.



**Currently supports**

- React Components

- React-Redux Containers

- Redux Reducers

- Redux Actions

### Proxying

API requests 'just work'. On the development server, `/api` is being forwarded to the `5000` port. This assumes your API dev server runs on this port and your production server serves the API and React both on the same port.

## Author

👤 **DEVICARUS**

* Twitter: [@RevionReaper](https://twitter.com/RevionReaper)
* Github: [@DEVICARUS](https://github.com/DEVICARUS)

*Based on output of the [create-react-app](https://github.com/facebook/create-react-app)*
