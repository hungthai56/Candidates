import React from 'react'
import styles from './BoxImagesProduct.module.scss';
function BoxImages(props) {

    const {item,fieldImg ='Thumb' , fieldName = 'NameProduct'}=props;
    return (
        <>
            <div className={styles.imgLayoutBox}>
                <img src={item[fieldImg]} alt="Ảnh bài viết" />
                <p>{item[fieldName]}</p>
            </div>
        </>
    )
}
export default BoxImages;