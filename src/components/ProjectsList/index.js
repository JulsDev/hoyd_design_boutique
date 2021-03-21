import React, { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';

import data from 'assets/projects.json';
import ProjectCard from 'components/ProjectCard';

const tags = ['all', 'financial', 'blockchain', 'government', 'social'];

export default function ProjectList() {
  const [category, setCategory] = useState('all');
  const [categoryList, setCategoryList] = useState(data);

  function handleChooseTag(event) {
    const curCategory = event.currentTarget.getAttribute('name');        
    if(curCategory !== category) {
      setCategory(curCategory);
    }
  }

  useEffect(() => {
    if(category === 'all') {
      setCategoryList(data);
    } else {
      const curCategories = data.filter(item => item.tag === category);
      setCategoryList(curCategories);
    }
  }, [category])

  return (
    <div className="section-cases">
      <h2 className="title title__cases">our cases</h2>
      
      <ul className="cases-tags__list">
        {tags.map((item, index) => {
          const hashItem = `#${item}`;          
          return (
            <li key={index}>
              <HashLink smooth to='#portfolio'>
                <HashLink smooth to={hashItem}>
                  <button
                    type='button'
                    name={item}
                    onClick={handleChooseTag}
                    className={
                      item === category ? 'cases-tags__item cases-tags__item--active' : 'cases-tags__item'
                    }  
                  >
                    <div className="cases-tags__link">
                      {item}
                    </div>
                  </button>
                </HashLink>
              </HashLink>
            </li>
          )}
        )}  
      </ul>

      {categoryList.map((item) => {
          return (
              <ProjectCard projectInfo={item} key={item.id}/>
          )
      })} 
    </div>
  )
}