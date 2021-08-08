import React from 'react';
import Hero from './Hero';
import About from './About';
import Competence from './Competence';
import FormContacts from 'components/FormContacts';
import WorksList from './WorksList';
import Partners from './Partners';
import DevelopCircle from './DevelopCircle';

export default function MainContent() {

  return (
    <div className="container">
      <Hero />
      <About />
      <DevelopCircle />
      <Competence />
      <WorksList />
      <Partners />
      <FormContacts />
    </div>
  )
}