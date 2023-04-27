import React from 'react'
import Header from '../../component/Header'
import Card from '../../component/Card'
import Footer from '../../component/Footer'
import style from './style.module.css'

function Home() {
    return (
        <>
            <Header />
            <main className={style['main-body']}>
                <div className={style['container']}>
                    <div className={style['content']}>
                        <Card/>
                    </div>
                    <div className={style['content']}>
                        <Card/>
                    </div>
                </div>
            </main>
            <Footer height={'100vh'} width={'100%'}/>
        </>
    )
}

export default Home