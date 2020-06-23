import React from 'react';
import FormContacts from '../FormContacts';
import ProjectList from '../ProjectsList';
import { HashLink } from 'react-router-hash-link';

import Image from '../_base/Image';
import arrowPath from '../../assets/img/projects/arrow-up.png'


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