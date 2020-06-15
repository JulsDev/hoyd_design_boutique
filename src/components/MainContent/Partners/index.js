import React from 'react';
import Image from '../../_base/Image';

import partnersPath from '../../../assets/img/sections/partners.png';

export default function Partners() {

  const partnersInfo = {
    src: partnersPath,
    alt: "hoyd partners ",
    classes: "clients-image__pic"
  }

  return (
    <section className="section-clients">
      <h2 className="title title__clients">our clients</h2>
      <div className="clients-image">
        <Image src={partnersInfo.src} alt={partnersInfo.alt} classes={partnersInfo.classes}/>
      </div>
    </section>
  )
}