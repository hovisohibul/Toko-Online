import React from 'react'
import style from './style.module.css'

function MBanking() {
    return (
        <>
             <div>
                <ol className={style.list}>
                    <li>Masukan kartu ke mesin ATM Mandiri.</li>
                    <li>Pilih Bahasa.</li>
                    <li>Masukan PIN ATM.</li>
                    <li>Pilih menu transaksi lainnya.</li>
                    <li>Pilih menu 'Transfer', lalu pilih ke rek Mandiri.</li>
                    <li>Masukan no rekening yang dituju.</li>
                    <li>Masukan nominal jumlah uang yang akan di transfer.</li>
                    <li>Layar ATM akan menampilkan data transaksi anda, jika data sudah benar pilih 'YA'</li>
                    <li>Selesai, struk akan keluar dari mesin ATM</li>
                </ol>
            </div>
        </>
    )
}

export default MBanking