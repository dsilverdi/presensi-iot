import React from 'react'
// import { db } from '../base';
import style from './main.module.css'

const PresensiTable = ({heads, datas, date}) =>{
    const istheDate = (data) =>{
        const tanggal = data.Tanggal.toDate()
        return tanggal.getDate() === date.getDate() &&
        tanggal.getMonth() === date.getMonth() &&
        tanggal.getFullYear() === date.getFullYear()
    }
    return (
        <table className={style.Table}>
        <tr>
            {
                heads.map((head, i) =>
                    <th key={i}>
                        {head}
                    </th>
                )
            }
        </tr>
        {
            datas.filter(istheDate).map((data,i)=>
                <tr key={i}>
                    <td>{data.Name}</td>
                    <td>{data.Tanggal.toDate().toLocaleTimeString('en-US')}</td>
                </tr>
            )
        }
        
      </table>
    )
}

export default PresensiTable