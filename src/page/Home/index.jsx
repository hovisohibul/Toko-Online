import React, { useEffect, useState } from 'react'
import Header from '../../component/Header'
import Card from '../../component/Card'
import Footer from '../../component/Footer'
import style from './style.module.css'
// import { httpService } from '../../utils/serviceApi'

function Home() {

    return (
        <>
            <Header />
            <main className={style['main-body']}>
                <div className={style['container']}>
                    <div className={style['content']}>
                        <Card/>
                    </div>                
                </div>
            </main>
            <Footer height={'100%'} width={'100%'}/>
        </>
    )
}

export default Home