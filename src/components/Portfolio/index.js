import React from 'react';
import FormContacts from '../FormContacts';
import ProjectList from '../ProjectsList';


export default function Portfolio() {
  return (
    <div className="container">
      <ProjectList />
      <FormContacts />
    </div>
  )
}