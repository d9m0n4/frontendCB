import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import validator from 'validator'
import './LoginRight.scss'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

const LogInRight = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const [isRepeatPasswordVisible, setIsRepeatPasswordVisible] = useState(false)

  const onSubmit = (data) => {
    if (validator.isEmail(data.email)) {
      console.log('Logged in successfully')
    }
  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <h2 className="form__title">Log in</h2>
        <div className="form__descr">
          <p>
            No account?{' '}
            <span>
              <Link to="/SignIn">Create an account</Link>
            </span>
          </p>
        </div>
        <div className={`form__group  ${errors.email ? 'has-error' : ''}`}>
          <label htmlFor="email">E-mail</label>
          <div className="email__input">
            <input
              type="email"
              id="email"
              name="email"
              required
              {...register('email', {
                required: true,
                pattern: /^\S+@\S+$/i,
              })}
            />
          </div>
          {errors.email?.type === 'required' && <div className="error-message">Please enter your email address</div>}
          {errors.email?.type === 'pattern' && <div className="error-message">Please enter a valid email address</div>}
        </div>
        <div className={`form__group ${errors.password ? 'has-error' : ''}`}>
          <label htmlFor="password">Password</label>
          <div className="password__input">
            <input
              type={isRepeatPasswordVisible ? 'text' : 'password'}
              id="password"
              name="password"
              required
              {...register('password', { required: true })}
            />
            <FontAwesomeIcon
              icon={isRepeatPasswordVisible ? faEyeSlash : faEye}
              onClick={() => setIsRepeatPasswordVisible(!isRepeatPasswordVisible)}
              className="password__icon"
            />
          </div>
          {errors.password?.type === 'required' && <div className="error-message">Please enter your password</div>}
        </div>

        <div className=" wrap__btn">
          <button type="submit" className="btn__form">
            Log in
          </button>
        </div>
        <div className="form__group">
          <Link to="/ResetPassword" className="form__forgot">
            Forgot password?
          </Link>
        </div>
      </form>
    </>
  )
}

export default LogInRight