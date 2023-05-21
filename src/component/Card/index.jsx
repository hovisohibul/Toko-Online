import {React, useEffect} from 'react'
import man from './assets/man.png'
import style from './style.module.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAll } from '../../manage/action'

export default function Card() {

    const dispatch = useDispatch()
    const { data } = useSelector((state) => state.bootcamp)

    const fetchingData = async () => {
        dispatch(fetchAll())
    }

    useEffect(() => {
        fetchingData()
    },[])

    const navigate = useNavigate()

    const goToDetail = (id) => {
        navigate(`/detail/${id}`)
    }

    return (
        <>
            {data.map((item) => {
                return (
                    <div className={style['main-card']} key={item.id} onClick={() => goToDetail(item.id)}>
                        <div className={style['card-header']}>
                            <div className={style['header-image']}>
                                <img src={man} alt="man" />
                            </div>
                            <div className={style['header-text']}>
                                <h5 className={style['card-topic']}>Intensive Bootcamp</h5>
                                <h3 className="card-title">{item.mainTitle}</h3>
                                <h6 className="card-subtitle fw-normal">({item.subTitle})</h6>
                            </div>
                        </div>
                        <div className={style['card-body']}>
                            <div>
                                <h5 className='fw-bold'>{item.mainTitle}</h5>
                                <h5 className='fw-bold'>{item.subTitle}</h5>
                            </div>
                            <div>
                                <div>
                                    <table className={style['table-content']}>
                                        <tbody>
                                            <tr>
                                                <th className={style['table-head']}>Batch</th>
                                                <td className='table-text'>{item.batch}</td>
                                            </tr>
                                            <tr>
                                                <th className={style['table-head']}>Mentor</th>
                                                <td className='table-text'>
                                                    {item.mentor.mentor1}, {item.mentor.mentor2}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className='d-flex justify-content-end gap-2'>
                                    <p className={style['before-diskon']}>Rp. 4.000.000</p>
                                    <p className={style['after-diskon']}>Rp. {item.price}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}
