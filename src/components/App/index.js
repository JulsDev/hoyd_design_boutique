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
  // check localStorage for current user
  // if he came for the first time -> show window with cookies
  let cookieInfo = false;
  const curCookieInfo = localStorage.getItem('cookieAccept');
  const curDate = new Date();
  const cookieDate = new Date(curCookieInfo);

  if (!curCookieInfo || curDate.getMonth() > cookieDate.getMonth()) {
    cookieInfo = false;
  } else {
    cookieInfo = true;
  }

  return (
    <div className="wrapper">
      <Header changeLanguage={changeLanguage} />
      <Content />
      <Footer />
      <CookieNotification cookieInfo={cookieInfo} />
    </div>
  )
}