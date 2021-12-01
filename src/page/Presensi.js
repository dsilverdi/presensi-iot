import React, { forwardRef, useEffect, useState } from 'react'
import Template from './Template'
import style from './main.module.css'
import PresensiTable from './PresensiTable'
import { db } from '../base'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";


const Presensi = ()=>{
    const [startDate, setStartDate] = useState(new Date());
    const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
      <button className="example-custom-input" onClick={onClick} ref={ref}>
        {value}
      </button>
    ));

    const [datas, setDatas] = useState([])

    const handleClick = () => {
        window.location.reload()
    }

    const getPresensi = () => {
        db.collection("presensi").get().then((querySnapshot) => {
            const data = querySnapshot.docs.map(doc => doc.data());
            //const data = querySnapshot.docs.map(doc => doc)
            console.log(data)
            setDatas(data)
        });
    }

    useEffect(()=>{
        getPresensi();
    },[])

    return (
        <Template>
            <div className={style.Content}>
                <h1>Presensi Hari ini</h1>
                <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    customInput={<ExampleCustomInput />}
                />
                <PresensiTable heads={["Nama Karyawan","Waktu"]} datas={datas} date={startDate}/>
                <div className={style.TableBtn}>
                    <button onClick={handleClick}>Refresh</button>
                </div>
            </div>            
        </Template>
    )
}

export default Presensi