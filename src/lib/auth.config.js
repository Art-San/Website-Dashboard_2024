export const authConfig = {
  providers: [],
  pages: {
    signIn: '/login'
  },
  callbacks: {
    async jwt({ token, user }) {
      // console.log('auth.config  jwt user', user)
      // console.log('auth.config  jwt token', token)
      if (user) {
        token.id = user.id
        token.isAdmin = user.isAdmin
        token.username = user.username
        token.img = user.img
      }
      return token
    },
    async session({ session, token }) {
      // console.log('auth.config  session token', token)
      // console.log('auth.config  session session', session)
      if (token) {
        session.user.id = token.id
        session.user.isAdmin = token.isAdmin
        session.user.username = token.username
        session.user.img = token.img
      }
      // console.log('auth.config  session session', session)
      return session
    },
    authorized({ auth, request }) {
      const user = auth?.user
      // console.log('authConfig user ', user)
      // console.log('auth.config authorized user', user)
      // console.log(
      //   'auth.config authorized request?.nextUrl.pathname',
      //   request?.nextUrl.pathname
      // )
      const isOnDashboard = request.nextUrl?.pathname.startsWith('/dashboard')
      const isOnBlogPage = request.nextUrl?.pathname.startsWith('/blog')
      const isOnLoginPage = request.nextUrl?.pathname.startsWith('/login')

      // Только админ имеет доступ панели администратора
      if (isOnDashboard && !user?.isAdmin) {
        return false
      }

      // только аутентифицированные пользователи МОГУТ ПОЛУЧИТЬ СТРАНИЦу блога
      if (isOnBlogPage && !user) {
        return false
      }

      // ТОЛЬКО НЕ АУТЕНТИФИЦИРОВАННЫЕ ПОЛЬЗОВАТЕЛИ МОГУТ достигнуть НА СТРАНИЦУ ВХОДА
      if (isOnLoginPage && user?.isAdmin) {
        return Response.redirect(new URL('/dashboard', request.nextUrl))
      } else if (isOnLoginPage && user) {
        return Response.redirect(new URL('/', request.nextUrl))
      }

      return true
    }
    // authorized({ auth, request }) {
    //   const user = auth?.user
    //   const isOnDashboard = request.nextUrl.pathname.startsWith('/dashboard')
    //   // console.log('authConfig isOnDashboard', isOnDashboard)
    //   // console.log('authConfig user ', user)
    //   if (isOnDashboard) {
    //     if (user) return true
    //     return false
    //   } else if (user) {
    //     return Response.redirect(new URL('/dashboard', request.nextUrl))
    //   }
    //   return true
    // }
  }
}
