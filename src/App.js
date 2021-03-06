import React, { Component } from 'react'
import Navbar from './components/layouts/navbar/Navbar'
 import './App.css'
import Footer from './components/layouts/footer/Footer'
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Fashion from './components/pages/Fashion';
import Health from './components/pages/Health';
import Tech from './components/pages/Tech';
import World from './components/pages/World';
import CreatePost from './components/posts/CreatePost';
import Dashboard from './components/dashboard/Dashboard';
import PostDetails from '../src/components/posts/PostDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';


export class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Navbar />
        <Switch>
          <Route exact path='/' component={Dashboard}/>
          <Route path='/post/:id' component={PostDetails} />
          <Route path='/create' component={CreatePost} />
          <Route path='/health' component={Health} />
          <Route path='/tech' component={Tech} />
          <Route path='/world' component={World} />
          <Route path='/fashion' component={Fashion} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
        </Switch>
        <Footer />
      </BrowserRouter>
    )
  }
}



export default App;