import React, { Component } from 'react';
import Loadable from 'react-loadable';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LayoutCompoent from './Layout'
import './App.css';

const Loading = () => <div>Loading...</div>
// 歌单管理页
const PlayList = Loadable({
  loader: () => import('./page/PlayList'),
  loading: Loading
})

// 歌曲管理页
const Songs = Loadable({
  loader: () => import ('./page/Songs'),
  loading: Loading
})

// 布局
const Warper = page => {
  return () => {
    return  <LayoutCompoent body={page} />
  }
}
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path= '/' component={Warper(PlayList)} />
          <Route exact path= '/music' component={Warper(Songs)} />
        </Switch>
      </Router>
    );
  }
}

export default App;
