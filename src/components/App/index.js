import React from 'react';
import i18n from 'src/i18n';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Content from 'components/Content';
import CookieNotification from 'components/CookieNotification';

const changeLanguage = (language) => {
  return () => {
    i18n.changeLanguage(language);
  }
};

export default function App() {
  // проверяем localStorage вошедшего пользователя
  // если он первый раз -> показываем окно с куками
  const cookieInfo = localStorage.getItem('cookieAccept');

  return (
    <div className="wrapper">
      <Header changeLanguage={changeLanguage} />
      <Content />
      <Footer />
      <CookieNotification cookieInfo={cookieInfo} />
    </div>
  )
}