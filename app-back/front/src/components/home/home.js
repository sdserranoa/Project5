import React, { Component } from 'react'
import './css/style.css'
import { FormattedMessage } from 'react-intl'

export default class Home extends Component {
  render() {
    return (
      <div className="hero">
        <div className="hero-text-container">
          <h1 className="hero-text">
            <FormattedMessage id="HeroH1" />
          </h1>
          <h2 className="hero-text">
            <FormattedMessage id="HeroH2" />
          </h2>
          <a href="#" className="hero-button">
            <FormattedMessage id="HeroButton" />
          </a>
        </div>
      </div>
    )
  }
}
