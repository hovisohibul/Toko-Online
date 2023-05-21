import {React, useState} from 'react'
import { bankArray } from '../../../../utils/bankArray'
import style from './style.module.css'

function Bank(props) {

    // state
    const [bank, setBank] = useState(bankArray)
    const [valueBank, setValueBank] = useState(bankArray)

    return (
        <>
            {bank.map((item, id) => {
                return (
                    <div className={style['container']} key={id}>
                        <img src={item.image} alt={item.name} />
                        <div className={style['bank-input']}>
                            <h6>{props.text} {item.name}</h6>
                            <input type="radio" name="bank" value={item.nameValue} onChange={(ev) => setValueBank(ev.target.value)}/>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default Bank