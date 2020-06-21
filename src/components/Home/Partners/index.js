import React from 'react';
import Image from '../../_base/Image';

import partner1 from '../../../assets/img/partners/deltakredit-partner.png';
import partner2 from '../../../assets/img/projects/glonas-partner.png';
import partner3 from '../../../assets/img/projects/cashwagon-partner.png';
import partner4 from '../../../assets/img/partners/royal-canin-partner.png';
import partner5 from '../../../assets/img/partners/alcon-partner.png';
import partner6 from '../../../assets/img/projects/filmsclub-partners.png';
import partner7 from '../../../assets/img/partners/blackcatcard-partner.png';
import partner8 from '../../../assets/img/partners/vtb-partner.png';
import partner9 from '../../../assets/img/partners/vera-id-partner.png';
import partner10 from '../../../assets/img/partners/cryptica-bank-partner.png';
import partner11 from '../../../assets/img/partners/buyex-partner.png';
import partner12 from '../../../assets/img/partners/gratzbonus-partners.png';

export default function Partners() {

  return (
    <section className="section-partners">
      <h2 className="title title__partners">They trust us</h2>
      <div className="partners-image__list">
        <Image src={partner1} alt='' classes='partners-image__item'/>
        <Image src={partner2} alt='' classes='partners-image__item'/>
        <Image src={partner3} alt='' classes='partners-image__item'/>
        <Image src={partner4} alt='' classes='partners-image__item'/>
        <Image src={partner5} alt='' classes='partners-image__item'/>
        <Image src={partner6} alt='' classes='partners-image__item'/>
        <Image src={partner7} alt='' classes='partners-image__item'/>
        <Image src={partner8} alt='' classes='partners-image__item'/>
        <Image src={partner9} alt='' classes='partners-image__item'/>
        <Image src={partner10} alt='' classes='partners-image__item'/>
        <Image src={partner11} alt='' classes='partners-image__item'/>
        <Image src={partner12} alt='' classes='partners-image__item'/>

      </div>
    </section>
  )
}