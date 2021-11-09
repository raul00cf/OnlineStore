import React from 'react';

// Routing
import { BrowserRouter as Router } from 'react-router-dom';

// Components
import Home from './Home';
import { GlobalStyle } from './GlobalStyle';

function App() {
  return (
    <Router>
      <Home />
      <GlobalStyle />
    </Router>
  );
}

export default App;
