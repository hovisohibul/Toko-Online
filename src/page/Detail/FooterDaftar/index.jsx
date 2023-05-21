import React, {useEffect} from 'react'
import { Button } from 'react-bootstrap'
import style from './style.module.css'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProduct } from '../../../manage/action'


function FooterDaftar() {
    const {id} = useParams()
    const dispatch = useDispatch()
    const {entity} = useSelector((state) => state.bootcamp)

    const fetchData = async(bootcampId) => {
        dispatch(fetchProduct(bootcampId))
    }

    useEffect(() => {
        fetchData(id)
        console.log(fetchData(id))
    },[])

    const navigate = useNavigate()

    const goToCheckOut = (bootcampId) => {
        navigate(`/checkout/${bootcampId}`)
    }
    return (
        <>
            <div className={style['container']}>
                <h1>Sudah siap bergabung?</h1>
                <Button variant='warning' style={{color: '#fff'}} onClick={() => goToCheckOut(entity.id)}>Daftar kelas</Button>
            </div>
        </>
    )
}

export default FooterDaftar