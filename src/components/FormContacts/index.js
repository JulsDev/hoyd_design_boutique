import React from 'react';


export default function FormContacts() {

  return (
    <section className="section-contacts" id="contact">
      <h2 className="title title__contacts">contact us</h2>
      <div className="form-wrapper">
          <form className="form__content" id="data">
              <input 
                  className="form__input form__block-input"
                  type="email"
                  name='user_email'
                  placeholder='E-mail'
                  required
              />
              <select className="form__input form__input--select" name="user_options" form="data">
                <option className="option__text">Type of service</option>
                <option className="option__text" value="1">Option 1</option>
                <option className="option__text" value="2">Option 2</option>
                <option className="option__text" value="3">Option 3</option>
              </select>
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
