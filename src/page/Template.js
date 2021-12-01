import React from 'react'
import style from './main.module.css'
import Sidebar from './Sidebar'
const Template = ({children}) => {
    return (
        <div className={style.Template}>
            <Sidebar/>
            <div className={style.Wrapper}>
                {children}
            </div>
        </div>
    )
}

export default Template