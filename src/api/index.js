import ajax from './ajax'

export const reqLogin = (uid, pwd, isMobile = 0) => ajax({
  method: 'POST',
  url: '/AccessToken/UserLogin',
  data: {
    uid,
    pwd,
    isMobile
  }
})