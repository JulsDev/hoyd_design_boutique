import React from 'react';

import data from '../../assets/projects.json';
import ProjectCard from '../ProjectCard';


const tags = ['financial', 'blockchain', 'government', 'social', 'other...'];

export default function ProjectList() {

  return (
    <div className="section-cases">
      <h2 className="title title__cases">our cases</h2>
      <ul className="cases-tags__list">
        {tags.map((item, index) => {
          return (
            <a href="#" className="cases-tags__link" key={index}>
              <li className="cases-tags__item">
                {item}
              </li>
            </a>
          )}
        )}  
      </ul>
      {data.map((item) => {
          return (
              <ProjectCard projectInfo={item} key={item.id}/>
          )
      })} 
    </div>
  )
}