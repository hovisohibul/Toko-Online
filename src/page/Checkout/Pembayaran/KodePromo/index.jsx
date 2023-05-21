import React, { useEffect } from 'react'
import style from './style.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProduct } from '../../../../manage/action'

function KodePromo() {
    const {id} = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {entity} = useSelector((state) => state.bootcamp)

    const fetchData = async(bootcampId) => {
        dispatch(fetchProduct(bootcampId))
    }

    useEffect(() => {
        fetchData(id)
    },[])

    const goToInstuksi = (boocampId) => {
        navigate(`/instruksi-bayar/${boocampId}`)
    }

    const backToDetail = (boocampId) => {
        navigate(`/detail/${boocampId}`)
    }
    return (
        <>
            <div className={style['container']}>
                <p>Kode Promo</p>
                <div className={style['input-promo']}>
                    <input type="text" name="kode" id="kode" placeholder='Masukan Kode.....'/>
                    <button>Submit</button>
                </div>
                <p>Metode Pembayaran</p>
                <p className={style['normal']}>Bank Transfer (verifikasi-manual)-Mandiri</p>
                <div className={style['total-harga']}>
                    <p>Ringkasan Pembayaran</p>
                    <div className={style['harga']}>
                        <p>Harga</p>
                        <p>Rp. 450.000</p>
                    </div>
                    <div className={style['harga']}>
                        <p>Promo</p>
                        <p>Rp. 450.000</p>
                    </div>
                    <div className={style['harga']}>
                        <p>Kode Promo</p>
                        <p>Rp. 450.000</p>
                    </div>
                    <hr />
                    <div className={style['harga']}>
                        <p className={style['total']}>Total</p>
                        <p>Rp. 450.000</p>
                    </div>
                </div>
                <p className={style['normal']}>
                    Dengan menekan tombol <span className={style.total}>Bayar</span> kamu telah menyetujui dan syarat dan ketentuan yang berlaku, 
                    silahkan baca kembali <a href="/">Syarat & Ketentuan</a> yang berlaku
                </p>
                <div className={style['bayar']}>
                    <div className={style.cancel} onClick={() => backToDetail(entity.id)}>
                        <FontAwesomeIcon icon={faAngleLeft}/>
                        Batalkan
                    </div>
                    <button onClick={() => goToInstuksi(entity.id)}>Bayar</button>
                </div>
            </div>
        </>
    )
}

export default KodePromo