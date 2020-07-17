import ajax from './ajax'

export default reqLogin = (uid, pwd, isMobile = 0) => ajax({
  method: 'POST',
  url: '/AccessToken/UserLogin',
  data: {
    uid,
    pwd,
    isMobile
  }
})