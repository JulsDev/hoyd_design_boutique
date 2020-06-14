import React from 'react';
import Menu from '../Menu';
import Image from '../_base/Image';

import logoPath from '../../assets/img/logo.png';

export default function Header() {

  const logoInfo = {
    src: logoPath,
    alt: "HOYD logo",
    classes: "header-logo__img"
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header-block">
          <div className="header-block__left">
            <a href="./">
              <Image src={logoInfo.src} className={logoInfo.classes} alt={logoInfo.alt} />
            </a>
          </div>
          <div className="header-block__right">
            <div className="menu">
              <Menu />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}