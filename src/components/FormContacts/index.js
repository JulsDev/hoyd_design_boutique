import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import parse from 'html-react-parser';

export default function FormContacts() {
  const {t} = useTranslation();
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <section className="section-contacts" id="contact">
      <h2 className="title title__contacts">
        {parse(t('form.title'))}
      </h2>
      <div className="form-wrapper">
          <form noValidate className="form__content" id="data" onSubmit={handleSubmit(onSubmit)}>
              <input 
                  className="form__input form__block-input"
                  type="text"
                  name='user_name'
                  placeholder={t('form.name')}
                  required
                  ref={register({ 
                    required: t('form.errors.required'),
                    pattern: {
                      value: /[A-Za-z]/,
                      message: t('form.errors.invalidName')
                    },
                    minLength: { value: 3, message: t('form.errors.shortName')}, 
                    maxLength: { value: 10, message: t('form.errors.longName')}
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
                    required: t('form.errors.required'),
                    pattern: {
                      value: /((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})/,
                      message: t('form.errors.invalidMail')
                    }
                  })}
              />
              {errors.user_email && <div className='form-input__error'>{errors.user_email && errors.user_email.message}</div>}
              <textarea 
                  className="form__input form__textarea"
                  id="message"
                  name="user_message"
                  type="text"
                  rows="2"
                  required
                  placeholder={t('form.description')}
                  ref={register({
                    required: t('form.errors.required'),
                    maxLength: { value: 250, message: t('form.errors.longName')}
                  })}
              />
              {errors.user_message && <div className='form-input__error'>{errors.user_message && errors.user_message.message}</div>}
              <button type="submit" className="button button__form button--hover">
                {t('form.button')}
              </button>
          </form>
      </div>
    </section>
  )
}
