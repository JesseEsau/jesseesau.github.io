import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Home from '@/components/Home';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import React from 'react'

function index() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default index;