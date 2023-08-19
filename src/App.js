import {BrowserRouter, Route, Switch} from 'react-router-dom'
// import Login from './components/Login'

import './App.css'
import Header from './components/Header'
import ProductsList from './components/ProductList'
import About from './components/About'
import Contact from './components/Contact'
import ProductItemDetails from './components/ProductItemDetails'
import NotFound from './components/NotFound'

const App = () => 
<BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={ProductsList} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route path="/product/:id" component={ProductItemDetails} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>

export default App