import styles from './ImagesPostPopup.module.scss';
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";


// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
import HeadCommonBorderPopup from '../component/HeadCommonBorderPopup';
import IconRowLeft from './../../../icons/icon-row-left';
import IconRowRight from './../../../icons/icon-row-right';

export default function ImagesPostPopup(props) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const { payload, showVisible, config } = props;

    const handleClose=()=>{
        showVisible(false)
    }
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
        <>
            <HeadCommonBorderPopup onHandleRight={handleClose} content='' />
            <div className={styles.ImagesPostPopup}>
                <div className={styles.ImagesPostPopupTop}>
                    <div onClick={preSlide}  ref={navigationPrevRef} className={styles.buttonSlider} ><IconRowLeft /></div>
                    <Swiper
                        style={{
                            "--swiper-navigation-color": "#fff",
                            "--swiper-pagination-color": "#fff",
                        }}
                        onSwiper={(s) => {
                            setSwiper(s);
                        }}
                        spaceBetween={10}
                        navigation={true}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper2"
                    >
                        {
                            payload?.data?.map((value,key)=>{
                                return <SwiperSlide key={key}>
                                    <img src={value?.Thumb} />
                                </SwiperSlide>
                            })
                        }
                    </Swiper>
                    <div className={styles.buttonSlider} onClick={nexSlide} ref={navigationNextRef}><IconRowRight /></div>
                </div>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={8}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper"
                >
                    {
                        payload?.data?.map((value,key)=>{
                            return <SwiperSlide key={key}>
                                <img src={value?.Thumb} />
                            </SwiperSlide>
                        })
                    }
                </Swiper>
            </div>
        </>
    );
}
