import React from 'react';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Content from 'components/Content';
import CookieNotification from 'components/CookieNotification';

export default function App() {
  // проверяем localStorage вошедшего пользователя
  // если он первый раз -> показываем окно с куками
  const cookieInfo = localStorage.getItem('cookieAccept');

  return (
    <div className="wrapper">
      <Header />
      <Content />
      <Footer />
      <CookieNotification cookieInfo={cookieInfo} />
    </div>
  )
}