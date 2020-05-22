import React from 'react';
import './App.css';
import { Router, Switch, Route } from 'react-router';
import history from './routes/history';
import { routes } from './routes';

function App() {
  return (
    <div className="App">
      <header className="App-header">MERN Assignment 1</header>
      <main className="app_body">
        <Router history={history}>
          <Switch>
            {routes.map((route) => (
              <Route {...route} />
            ))}
          </Switch>
        </Router>
      </main>
    </div>
  );
}

export default App;
