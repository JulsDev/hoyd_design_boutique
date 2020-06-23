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
import partner10 from '../../../assets/img/partners/amo-crm.png';
import partner11 from '../../../assets/img/partners/buyex-partner.png';
import partner12 from '../../../assets/img/partners/gratzbonus-partners.png';

export default function Partners() {

  return (
    <section className="section-partners">
      <h2 className="title title__partners">They trust us</h2>
      <div className="partners-image__list">
        <Image src={partner1} alt='deltakredit' classes='partners-image__item'/>
        <Image src={partner2} alt='glonas' classes='partners-image__item'/>
        <Image src={partner3} alt='cashwagon' classes='partners-image__item'/>
        <Image src={partner4} alt='royal-canin' classes='partners-image__item'/>
        <Image src={partner5} alt='alcon' classes='partners-image__item'/>
        <Image src={partner6} alt='filmsclub' classes='partners-image__item'/>
        <Image src={partner7} alt='blackcatcard' classes='partners-image__item'/>
        <Image src={partner8} alt='vtb' classes='partners-image__item'/>
        <Image src={partner9} alt='vera-id' classes='partners-image__item'/>
        <Image src={partner10} alt='amo-crm' classes='partners-image__item'/>
        <Image src={partner11} alt='buyex' classes='partners-image__item'/>
        <Image src={partner12} alt='gratzbonus' classes='partners-image__item'/>
      </div>
    </section>
  )
}