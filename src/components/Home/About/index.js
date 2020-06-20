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
          <span className="card__text--bold">Hoyd Design Boutique</span>
          <span> – your expert partner in design.</span>
        </p>
        <p className="card__text">We are interested to made perfect design to all our clients.</p>
      </div>
    </section>
  )
}
