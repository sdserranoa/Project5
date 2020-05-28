import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'
import { useAuth0 } from '../../react-auth0-spa'

//CSS
import './css/style.css'

const Navigation = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0()

  return (
    <nav>
      <div class="logo-section">
        <a href="/">
          Trivia Master <img src="logo.svg" alt="Task Master logo" id="logo" />
        </a>
      </div>
      <div class="links-section">
        <a href="/">Home</a>
        {!isAuthenticated && (
          <button className="signin" onClick={() => loginWithRedirect({})}>
            <FormattedMessage id="SignIn" />
          </button>
        )}
        {isAuthenticated && (
          <span>
            <a href="#">
              <FormattedMessage id="Play" />
            </a>
            <a href="/profile">
              <FormattedMessage id="Profile" />
            </a>
            <button className="signin" onClick={() => logout()}>
              <FormattedMessage id="Logout" />
            </button>
          </span>
        )}
      </div>
    </nav>
  )
}

export default Navigation
