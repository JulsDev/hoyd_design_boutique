import React from 'react';

import Image from '../../_base/Image';
import devArrow from '../../../assets/img/main/dev-arrow.png';


export default function DevelopCircle() {

  const devTable = [
    {text1: 'Research and analyze', number: '1', text2: ''},
    {text1: '', number: '2', text2: 'Unique concept'},
    {text1: 'Rapid prototyping', number: '3', text2: ''},
    {text1: '', number: '4', text2: 'Masterful design'},
  ]

  return (
    <section className="section-develop">
      <h2 className="title title__develop">Our efficient <br /> development cycle</h2>
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
