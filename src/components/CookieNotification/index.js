import React, { useState } from 'react'

export default function CookieNotification(props) {
  const { cookieInfo } = props;
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
        Этот сайт использует файлы cookie для хранения данных. <br />
        Продолжая использовать сайт, вы даете согласие на работу с этими данными
      </div>
      <button
        type='button'
        onClick={handleIsOpen}
        className="button notification-block__btn"
      >
        Прекрасно
      </button>
    </div>
  )
}