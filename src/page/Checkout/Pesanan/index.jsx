import {React, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import Bank from './Bank'
import style from './style.module.css'

function Pesanan() {

    // state
    const [transfer, setTransfer] = useState(false)
    const [virtual, setVirtual] = useState(false)

    // check state value
    const setIconShow = () => {
        setTransfer(!transfer)
    }

    return (
        <>
            <div className={style['container']}>
                <h3>Pilih Metode Pembayaran</h3>
                <div className={style['transfer']}>
                    <div onClick={() => setIconShow()} className={style['transfer-manual']}>
                        <div className={style['manual-text']}>
                            <h5>Bank Transfer (verifikasi manual)</h5>
                            <p>Pembayaran melalui Bank Transfer Mandiri atau BCA. Metode bayar ini memerlukan verifikasi pembayaran manual melalui Whatsapp</p>
                        </div>
                        <div className={style['manual-icon']}>
                            {transfer ? (
                               <FontAwesomeIcon icon={faAngleUp}/> 
                            ):(
                                <FontAwesomeIcon icon={faAngleDown}/>
                            )}
                        </div>
                    </div><hr />
                    <div>
                        {transfer ? <Bank text={'Bank Transfer ke Rek Bank'}/> : false}
                    </div>
                </div>
                <div className={style['virtual']}>
                    <div className={style['virtual-account']} onClick={() => setVirtual(!virtual)}>
                        <div className={style['virtual-text']}>
                            <h5>Virtual Account (verifikasi otomatis)</h5>
                            <p>Pembayaran melalui virtual account berbagai bank. Metode bayar ini akan diverifikasi secara otomatis</p>
                        </div>
                        <div className={style['virtual-icon']}>
                            {virtual ? (
                               <FontAwesomeIcon icon={faAngleUp}/> 
                            ):(
                                <FontAwesomeIcon icon={faAngleDown}/>
                            )}
                        </div>
                    </div><hr />
                    <div>
                        {virtual ? <Bank text={'Virtual Account'}/> : false}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pesanan