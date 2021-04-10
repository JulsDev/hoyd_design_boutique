import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import parse from 'html-react-parser';

export default function CookieNotification(props) {
  const { cookieInfo } = props;
  const {t} = useTranslation();
  const [isOpen, setIsOpen] = useState(cookieInfo ? false : true);

  function handleIsOpen() {
    setIsOpen(false);
    const curTime = new Date();
    // save data in localStorage
    localStorage.setItem('cookieAccept', curTime);
  }

  if (!isOpen) return null;

  return (
    <div className="notification-block">
      <div className="notification-block__descr">
        {parse(t('cookies.text'))}
      </div>
      <button
        type='button'
        onClick={handleIsOpen}
        className="button notification-block__btn button--hover"
      >
        {t('cookies.confirmBtn')}
      </button>
    </div>
  )
}