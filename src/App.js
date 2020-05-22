import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router';
import { routes } from './routes';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <header className="App-header">
        <Link to="/">MERN Assignment 1</Link>
      </header>
      <main className="app-body">
        <Switch>
          {routes.map((route) => (
            <Route {...route} />
          ))}
        </Switch>
      </main>
    </div>
  );
}

export default App;
