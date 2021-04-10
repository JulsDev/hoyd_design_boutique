import React from 'react';
import { useTranslation } from 'react-i18next';

import Image from 'components/_base/Image';
import aboutLine from 'assets/img/main/about-line.png';

export default function About() {
  const { t } = useTranslation();

  return (
    <section className="section-about">
      <Image src={aboutLine} alt="about hoyd" className="section-about__img-line" />
      <h2 className="title title__about">{t('about.title')}</h2>
      <div className="section-about__card">
        <p className="card__text">
          {t('about.descr')}
        </p>
        <p className="card__text">
          {t('about.team')}
        </p>
      </div>
    </section>
  )
}
