import React from 'react'
import { Link } from 'react-router-dom'
import PaymentIllustration from '../../../../assets/images/illustration.svg'

export default function Finished() {
    return (
        <div className='text-center'>
            <img src={PaymentIllustration} alt="illustration" className='w-full lg:w-2/5 mx-auto' />
            <div className="mt-8 text-center w-full lg:w-2/3 mx-auto">
                <h2 className="text-gray-900 text-3xl lg:text-4xl font-medium">Selamat!! Pesananamu sedang di proses</h2>
                <p className="text-gray-600 text-lg lg:text-xl mt-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, eos Lorem ipsum, dolor sit.</p>
            </div>
            <Link to="/">
                <button className="py-3 px-20 mt-6 text-white bg-purple-500 hover:bg-purple-600 rounded-lg">Kembali</button>
            </Link>
        </div>
    )
}
