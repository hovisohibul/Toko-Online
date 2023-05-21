import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import style from './style.module.css'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProduct } from '../../../manage/action'

// import { cardArray } from '../../../utils/cardArray'

function DaftarCard() {

    // 
    const {id} = useParams()
    const dispatch = useDispatch()
    const {entity} = useSelector((state) => state.bootcamp)

    const fetchData = async(bootcampId) => {
        dispatch(fetchProduct(bootcampId))
    }

    useEffect(() => {
        fetchData(id)
        console.log(fetchData(id))
    },[])

    const navigate = useNavigate()

    const goToCheckOut = (bootcampId) => {
        navigate(`/checkout/${bootcampId}`)
    }
    return (
        <>
            <div className={style['container']}>
                <div className={style['card-header']}>
                    <div className={style['materi']}>
                        <h5>Materi</h5>
                    </div>
                    <div className={style['fasilitas']}>
                        <h5>Fasilitas</h5>
                    </div>
                </div>
                <div className={style['card-body']}>
                    <p className={style['normal']}>Rp. 125.000</p>
                    <p>Rp. 99.000</p>
                </div>
                <Button variant='warning' style={{color: '#fff'}} onClick={() => goToCheckOut(entity.id)}>Daftar Kelas</Button> 
            </div>
        </>
    )
}

export default DaftarCard