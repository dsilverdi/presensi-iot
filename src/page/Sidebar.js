import { faBook, faHome, faUserFriends } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { useAuth } from '../auth/Auth'
import style from './main.module.css'

const Sidebar = () => {
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    async function handleLogout() {
        try {
        await logout()
        history.push("/login")
        } catch {
        alert("Failed to log out")
        }
    }

    const Name = currentUser.displayName
    return (
        <div className={style.Sidebar}>
            <div className={style.Profile}>
                <h3>{Name}</h3>
                <p>Active</p>
            </div>
            <ul>
         
                <li><NavLink exact to="/" activeStyle={{color:"#2FD4AE",background:"#FFFFFF",paddingLeft:"2em"}}><FontAwesomeIcon icon={faHome}/>Dashboard</NavLink></li>
                <li><NavLink exact to="/presensi" activeStyle={{color:"#2FD4AE",background:"#FFFFFF",paddingLeft:"2em"}}><FontAwesomeIcon icon={faBook}/>Presensi Hari ini</NavLink></li>
                <li><NavLink exact to="/daftar-karyawan"activeStyle={{color:"#2FD4AE",background:"#FFFFFF",paddingLeft:"2em"}}><FontAwesomeIcon icon={faUserFriends}/>Daftar Karyawan</NavLink></li>
            </ul>
            <div className={style.Btn}>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}

export default Sidebar
