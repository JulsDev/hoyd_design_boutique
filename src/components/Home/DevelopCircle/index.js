import React from 'react';
import { useTranslation } from 'react-i18next';
import parse from 'html-react-parser';

import Image from 'components/_base/Image';
import devArrow from 'assets/img/main/dev-arrow.png';

export default function DevelopCircle() {
  const {t} = useTranslation();

  const devTable = [
    {text1: t('devCycle.step1'), number: '1', text2: ''},
    {text1: '', number: '2', text2: t('devCycle.step2')},
    {text1: t('devCycle.step3'), number: '3', text2: ''},
    {text1: '', number: '4', text2: t('devCycle.step4')},
  ]

  return (
    <section className="section-develop">
      <h2 className="title title__develop">
        {parse(t('devCycle.title'))}
      </h2>
      <div className='section-dev__content'>
        <Image src={devArrow} alt='develop circle hoyd' classes='section-develop__arrow' />  
        {devTable.map((item, index) => {
          return (
            <div key={index} className='dev__content-row'>
              <p className='dev__content-text dev__content-text--left'>{item.text1}</p>
              <div className='dev__content-circle-wrap'>
                <div className='dev__content-circle'>
                  <span className="dev__content-number">{item.number}</span>
                </div>
              </div>
              <p className='dev__content-text dev__content-text--right'>{item.text2}</p>
            </div>
          ) 
        })}
      </div>
    </section>
  )
}
