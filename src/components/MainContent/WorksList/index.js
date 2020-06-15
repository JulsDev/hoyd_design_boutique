import React from 'react';
import Image from '../../_base/Image';

import firstImgPath from '../../../assets/img/works/colors.jpg'
import secondImgPath from '../../../assets/img/works/glass.jpg'
import thirdImgPath from '../../../assets/img/works/snake.jpg'

export default function WorksList() {

  const firstImage = { src: firstImgPath, alt: "", classes: "work-image__pic" };
  const secondImage = { src: secondImgPath, alt: "", classes: "work-image__pic--center" };
  const thirdImage = { src: thirdImgPath, alt: "", classes: "work-image__pic" };

  return (
    <div className="section-works-wrapper">
      <section className="section-work section-work__right">
        <h2 className="title title__works">some of our works</h2>
        <div className="work-block">
          <div className="work-image">
            <Image src={firstImage.src} alt={firstImage.alt} classes={firstImage.classes}/>
          </div>
          <div className="work-descr">
            <h3 className="work-descr__title">AO Glonass</h3>
            <h4 className="work-descr__subtitle">concept</h4>
            <div className="work-descr__tags">
              <div className="work__tag work__tag--space">
                  Mobile WEB
              </div>
              <div className="work__tag">WEB</div>
            </div>
            <p className="work-descr__text work-descr__text--right">
              Glonass connected millions of drivers and thousands of developers of services and applications into a single ecosystem.
            </p>
          </div>
        </div>
      </section>
      <section className="section-work section-work__left">
        <div className="work-block">
          <div className="work-descr work-descr__left">
            <h3 className="work-descr__title">Delta credit</h3>
            <h4 className="work-descr__subtitle"></h4>
            <div className="work-descr__tags">
              <div className="work__tag">Android</div>
            </div>
            <p className="work-descr__text">
              Delta Credit has been successfully operating in Russia since 1998. New application simplifies the interaction with the bank and attract new customers.
            </p>
          </div>
          <div className="work-image">
              <Image src={secondImage.src} alt={secondImage.alt} classes={secondImage.classes}/>
          </div>
        </div>
      </section>
      <section className="section-work section-work__right">
        <div className="work-block">
          <div className="work-image">
              <Image src={thirdImage.src} alt={thirdImage.alt} classes={thirdImage.classes}/>
          </div>
          <div className="work-descr">
            <h3 className="work-descr__title">Blackcatcard</h3>
            <h4 className="work-descr__subtitle">concept</h4>
            <div className="work-descr__tags">
              <div className="work__tag work__tag--space">iOS</div>
              <div className="work__tag work__tag--space">Android</div>
              <div className="work__tag">WEB</div>
            </div>
            <p className="work-descr__text work-descr__text--right">
              Large European Bank issued by Papaya Ltd. Now with the new applications on all popular platforms, Blackcatcard has a strong position and satisfied customers.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}