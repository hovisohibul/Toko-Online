import React from 'react'
import { Button } from 'react-bootstrap'
import style from './style.module.css'

function Verifikasi() {
    return (
        <>
            <div className={style['container']}>
                <h3>Sudah Transfer? Lakukan verifikasi pembayaran segera</h3>
                <Button variant='warning' style={{color: '#fff', width: '30%', padding: '2%', borderRadius: '50px'}}>Verifikasi Pembayaran</Button>
            </div>
        </>
    )
}

export default Verifikasi