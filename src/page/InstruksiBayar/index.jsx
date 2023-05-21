import React, { useEffect } from 'react'
import Navbar from '../../component/Navbar'
import Footer from '../../component/Footer'
import style from './style.module.css'
import Instruksi from './Instruksi'
import Verifikasi from './Verifikasi'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProduct } from '../../manage/action'

function InstruksiBayar() {
    const {id} = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {entity} = useSelector((state) => state.bootcamp)
    const fetchData = async(bootcampId) => {
        dispatch(fetchProduct(bootcampId))
    }

    useEffect(() => {
        fetchData(id)
    },[])

    const backToCheckout = (id) => {
        navigate(`/checkout/${id}`)
    }
    return (
        <>
            <Navbar color={'#1151a5'}/>
            <div className={style['container']}>
                <div className={style.icon}>
                    <FontAwesomeIcon icon={faArrowLeft} className={style.arrow} onClick={() => backToCheckout(entity.id)}/>
                    Checkout
                    <FontAwesomeIcon icon={faAngleRight}/>
                    <span>Instruksi Bayar</span>
                </div>
                <h1>Instruksi Bayar</h1>
                <div className={style.content}>
                    <Instruksi/>
                    <Verifikasi/>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default InstruksiBayar