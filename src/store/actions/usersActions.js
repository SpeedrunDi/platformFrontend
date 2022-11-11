import usersSlice from '../slices/usersSlices'

export const {
  registrationRequest,
  registrationSuccess,
  registrationFailure,
  loginUserRequest,
  loginUserSuccess,
  loginUserFailure,
  facebookLoginRequest,
  facebookLoginSuccess,
  facebookLoginFailure,
  googleLoginRequest,
  googleLoginSuccess,
  googleLoginFailure,
  appleLoginRequest,
  appleLoginSuccess,
  appleLoginFailure,
  vkLoginRequest,
  vkLoginSuccess,
  vkLoginFailure,
} = usersSlice.actions