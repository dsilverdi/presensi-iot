import React, { useEffect, useState } from 'react'
import Template from './Template'
import style from './main.module.css'
import {db} from '../base'
import MyTable from './Table'
import Modal from './Modal'

const DaftarKaryawan = ()=>{
    const [datas, setDatas] = useState([])
    const [show, setShow] = useState(false)

    const handleSubmit = async e =>{
        e.preventDefault()
        const { name, posisi, phonenumber,  ektp } = e.target.elements;

        db.collection("karyawan").add({
            Name: name.value,
            Position: posisi.value,
            Phone: phonenumber.value,
            etag: ektp.value
        })
        .then((docRef) => {
            alert("Document written with ID: ", docRef.id);
            window.location.reload();
        })
        .catch((error) => {
            console.log(error)
            alert("Error adding document: ", error);
        });
    }
    
    const handleClick = () => {
        setShow(!show)
    }

    const getKaryawan = () => {
        db.collection("karyawan").get().then((querySnapshot) => {
            // const data = querySnapshot.docs.map(doc => doc.data());
            const data = querySnapshot.docs.map(doc => doc)
            setDatas(data)
        });
    }

    useEffect(()=>{
        getKaryawan();
    },[])

    return (
        <Template>
            <div className={style.Content}>              
               <h1>Daftar Karyawan</h1>
                <MyTable heads={["Nama Karyawan","Posisi","Nomor Telepon","tag eKTP","Aksi"]} datas={datas}/>
                <div className={style.TableBtn}>
                    <button onClick={handleClick}>Tambah Karyawan</button>
                </div>

                {
                    show ? (
                        <Modal setShow={setShow} show={show}>
                            <div className={style.inputField}>
                                <h2>Tambah Karyawan</h2>
                                <form onSubmit={handleSubmit}>
                                    <label>Nama Lengkap</label>
                                    <input name="name" type="name" placeholder="Nama Lengkap" />
                                    
                                    <label>Posisi</label>
                                    <input name="posisi" type="text" placeholder="Posisi" />


                                    <label>Nomor Telepon</label>
                                    <input name="phonenumber" type="phonenumber" placeholder="Nomor Telepon" />

                                    <label>Nomor tag eKTP</label>
                                    <input name="ektp" type="text" placeholder="Nomor tag" />
                                    <br/>
                                    <button type="submit">Tambah Karyawan</button>
                                </form>
                            </div>
                        
                        </Modal>
                    ) : null
                }
                
                
            </div>
            
        </Template>
    )
}


export default DaftarKaryawan