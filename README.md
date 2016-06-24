# Example: React + Router + Redux + Immutable.js

This is a barebones working [React](https://facebook.github.io/react/) application that demonstrates combining [React Router](https://github.com/reactjs/react-router) and [Redux](http://redux.js.org/) using an [Immutable.js](https://facebook.github.io/immutable-js/) store. We use [Babel](https://babeljs.io/) to transpile ES6 to ES5 that can be run in the browser and [Webpack](https://webpack.github.io/) to trigger Babel and pack the results.

## Motivation:

* React Router to efficiently manage multiple areas of the app
* Redux to keep a clean, reproducible state
* Immutable.js to make manipulations of state easier and more disciplined

## Overview

I started with a plain React application, then added React Router. I extended this with a Redux store for managing state. I used the [react-router-redux](https://github.com/reactjs/react-router-redux) package to help manage the interplay between these two packages.

If you want your Redux store itself to be immutable, then you to modify things a little bit from the default Redux setup. The [redux-immutable](https://github.com/gajus/redux-immutable) package gets us most of the distance out-of-the-box, but there's [some more customization you to need to do](https://github.com/gajus/redux-immutable#using-with-react-router-redux) when combining Redux, Immutable.js, AND React Router.

My goal was to provide a **working example** of combining all these packages and snippets together.

**Note**: I'm using `hashHistory` intentionally since for my use case we are supporting older versions of Internet Explorer and don't want route changes to cause a reload when `browserHistory` is not supported. See [more info](https://github.com/reactjs/react-router/blob/master/docs/guides/Histories.md#hashhistory).

## Getting started

Install required dependencies with

    npm install

You can then run the webpack development server on http://localhost:3000/ with

    npm start

You also can build the webpack results and save them to the `dist/` folder with

    npm build


## Resources

Kudos and hat-tips to all the people involved in creating React, Redux, React Router, Immutable.js, Babel, Webpack, React-router-redux, redux-immutable and the authors of the following resources.

* [redux-immutable] [Using react-immutable with react-router-redux](https://github.com/gajus/redux-immutable#using-with-react-router-redux)
* [react-router-redux] [Brief overview of how to use react router and redux with an Immutable.js store](https://github.com/reactjs/react-router-redux#what-if-i-use-immutablejs-with-my-redux-store)
* [react-router-redux] [Instructions on configuring react-router-redux with an Immutable.js store ](https://github.com/reactjs/react-router-redux/issues/301)  
  The `createSelectLocationState` function defined here is crucial and is only found at this link and this other [issue](https://github.com/reactjs/react-router-redux/issues/314#issuecomment-190678756)
