import {React, useState} from 'react'
import man from './assets/man.png'
import { dataCard } from '../../utils/cardArray'
import style from './style.module.css'

export default function Card({props}) {

    const [content, setContent] = useState(dataCard)

    return (
        <>
            {content.map((item, id) => {
                return (
                    <div className={style['main-card']} key={id}>
                        <div className={style['card-header']}>
                            <div className={style['header-image']}>
                                <img src={man} alt="man" />
                            </div>
                            <div className={style['header-text']}>
                                <h5 className={style['card-topic']}>{item.topicContent}</h5>
                                <h3 className="card-title">{item.title.mainTitle}</h3>
                                <h6 className="card-subtitle fw-normal">({item.title.subTitle})</h6>
                            </div>
                        </div>
                        <div className={style['card-body']}>
                            <div>
                                <h5 className='fw-bold'>{item.title.mainTitle}</h5>
                                <h5 className='fw-bold'>{item.title.subTitle}</h5>
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
                                    <p className={style['after-diskon']}>Rp. {item.cost}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}            
        </>
    )
}
