import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import { useTranslation } from 'react-i18next';

export default function Menu() {
  const {t, i18n} = useTranslation();

  return (
    <>
      <nav className="menu">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to='/portfolio'>{t('portfolio')}</Link>
          </li>
          <li className="nav-item">
            <HashLink smooth to='#contact'>{t('contacts')}</HashLink>
          </li>
        </ul>
      </nav>
    </>
  )
}