import React from 'react'
import Navbar from '../Navbar'
import right from './assets/right.png'
import left from './assets/left.png'
import woman from './assets/woman.png'
import style from './style.module.css'

function Header() {
    return (
        <>
            <header className={style['header-home']}>
                <Navbar />                
                <div className={style['header-container']}>
                    <div className={style['header-text']}>
                        <div className={style['header-h1']}>
                            <h1>Jadi expert bersama edspert.id</h1>
                        </div>
                        <div className={style['header-paragraph']}>
                            <p>Tingkatkan skill dan pengetahuan bersama para mentor terbaik di bidangnya, untuk siapkan karir impian anda</p>
                        </div>
                    </div>
                    <div className={style['header-image']}>
                        <div className={style['header-image-woman']}>
                            <img src={woman} alt="woman" />
                        </div>
                        <div className={style['header-image-right']}>
                            <img src={right} alt="half yellow triangle" />
                        </div>                        
                        <div className={style['header-image-left']}>
                            <img src={left} alt="half blue triangle" />
                        </div>
                    </div>
                </div>
            </header>            
        </>
    )
}

export default Header