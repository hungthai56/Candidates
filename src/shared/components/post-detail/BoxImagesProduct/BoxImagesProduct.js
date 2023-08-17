import React from 'react'
import styles from './BoxImagesProduct.module.scss';
import SliderCommon from './../../common/slider/Slider/SliderCommon';
export default function BoxImagesProduct(props) {
    const {item}=props;

    const renderGird=(data)=>{
        return data?.map((v,key)=>{
            return <div key={key} className={styles.imgLayoutBox}>
                <img src={v?.Thumb} alt="Ảnh bài viết" />
                <p>{v?.NameProduct}</p>
            </div>
        })
    }

    const renderSlider=(data)=>{
        return <SliderCommon data={item} />
    }
    return (
        <div className={`${styles.boxImages}`}>
            <p className={`mb-3 ${styles.titleInfoBox}`}>Hình ảnh sản phẩm</p>
            <div className={styles.contentImgBox}>
                {
                    item?.PostProducts?.length > 11 ? renderSlider(item?.PostProducts) : renderGird(item?.PostProducts)
                }
            </div>
        </div>
    )
}
