import React from 'react';


export default function FormContacts() {

  return (
    <section className="section-contacts" id="contact">
      <h2 className="title title__contacts">Let’s work on a project <br /> together!</h2>
      <div className="form-wrapper">
          <form className="form__content" id="data">
              <input 
                  className="form__input form__block-input"
                  type="email"
                  name='user_email'
                  placeholder='E-mail'
                  required
              />
              <div className="select-wrapper">
                <select className="form__input form__input--select" name="user_options" form="data">  
                  <option className="option__text">Type of service</option>
                  <option className="option__text" value="1">Option 1</option>
                  <option className="option__text" value="2">Option 2</option>
                  <option className="option__text" value="3">Option 3</option>
                </select>
                <div className="triangle-down"></div> 
              </div>
              <textarea 
                  className="form__input form__textarea"
                  id="message"
                  name="user_message"
                  type="text"
                  rows="2"
                  required
                  placeholder="Short description…"
              />
              <button type="submit" className="button button__form">Send</button>
          </form>
      </div>
    </section>
  )
}
