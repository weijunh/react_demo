
import Login from '../pages/login/Login.jsx'
import Admin from '../pages/admin/Admin.jsx'
import NotMatch from '../pages/not_match/notmatch.jsx'
const routes = [
  {
    path: '/',
    component: Admin,
    exact: true
  },
  {
    path: '/login',
    component: Login,
    exact: true
  },
  {
    path: '/notmatch',
    component: NotMatch,
    exact: true
  }
]
export default routes