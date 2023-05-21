import React from 'react'
import Navbar from '../../../component/Navbar'
import style from './style.module.css'
import woman from './assets/woman.png'
import right from './assets/right.png'

function Header() {
    return (
        <>
            <header className={style.container}>
                <Navbar />
                <div className={style['header-content']}>
                    <div className={style['header-text']}>
                        <h1>Programming Laravel</h1>
                        <h2>Getting Started with Laravel 9</h2>
                        <div>
                            <p>Mentor</p>
                            <div className={style['head-mentor']}>
                                <div className={style.mentor}>
                                    <p>William Hartono</p>
                                    <p>Developer at Widya Edu</p>
                                </div>
                                <div className={style.mentor}>
                                    <p>Farel Prayoga</p>
                                    <p>Developer at Widya Edu</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style['header-image']}>
                        <img src={woman} alt='woman' />
                        <img src={right} alt='right' />
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header