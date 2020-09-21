import React from 'react';
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";


import './App.css';
import Home from './Home'

function App() {


  return (
    <div className="app">
      <Home />
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App, true);


