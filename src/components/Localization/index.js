import React from 'react'

export default function Localization(props) {
  const { changeLanguage } = props;

  return (
    <div className="language-block">
      <button className="langButton" onClick={changeLanguage('en')}>en</button>
      <button className="langButton" onClick={changeLanguage('ru')}>ru</button>
    </div>
  )
}
