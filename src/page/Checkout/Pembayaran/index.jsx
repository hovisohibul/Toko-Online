import React, { useEffect } from 'react'
import KodePromo from './KodePromo'
import style from './style.module.css'
import man from './assets/man.png'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProduct } from '../../../manage/action'

function Pembayaran() {
    
    const {id} = useParams()
    const dispatch = useDispatch()
    const {entity} = useSelector((state) => state.bootcamp)

    const fetchData = async(id) => {
        dispatch(fetchProduct(id))
    }

    useEffect(() => {
        fetchData(id)
    },[])

    return (
        <>
            <div className={style['container']}>
                <h3>Ringkasan Pesanan</h3>
                <div className={style['bootcamp-type']}>
                    <div className={style['image-pembayaran']}>
                        <img src={man} alt="man" />
                    </div>
                    <div>
                        <h5>{entity.mainTitle}</h5>
                        <h5>{entity.subTitle}</h5>
                        <table className={style['title']}>
                            <tbody>
                                <tr>
                                    <th>Batch</th>
                                    <td>{entity.batch}</td>
                                </tr>
                                <tr>
                                    <th>Mentor</th>
                                    <td>{entity.mentor.mentor1}, {entity.mentor.mentor2}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <KodePromo />
            </div>
        </>
    )
}

export default Pembayaran