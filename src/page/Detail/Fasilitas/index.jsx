import React from 'react'
import style from './style.module.css'

function Fasilitas() {
    return (
        <>
            <div className={style['container']}>
                <h3>Fasilitas</h3>
                <div className={style['fasilitas-content']}>
                    <h5>E-Sertifikat</h5>
                    <h5>Portofolio</h5>
                    <h5>Job Connector</h5>
                    <h5>Career Developement</h5>
                </div>
            </div>
        </>
    )
}

export default Fasilitas