import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import Image from '../../_base/Image';

import worksLine from '../../../assets/img/main/works-line.png';
import firstImgPath from '../../../assets/img/works/cashwagon-main.png';
import secondImgPath from '../../../assets/img/works/clossapp.png';
import thirdImgPath from '../../../assets/img/works/blackcard.png';
import backImageHoyd from '../../../assets/img/main/workHoyd.png';
import backImageDesign from '../../../assets/img/main/workDesign.png';

export default function WorksList() {

  const firstImage = { src: firstImgPath, alt: "AO Glonass", classes: "work-image__pic" };
  const secondImage = { src: secondImgPath, alt: "Delta credit", classes: "work-image__pic--center" };
  const thirdImage = { src: thirdImgPath, alt: "Blackcatcard", classes: "work-image__pic" };

  return (
    <div className="section-works-wrapper">
      <section className="section-work section-work__right">
        <Image src={worksLine} alt="hoyd we love what we do" className="section-about__img-line" />
        <h2 className="title title__works">
          Glimpse of what we have done <br /> for our beloved clients
        </h2>
        <div className="work-block">
          <div className="work-image">
            <Image src={firstImage.src} alt={firstImage.alt} classes={firstImage.classes}/>
          </div>
          <div className="work-descr">
            <h3 className="work-descr__title">CASHWAGON</h3>
            <div className="work-descr__tags">
              <div className="work__tag work__tag--space">iOS</div>
              <div className="work__tag">WEB</div>
            </div>
            <p className="work-descr__text work-descr__text--right">
              Digital platform providing access to a broad range of consumer financial products.
            </p>
            <a href="https://cashwagon.com" target="_blank" className="work-descr__link">
              https://cashwagon.com
            </a>
          </div>
        </div>
      </section>
      <div className="section-work__back">
        <Image src={backImageHoyd} alt="hoyd" className="section-work__back-img section-work__back-img--hoyd" />
      </div>
      <section className="section-work section-work__left">
        <div className="work-block work-block__center">
          <div className="work-descr work-descr__left">
            <h3 className="work-descr__title">CLOS APP</h3>
            <h4 className="work-descr__subtitle"></h4>
            <div className="work-descr__tags">
              <div className="work__tag">iOS</div>
            </div>
            <p className="work-descr__text">
              Conduct remote shoots and take photos and videos on your iPhone with other people as if they are in the same room with you.
            </p>
            <a href="https://closapp.space" target="_blank" className="work-descr__link">
              https://closapp.space
            </a>
          </div>
          <div className="work-image">
              <Image src={secondImage.src} alt={secondImage.alt} classes={secondImage.classes}/>
          </div>
        </div>
      </section>
      <div className="section-work__back">
        <Image src={backImageDesign} alt="design" className="section-work__back-img section-work__back-img--design" />
      </div>
      <section className="section-work section-work__right">
        <Image src={worksLine} alt="hoyd we love what we do" className="section-about__img-line" />
        <div className="work-block">
          <div className="work-image">
              <Image src={thirdImage.src} alt={thirdImage.alt} classes={thirdImage.classes}/>
          </div>
          <div className="work-descr">
            <h3 className="work-descr__title">Blackcatcard</h3>
            <div className="work-descr__tags">
              <div className="work__tag work__tag--space">iOS</div>
              <div className="work__tag work__tag--space">Android</div>
              <div className="work__tag">WEB</div>
            </div>
            <p className="work-descr__text work-descr__text--right">
              Mobile bank which offers an instantly ready EU bank account and a Mastercard, accepted worldwide.
            </p>
            <a href="https://blackcatcard.com" target="_blank" className="work-descr__link">
              https://blackcatcard.com
            </a>
          </div>
        </div>
      </section>
      <HashLink to='#portfolio'>
        <Link to='/portfolio' className="portfolio-link">
          MORE PROJECTS HERE :)
        </Link>
      </HashLink>
    </div>
  );
}