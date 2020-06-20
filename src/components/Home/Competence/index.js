import React from 'react';
import Image from '../../_base/Image';

import designImgPath from '../../../assets/img/competence/design.png'
import visualImgPath from '../../../assets/img/competence/visual.png'
import consultingImgPath from '../../../assets/img/competence/consulting.png'
import skillsLine from '../../../assets/img/main/skills-line.png';


export default function Competence() {

  return (
    <section className="section-competence">
      <Image src={skillsLine} alt="hoyd" className="section-main__img-line" />
      <h2 className="title title__competence">our competence</h2>
      <ul className="competences">
          <li className="competences__block competences__block--design">
             <div className="competences__image">
                <Image src={designImgPath} alt={"Interface design"} classes={"competences__pic"}/>
             </div>
             <div className="competences__text">
               We create the most invigorating functionalities for the IOS mobile design.
             </div>
          </li>
          <li className="competences__block competences__block--visual">
             <div className="competences__image">
                <Image src={visualImgPath} alt={"Visualization"} classes={"competences__pic"}/>
             </div>
             <div className="competences__text">
               We use our best practices for developing app design for Android phones and their specific functions.
             </div>
          </li>
          <li className="competences__block competences__block--consulting">
             <div className="competences__image">
                <Image src={consultingImgPath} alt={"consulting"} classes={"competences__pic"}/>
             </div>
             <div className="competences__text">
               We know all about customized and mobile-friendly websites to ensure higher user satisfaction. 
             </div>
          </li>
        </ul>
    </section>
  )
}
