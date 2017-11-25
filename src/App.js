import React, { Component } from 'react';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { injectGlobal } from 'react-emotion'
import {
  MainPage,
} from './pages'

injectGlobal`
  * {
    font-family: Athiti;
}` 


const App = props => (
  <div>
    <BrowserRouter>
    <section className="page-main-inner">
      <Switch location={props.location}>
        <Route exact path="/" component={MainPage} />
      </Switch>
    </section>
    </BrowserRouter>
  </div>
)

export default App;
