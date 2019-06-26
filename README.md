# AH-THE-IMMORTALS-FRONTEND
[![Build Status](https://travis-ci.org/andela/ah-the-immortals-frontend.svg?branch=develop)](https://travis-ci.org/andela/ah-the-immortals-frontend)
[![Maintainability](https://api.codeclimate.com/v1/badges/ced031db3ad29a705b70/maintainability)](https://codeclimate.com/github/andela/ah-the-immortals-frontend/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/ced031db3ad29a705b70/test_coverage)](https://codeclimate.com/github/andela/ah-the-immortals-frontend/test_coverage)
[![Reviewed by Hound](https://img.shields.io/badge/Reviewed_by-Hound-8E64B0.svg)](https://houndci.com)


##### `This project is hosted here`
[https://ah-immortals-frontend-staging.herokuapp.com/](https://ah-immortals-frontend-staging.herokuapp.com/)


### `Local Development Setup`
- Clone the Repository [here](https://github.com/andela/ah-the-immortals-frontend.git)

```
 $ git clone https://github.com/andela/ah-the-immortals-frontend.git
```

- Move in to the Project Directory (Develop branch)

```
 $ cd ah-the-immortals-frontend
```

- Install dependencies

```
 $ npm install
```

- Create a .env file in the root folder and set variables

```
 REACT_APP_BASE_URL=backend base url
 REACT_APP_FIREBASE_KEY=firebase key
 REACT_APP_FIREBASE_DOMAIN=firebase domain
```

- Run Application (Development mode)

```
 $ npm run start:dev
```

- Run Tests

```
 $ npm run test
```

- Run Linting

```
 $ npm run lint src
```

### `SASS processing on the client`
Styling with `sass` is supported in this project. To use `sass`, just put your `sass` styling in a `.scss` file.
`Import` your `.scss` file whenever you need it. It is going to be compiled minified and bundled together with the rest of the project.
This project also supports the use of `.css` files. `Import` your `.css` file whenever you need it. Just like .scss files, it is going to compiled minified and bundled together with the rest of the project.
