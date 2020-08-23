import React from 'react'
import {
    BrowserRouter as Router,
    Switch,Route} from "react-router-dom";
  import {Home} from './components/Home';
  import {About} from './components/About';
  import {Product} from './components/Product';
  import {ProductItem} from './components/ProductItem';
  import {Navbar} from './components/Navbar'

export const Routing = () => {
    return (
        <div>
            <Router>
            <Navbar />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/about' component={About} />
                    <Route exact path='/product' component={Product} />
                    <Route path='/product/:id' component={ProductItem} />
                    <Route path='*' component={()=><h2>404 NOT FOUND</h2>} />
                </Switch>
            </Router>
        </div>
    )
}
