import React, { Component } from 'react'
import './css/style.css'

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
          <a href="#">Play</a>
          <a href="#" id="signin">
            Sign In
          </a>
          <a href="#" id="signup">
            Sign Up
          </a>
        </div>
      </nav>
    )
  }
}
