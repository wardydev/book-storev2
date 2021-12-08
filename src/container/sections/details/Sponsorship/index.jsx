import React from 'react'

// images
import ImageOne from '../../../../assets/images/subsciption/img1.png'
import ImageTwo from '../../../../assets/images/subsciption/img2.png'
import ImageThree from '../../../../assets/images/subsciption/img3.png'
import ImageFour from '../../../../assets/images/subsciption/img4.png'
import ImageFive from '../../../../assets/images/subsciption/img5.png'
import ImageSix from '../../../../assets/images/subsciption/img6.png'
import ImageSeven from '../../../../assets/images/subsciption/img7.png'

export default function Sponsorship() {
    return (
        <section className="px-20 py-36">
            <div className="flex items-center flex-wrap justify-center space-x-20 space-y-12">
                <img src={ImageOne} alt="dummy" />
                <img src={ImageTwo} alt="dummy" />
                <img src={ImageThree} alt="dummy" />
                <img src={ImageFour} alt="dummy" />
                <img src={ImageFive} alt="dummy" />
                <img src={ImageSix} alt="dummy" />
                <img src={ImageSeven} alt="dummy" />
            </div>
        </section>
    )
}
