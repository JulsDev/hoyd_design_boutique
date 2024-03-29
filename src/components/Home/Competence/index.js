import React from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'components/_base/Image';

import designImgPath from 'assets/img/competence/design.png'
import visualImgPath from 'assets/img/competence/visual.png'
import consultingImgPath from 'assets/img/competence/consulting.png'
import skillsLine from 'assets/img/main/skills-line.png';

export default function Competence() {
  const { t } = useTranslation();

  return (
    <section className="section-competence">
      <Image src={skillsLine} alt="hoyd" className="section-main__img-line" />
      <h2 className="title title__competence">
        {(t('competence.title')).toUpperCase()}
      </h2>
      <div className="competences">
          <div className="competences__block competences__block--design">
             <div className="competences__image">
                <Image src={designImgPath} alt={"Interface design"} classes={"competences__pic"}/>
             </div>
             <div className="competences__text">
              {(t('competence.first'))}
             </div>
          </div>
          <div className="competences__block competences__block--visual">
             <div className="competences__image">
                <Image src={visualImgPath} alt={"Visualization"} classes={"competences__pic"}/>
             </div>
             <div className="competences__text">
              {(t('competence.second'))}
             </div>
          </div>
          <div className="competences__block competences__block--consulting">
             <div className="competences__image">
                <Image src={consultingImgPath} alt={"consulting"} classes={"competences__pic"}/>
             </div>
             <div className="competences__text">
              {(t('competence.third'))}
             </div>
          </div>
        </div>
    </section>
  )
}
