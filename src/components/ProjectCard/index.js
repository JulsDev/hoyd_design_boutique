import React from 'react';
import { HashLink } from 'react-router-hash-link';

import Image from '../_base/Image';

export default function ProjectCard({ projectInfo }) {

  require(`../../assets/img/projects/${projectInfo.logo}`);
  require(`../../assets/img/projects/${projectInfo.mainImage}`);

  return (
    <ul className="case-block__list">
      <li className="case-block__item case__card">
        <div className="case__logo">
          <Image src={`img/${projectInfo.logo}`} alt={projectInfo.alt} classes="case__logo_link"/>
        </div>
        <h3 className="case__title">{projectInfo.title}</h3>
        <p className="case__descr">{projectInfo.descr}</p>
        <p className="case__work-type">{projectInfo.workType}</p>
        <div className="case__photo">
          <Image src={`img/${projectInfo.mainImage}`} alt={projectInfo.alt} classes="case__photo-image"/>
        </div>
        <a href={projectInfo.workLink} target="_blank" className="case__link">{projectInfo.workLinkText}</a>
          <HashLink smooth to='#contact'>
            <button className="button button__case">
                Apply for design
            </button>
          </HashLink> 
      </li>
    </ul>
  )
}