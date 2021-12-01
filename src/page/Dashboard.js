import React from 'react'
import { useAuth } from '../auth/Auth'
import Template from './Template'
import style from './main.module.css'

const Dashboard = () => {
    const { currentUser} = useAuth()

    const Name = currentUser.displayName
    return (
        <Template>
            <div className={style.Content}>
                <h1>Welcome {Name}</h1>
            </div>
        </Template>
        
    )
}

export default Dashboard