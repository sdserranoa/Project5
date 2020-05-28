import React, { Component } from 'react'
import './css/style.css'
import { FormattedMessage } from 'react-intl'

export default class Navigation extends Component {
  render() {
    return (
      <nav>
        <div class="logo-section">
          <a href="/">
            Trivia Master{' '}
            <img src="logo.svg" alt="Task Master logo" id="logo" />
          </a>
        </div>
        <div class="links-section">
          <a href="#">Home</a>
          <a href="#">
            <FormattedMessage id="Play" />
          </a>
          <a href="#" id="signin">
            <FormattedMessage id="SignIn" />
          </a>
          <a href="#" id="signup">
            <FormattedMessage id="SignUp" />
          </a>
        </div>
      </nav>
    )
  }
}
