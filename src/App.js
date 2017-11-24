import React, { Component } from 'react';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import logo from './logo.svg';
import './App.css';

import {
  MainPage,
  ProgrammingPage
} from './pages'

console.log(ProgrammingPage)

const App = props => (
  <div>
    <BrowserRouter>
    <section className="page-main-inner">
      <Switch location={props.location}>
        <Route exact path="/" component={MainPage} />
        <Route  path="/programming" component={ProgrammingPage} />
      </Switch>
    </section>
    </BrowserRouter>
  </div>
)

export default App;
