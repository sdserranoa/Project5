import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter as Router, Route } from 'react-router-dom'

//CSS
import './css/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

//Bootstrap
import Container from 'react-bootstrap/Container'

//Components
import Home from './components/home/home'
import Navigation from './components/navigation/navigation'

ReactDOM.render(
  <React.StrictMode>
    <Navigation />
    <Container fluid>
      <Router>
        <Route path="/" exact component={Home} />
      </Router>
    </Container>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
