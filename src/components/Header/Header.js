import React from 'react'
import Hero from './Hero'
import Nav from './Nav'

export default function Header({ title, tagline }) {
  return (
    <header>
      <Nav />
      <Hero title={title} tagline={tagline} />
    </header>
  )
}
