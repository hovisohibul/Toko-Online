import React from 'react'
import logo from './assets/logo.png'
import style from './style.module.css'


function Footer(props) {
    return (
        <>
            <footer style={{height: props.height, width: props.width}}>
                <div className={style.container}>
                    <div className={style['footer-menu']}>
                        <div className={style['footer-address']}>
                            <div className={style['footer-logo']}>
                                <img src={logo} alt="logo" />
                            </div>
                            <div className={style['footer-location']}>
                                <p>Jl. Watugede No. 58, Wonorejo, Sariharjo, Kec. Ngaglik, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55581</p>
                            </div>
                        </div>
                        <div className={style['footer-program']}>
                            <p className='text-dark'>Program</p>
                            <p>Online Course</p>
                            <p>Mini bootcamp</p>
                            <p>Bootcamp</p>
                        </div>
                        <div className={style['footer-bidang']}>
                            <p className='text-dark'>Bidang</p>
                            <p>Digital marketing</p>
                            <p>Product management</p>
                            <p>English</p>
                            <p>Programming</p>
                        </div>
                        <div className={style['footer-tentang']}>
                            <p className='text-dark'>Tentang Edspert</p>
                            <p>Bantuan</p>
                            <p>Kontak kami</p>
                            <p>Media sosial</p>
                        </div>
                    </div>
                    <div className={style['footer-copy']}>
                        <p>Edspert, &copy;copyright.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer