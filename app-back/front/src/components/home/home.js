import React, { Component } from 'react'
import './css/style.css'

export default class Home extends Component {
  render() {
    return (
      <div className="hero">
        <div className="hero-text-container">
          <h1 className="hero-text">Master the Trivia World</h1>
          <h2 className="hero-text">
            Solve our questions and be the ultimate trivia master
          </h2>
          <a href="#" className="hero-button">
            Get Started
          </a>
        </div>
      </div>
    )
  }
}
