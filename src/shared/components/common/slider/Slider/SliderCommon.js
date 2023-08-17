import React ,{useRef, useState} from 'react'
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import SliderImages from 'shared/components/post-detail/BoxImagesProduct/SliderImages';
import IconRowRight from './../../../icons/icon-row-right';
import IconRowLeft from './../../../icons/icon-row-left';
import styles from './Slider.module.scss';

export default function SliderCommon(props) {
    const { wishlist, data } = props;
    const [swiper, setSwiper] = React.useState(null);
    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null)
    const nexSlide = () => {
        if (swiper) {
            swiper.slideNext();
        }
    };
    const preSlide = () => {
        if (swiper) {
            swiper.slidePrev();
        }
    };
    return (
        <div className=" w-100 h-100 px-0 d-flex align-item-center justify-content-center flex-row align-items-center">
            <div className={styles.columnButtonSlider}>
                <div  onClick={preSlide}  ref={navigationPrevRef} className={styles.buttonSlider}>
                    <IconRowLeft />
                </div>
            </div>
            <Swiper
                onSwiper={(s) => {
                    setSwiper(s);
                }}
                slidesPerView={'auto'}
                spaceBetween={10}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
                {data.map((v, index) => (
                    <SwiperSlide style={{width:'130px'}} className='mr-0' key={index}>
                        <SliderImages item={v} />
                    </SwiperSlide>

                ))}
            </Swiper>
            <div className={styles.columnButtonSlider}>
                <div onClick={nexSlide} ref={navigationNextRef} className={styles.buttonSlider}>
                    <IconRowRight />
                </div>
            </div>
        </div>
    );
}
SliderCommon.propTypes = {
    data: PropTypes.array,
    isLoading: PropTypes.bool,
};
SliderCommon.defaultProps = { data: [], isLoading: false };
