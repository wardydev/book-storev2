import React from 'react'
// img
import IconOne from '../../../../assets/icons/thrust/icon1.svg'
import IconTwo from '../../../../assets/icons/thrust/icon2.svg'
import IconThree from '../../../../assets/icons/thrust/icon3.svg'
import IconFour from '../../../../assets/icons/thrust/icon4.svg'

export default function Thrust() {
    return (
        <section className="px-6 lg:px-20 py-20">
            <div className="container flex flex-col lg:flex-row items-center justify-center space-x-0 space-y-16 lg:space-y-0 lg:space-x-36">
                <div className="text-center">
                    <img src={IconOne} alt="icon-1" className="mb-2 mx-auto" width="75" />
                    <div>
                        <h4 className="text-3xl text-gray-800">125,663</h4>
                        <p className="text-gray-500">Happy Customers</p>
                    </div>
                </div>
                <div className="text-center">
                    <img src={IconTwo} alt="icon-1" className="mb-2 mx-auto" width="75" />
                    <div>
                        <h4 className="text-3xl text-gray-800">125,663</h4>
                        <p className="text-gray-500">Happy Customers</p>
                    </div>
                </div>
                <div className="text-center">
                    <img src={IconThree} alt="icon-1" className="mb-2 mx-auto" width="75" />
                    <div>
                        <h4 className="text-3xl text-gray-800">125,663</h4>
                        <p className="text-gray-500">Happy Customers</p>
                    </div>
                </div>
                <div className="text-center">
                    <img src={IconFour} alt="icon-1" className="mb-2 mx-auto" width="75" />
                    <div>
                        <h4 className="text-3xl text-gray-800">125,663</h4>
                        <p className="text-gray-500">Happy Customers</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
