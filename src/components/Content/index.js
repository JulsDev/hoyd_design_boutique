import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from 'components/Home'
import Portfolio from 'components/Portfolio'

export default function Content () {
  return (
    <>
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route path='/portfolio' component={Portfolio}/>
      </Switch>
    </>
  )
}

