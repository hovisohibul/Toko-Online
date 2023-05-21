import React, { useEffect } from 'react'
import Header from './Header'
import Footer from '../../component/Footer'
import Materi from './Materi'
import style from './style.module.css'
import DaftarCard from './DaftarCard'
import Fasilitas from './Fasilitas'
import FooterDaftar from './FooterDaftar'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchProduct } from '../../manage/action'

function Detail() {

    // const {id} = useParams()
    // const dispatch = useDispatch()

    // const fetchData = async(bootcampId) => {
    //     dispatch(fetchProduct(bootcampId))
    // }

    // useEffect(() => {
    //     fetchData(id)
    //     console.log(fetchData(id))
    // },[])

    return (
        <>
            <Header/>
            <main className={style.container}>
                <div className={style['materi-content']}>
                    <DaftarCard/>
                    <Materi/>
                </div>
                <div className={style['fasilitas-content']}>
                    <Fasilitas/>
                </div>
            </main>
            <FooterDaftar/>
            <Footer/>
        </>
    )
}

export default Detail