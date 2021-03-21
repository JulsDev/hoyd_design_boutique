import React from 'react';
import { HashLink } from 'react-router-hash-link';

import FormContacts from 'components/FormContacts';
import ProjectList from 'components/ProjectsList';
import Image from 'components/_base/Image';
import arrowPath from 'assets/img/projects/arrow-up.png'


export default function Portfolio() {
  return (
    <>
      <div className="container" id="portfolio">
        
        <div className='portfolio__arrow-up' >
          <HashLink smooth to='#portfolio'>
            <div className="dev__content-circle">
              <Image src={arrowPath} alt='arrow up hoyd portfolio' classes='arrow-up__image'></Image>
            </div>
          </HashLink>
        </div>
          
        <ProjectList />
        <FormContacts />
      </div>
    </>
  )
}