import React from 'react';
import Image from '../../_base/Image';

import bannerPath from '../../../assets/img/sections/banner.png';

export default function Hero() {

  const bannerInfo = {
    src: bannerPath,
    alt: "hoyd design butique",
    classes: "section-main__banner"
  }

  return (
    <section className="section-main">
      <div className="visually-hidden">hoyd design butique</div>
      <div className="section-main__image">
        <Image src={bannerInfo.src} alt={bannerInfo.alt} classes={bannerInfo.classes}/>
      </div>
    </section>
  )
}