import React from 'react';
import { Link } from 'react-router-dom'

import Menu from 'components/Menu';
import Image from 'components/_base/Image';
import Localization from 'components/Localization';

import logoPath from 'assets/img/logo.png';

export default function Header(props) {
  const { changeLanguage } = props;

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
            <Link to="/">
              <Image src={logoInfo.src} className={logoInfo.classes} alt={logoInfo.alt} />
            </Link>
          </div>
          <div className="header-block__right">
            <div className="menu">
              <Menu />
            </div>
            <Localization changeLanguage={changeLanguage} />
          </div>
        </div>
      </div>
    </header>
  )
}