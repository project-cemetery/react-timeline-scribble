[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://travis-ci.org/igorkamyshev/react-timeline-scribble.svg?branch=master)](https://travis-ci.org/igorkamyshev/react-timeline-scribble)
[![npm version](https://badge.fury.io/js/react-timeline-scribble.svg)](https://badge.fury.io/js/react-timeline-scribble)

# react-timeline-scribble
React Timeline component

## Install
`yarn add react-timeline-scribble`

## Usage

[![Edit react-timeline-scribble-example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/03r33x0oxl) [![Greenkeeper badge](https://badges.greenkeeper.io/igorkamyshev/react-timeline-scribble.svg)](https://greenkeeper.io/)

```js
import React, { Fragment } from "react";
import { render } from "react-dom";

import { Timeline, Event } from "react-timeline-scribble";

const App = () => (
  <Fragment>
    <h1>React Timeline Scribble</h1>
    <Timeline>
      <Event interval={"2016 – 2018"} title={"Lorem"} subtitle={"Ipsum"}>
        dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
        id est laborum.
      </Event>
      <Event interval={"2015 – 2016"} title={"Lorem"} subtitle={"Ipsum"}>
        dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
        id est laborum.
      </Event>
    </Timeline>
  </Fragment>
);

render(<App />, document.getElementById("root"));
```
