import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { IntlProvider } from 'react-intl'
import { Auth0Provider } from './react-auth0-spa'
import config from './auth_config.json'
import history from './utils/history'
import PrivateRoute from './components/PrivateRoute'

//CSS
import './css/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

//Bootstrap
import Container from 'react-bootstrap/Container'

//Components
import Home from './components/home/home'
import Navigation from './components/navigation/navigation'
import Profile from './components/profile/profile'

//Locales
import localEsMessages from './locales/es.json'
import localEnMessages from './locales/en.json'

const messages = navigator.language.startsWith('en')
  ? localEnMessages
  : localEsMessages

const onRedirectCallback = (appState) => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={config.domain}
      client_id={config.clientId}
      redirect_uri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      <IntlProvider locale={navigator.language} messages={messages}>
        <Router history={history}>
          <header>
            <Navigation />
          </header>
          <Container fluid>
            <Switch>
              <Route path="/" exact component={Home} />
              <PrivateRoute path="/profile" exact component={Profile} />
            </Switch>
          </Container>
        </Router>
      </IntlProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
