import React from 'react'
import { db } from '../base';
import style from './main.module.css'

const MyTable = ({heads, datas}) =>{

    const handleClick = (data) =>{
        db.collection("karyawan").doc(data.id).delete().then(() => {
            alert("Document successfully deleted!");
            window.location.reload();
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
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
            datas.map((item,i)=>
                <tr key={i}>
                    <td>{item.data().Name}</td>
                    <td>{item.data().Position}</td>
                    <td>{item.data().Phone}</td>
                    <td>{item.data().etag}</td>
                    <td><button onClick={()=>handleClick(item)}>Hapus Data</button></td>
                </tr>
            )
        }
        
      </table>
    )
}

export default MyTable