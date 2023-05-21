import React, { useEffect } from 'react'
import Navbar from '../../component/Navbar'
import Pesanan from './Pesanan'
import Pembayaran from './Pembayaran'
import Footer from '../../component/Footer'
import style from './style.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProduct } from '../../manage/action'

function Checkout() {

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

    const backToDetail = (bootcampId) => {
        navigate(`/detail/${bootcampId}`)
    }

    return (
        <>
            <Navbar color={'#1151a5'}/>
            <main className={style.container}>
                <div className={style.icon}>
                    <FontAwesomeIcon icon={faArrowLeft} className={style.arrow} onClick={() => backToDetail(entity.id)}/>
                    <span>Checkout</span>
                    <FontAwesomeIcon icon={faAngleRight}/>
                    Instruksi Bayar
                </div>
                <h1>Checkout</h1>                
                <div className={style.content}>
                    <Pesanan/>
                    <Pembayaran/>
                </div>                
            </main>
            <Footer/>
        </>
    )
}

export default Checkout