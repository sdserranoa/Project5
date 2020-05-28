import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'
import { useAuth0 } from '../../react-auth0-spa'
import Graph from './graph.js'
//CSS
import './css/style.css'

const Home = () => {
  const { isAuthenticated, loginWithRedirect, loading } = useAuth0()

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className="hero">
      <div className="hero-text-container">
        <h1 className="hero-text">
          <FormattedMessage id="HeroH1" />
        </h1>
        <h2 className="hero-text">
          <FormattedMessage id="HeroH2" />
        </h2>
        {!isAuthenticated && (
          <button className="hero-button" onClick={() => loginWithRedirect({})}>
            <FormattedMessage id="HeroButton" />
          </button>
           
        )}
        <h2 className="hero-text">
          <FormattedMessage id="HeroH3" />
        </h2>
        <Graph/>
      </div>
     
    </div>
  )
}

export default Home
