import Home from '~/pages/Home'
import Account from '~/pages/Account'

// publicRoutes: không cần đăng nhập vẫn vào xem đc
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/account', component: Account },
]

// privateRoutes: cần đăng nhập mới vào xem được, không đăng nhập thì chuyển hướng về trang login
const privateRoutes = [

]

export { publicRoutes, privateRoutes }