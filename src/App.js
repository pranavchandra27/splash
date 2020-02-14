import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ImageProvider } from './context/ImageContext';
import { SearchProvider } from './context/SearchContext';
import Images from './components/Images';
import NewImage from './components/NewImage';
import SearchImages from './components/SearchImages';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <ImageProvider>
        <SearchProvider>
          <Images />
          <Navbar />
          <Switch>
            <Route exact path="/" component={NewImage} />
            <Route exact path="/search" component={SearchImages} />
          </Switch>
        </SearchProvider>
      </ImageProvider>
    </Router>
  );
}

export default App;
