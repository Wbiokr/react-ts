import React from 'react';
import {  HashRouter, Route } from 'react-router-dom';
import Routes from '../route/index';
import { Common } from '@/interface/common';

class App extends React.Component {
  render(): any {
    return (
      <HashRouter className="app">
        <header>hello</header>
        <main>
          {
            Routes.map((dom: Common)=>(
              <Route  {...dom} />            
            ))
          }
        </main>
      </HashRouter>
    )
  }
};

export default App;
