import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { actionCreator } from '../redux'
import { bindActionCreators } from 'redux'

export default function LearnRedux() {
    const account = useSelector((state) => state.account)
    const topup = useSelector(state => state.topup)
    const dispatch = useDispatch()
    const {depositMoney, withdrawMoney, topupSaldo} = bindActionCreators(actionCreator, dispatch)

    return (
        <div className='py-20 w-2/4 mx-auto text-center'>
            <div className='mb-20'>
                <span className="text-purple-500 font-medium">{account}</span>
                <div className="mt-4 flex items-center space-x-4 justify-center">
                    <button onClick={() => depositMoney(1000)} className="py-2 px-4 rounded-lg text-white bg-purple-500 hover:bg-purple-600">Deposit</button>
                    <button onClick={() => withdrawMoney(100)} className="py-2 px-4 rounded-lg text-purple-500 border-2 border-purple-600 hover:bg-purple-500 hover:text-white">Withdraw</button>
                </div>
            </div>

            <div>
                <span className="text-purple-500 font-medium">{topup}</span>
                <div className="mt-4 flex items-center space-x-4 justify-center">
                    <button onClick={() => topupSaldo(1000)} className="py-2 px-4 rounded-lg text-white bg-purple-500 hover:bg-purple-600">Topup</button>
                </div>
            </div>
        </div>
    )
}
