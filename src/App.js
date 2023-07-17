import React from 'react'
import { Cta, Brand, Navbar } from './components';
import './App.css';
import { Footer, Blog, Possibility, Features, What, Header } from './containers';
const App = () => {
  return (
    <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Brand />
    <What />
    <Features />
    <Possibility />
    <Cta />
    <Blog />
    <Footer />
  </div>
  )
}

export default App