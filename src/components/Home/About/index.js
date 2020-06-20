import React from 'react';

import Image from '../../_base/Image';
import aboutLine from '../../../assets/img/main/about-line.png';


export default function About() {

  return (
    <section className="section-about">
      <Image src={aboutLine} alt="about hoyd" className="section-about__img-line" />
      <h2 className="title title__about">about us</h2>
      <div className="section-about__card">
        <p className="card__text">
          The heart & soul of every business is an outstanding interface design.
        </p>
        <p className="card__text">
          Our professional team is here to provide the latest and finest mobile app and web design solutions.
        </p>
      </div>
    </section>
  )
}
