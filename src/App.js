import React from 'react';
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

import './App.css';


function App() {


  return (
    <div className="app">
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App, true);


