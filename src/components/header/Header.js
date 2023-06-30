import React, { useContext, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../UserContext'

function Header() {
  const { setUserInfo,userInfo } = useContext(UserContext)
  useEffect(() => {
    fetch('http://localhost:4000/profile', {
      credentials: 'include'
    }).then((response) => {
      response.json().then((userInfo) => {
        console.log(userInfo.username)
        setUserInfo(userInfo.username)
      })
    })
  }, [])

  const handleLogout = () => {
    fetch('http://localhost:4000/logout', {
      credentials: 'include',
      method: 'POST'
    })
    setUserInfo(null)
  }


  const username = userInfo?.username

  return (
    <header>
      <Link to='/' className='logo'>
        Blog
      </Link>

      <nav>
        {username && (
          <>
            <Link to='/create'>Create new post</Link>
            <a onClick={handleLogout}>Logout</a>
          </>
        )}

        {!username && (
          <>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
          </>
        )}
      </nav>
    </header>
  )
}

export default Header
