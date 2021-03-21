import React from 'react';
import { useForm } from 'react-hook-form';


export default function FormContacts() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <section className="section-contacts" id="contact">
      <h2 className="title title__contacts">Let’s work on a project <br /> together!</h2>
      <div className="form-wrapper">
          <form noValidate className="form__content" id="data" onSubmit={handleSubmit(onSubmit)}>
              <input 
                  className="form__input form__block-input"
                  type="text"
                  name='user_name'
                  placeholder='Name'
                  required
                  ref={register({ 
                    required: 'This is required',
                    pattern: {
                      value: /[A-Za-z]/,
                      message: 'Invalid name'
                    },
                    minLength: { value: 3, message: 'too short name'}, 
                    maxLength: { value: 10, message: 'too long name'}
                  })}
              />
              {errors.user_name && <div className='form-input__error'>{errors.user_name && errors.user_name.message}</div>}
              <input 
                  className="form__input form__block-input"
                  type="email"
                  name='user_email'
                  placeholder='E-mail'
                  required
                  ref={register({
                    required: 'This is required',
                    pattern: {
                      value: /((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})/,
                      message: 'Invalid E-mail'
                    }
                  })}
              />
              {errors.user_email && <div className='form-input__error'>{errors.user_email && errors.user_email.message}</div>}
              {/* <div className="select-wrapper">
                <select className="form__input form__input--select" name="user_options" form="data">  
                  <option className="option__text">Type of service</option>
                  <option className="option__text" value="1">Option 1</option>
                  <option className="option__text" value="2">Option 2</option>
                  <option className="option__text" value="3">Option 3</option>
                </select>
                <div className="triangle-down"></div> 
              </div> */}
              <textarea 
                  className="form__input form__textarea"
                  id="message"
                  name="user_message"
                  type="text"
                  rows="2"
                  required
                  placeholder="Short description…"
                  ref={register({
                    required: 'This is required',
                    maxLength: { value: 250, message: 'too long name'}
                  })}
              />
              {errors.user_message && <div className='form-input__error'>{errors.user_message && errors.user_message.message}</div>}
              <button type="submit" className="button button__form">Send</button>
          </form>
      </div>
    </section>
  )
}
