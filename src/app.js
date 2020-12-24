import React from 'react';
import {Router,Route,Switch} from 'react-router-dom';

import Addnotes from './components/Addnotes';
import Deletenotes from './components/Deletenotes';
import Editnotes from './components/Editnotes';

import Header from './components/header';
import Shownotes from './components/Shownotes';
import history from './history';
import './index.css';

const App = ()=>{


    return <Router history={history}>

    <div className="ui container">
        <Switch>
    <Route path='/' exact component={Header}/>
    <Route path="/notes/:id" exact component={Shownotes}/>
    <Route path='/addnotes' exact component={Addnotes}/>
     <Route path='/notes/edit/:id' exact component={Editnotes}/>
     <Route   path='/notes/delete/:id' exact component={Deletenotes}/>
    </Switch>
    </div>
    </Router>

    





}




export default App;