import {React, useEffect, useState} from 'react'
import style from './style.module.css'
import man from './assets/man.png'
import ATM from './ATM'
import InternetBanking from './InternetBanking'
import MBanking from './MBanking'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import mandiri from '../../../assets/img/mandiri.png'
import { useParams } from 'react-router-dom'
import { batch, useDispatch, useSelector } from 'react-redux'
import { fetchProduct } from '../../../manage/action'

function Instruksi() {

    const [content, setContent] = useState(undefined)
    const {id} = useParams()
    const dispatch = useDispatch()
    const {entity} = useSelector((state) => state.bootcamp)

    const fetchData = async(bootcampId) => {
        dispatch(fetchProduct(bootcampId))
    }

    useEffect(() => {
        fetchData(id)
    },[])

    let showContentDiv
    if (content === 'ATM') {
        showContentDiv = <ATM />
    }else if(content === 'Internet Banking'){
        showContentDiv = <InternetBanking />
    }else{
        showContentDiv = <MBanking/>
    }
    
    return (
        <>
            <div className={style['container']}>
                <div className={style.detail}>
                    <div className={style['bootcamp-type']}>
                        <div className={style['image-bootcamp']}>
                            <img src={man} alt="man" />
                        </div>
                        <div>
                            <h5>{entity.mainTitle}</h5>
                            <h5>{entity.subTitle}</h5>
                            <table className={style['title-bootcamp']}>
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
                    <h3>Metode Pembayaran</h3>
                    <div>
                        <p>Bank Transfer (verifikasi manual)-Mandiri</p>
                        <div className={style['bank-option']}>
                            <img src={mandiri} alt="mandiri" />
                            <div className={style['rekening']}>
                                <div className={style['copy-paste']}>
                                    No Rek. 137000299089
                                    <FontAwesomeIcon icon={faCopy} fixedWidth/>
                                </div>
                                <div>
                                    <p>a.n. PT Widya Kreasi Bangsa</p>
                                </div>
                            </div>
                        </div>
                        <p>Nominal yang harus dibayar senilai:</p>
                        <p className={style['price']}>Rp. 400.000</p>
                    </div>
                </div>
                <div className={style['instruksi']}>
                    <h3>Instruksi Pembayaran</h3>
                    <ul className={style['navbar-bank']}>
                        <li>
                            <input type="button" value="ATM" onClick={(ev) => setContent(ev.target.value)}/>
                        </li>
                        <li>
                            <input type="button" value="Internet Banking" onClick={(ev) => setContent(ev.target.value)}/>
                        </li>
                        <li>
                            <input type="button" value="MBanking" onClick={(ev) => setContent(ev.target.value)}/>
                        </li>
                    </ul>
                    {showContentDiv}
                </div>
            </div>
        </>
    )
}

export default Instruksi