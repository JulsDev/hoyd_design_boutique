import React from 'react';
import Image from '../../_base/Image';

import bannerPath from '../../../assets/img/sections/banner.png';
import hoydLine from '../../../assets/img/main/hoyd-line.png';

export default function Hero() {

  const bannerInfo = {
    src: bannerPath,
    alt: "hoyd design butique",
    classes: "section-main__banner"
  }

  return (
    <section className="section-main">
      <Image src={hoydLine} alt="hoyd" className="section-main__img-line section-main__img-line--right" />
      <div className="visually-hidden">hoyd design butique</div>
      <div className="section-main__image">
        <Image src={bannerInfo.src} alt={bannerInfo.alt} classes={bannerInfo.classes}/>
      </div>
      <div className="section-main__text">
        <p className="section-main__reinvent">
          WE CREATE SOLUTIONS THAT DRIVE RESULTS
        </p>
      </div>
    </section>
  )
}