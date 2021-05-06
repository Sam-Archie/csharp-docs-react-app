import React, { Fragment, useState } from 'react'
import { postLogin } from '../../features/login/api';
import { IUserData } from '../../features/login/types';
import { useAppDispatch } from '../../hooks'

const LoginForm: React.FC = () => {

  const dispatch = useAppDispatch();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmailChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setEmail(e.currentTarget.value)

  const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => setPassword(e.currentTarget.value)

  const submitUserDetails = (e: React.SyntheticEvent) => {
    e.preventDefault()

    const userData: IUserData = {
      email,
      password,
    }
    dispatch(postLogin(userData));
  }

  return (
    <Fragment>
      <form onSubmit={submitUserDetails}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={handleEmailChange}
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button type="submit">Sign-In</button>
      </form>
    </Fragment>
  )
}
  export default LoginForm;