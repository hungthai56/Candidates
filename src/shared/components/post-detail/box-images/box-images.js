import React, { useState } from 'react';
import styles from './styles.module.scss';
import 'react-image-lightbox/style.css';
import Lightbox from 'react-image-lightbox';
import EventRegister, {
    EVENT_SHOW_POPUP,
    EVENT_SHOW_POPUP_IMAGES_POST,
} from 'utils/EventRegister';

export default function BoxImages(props) {
    const { item } = props;
    const showPopup = () => {
        EventRegister.emit(EVENT_SHOW_POPUP, {
            type: EVENT_SHOW_POPUP_IMAGES_POST,
            open: true,
            payload: {
                title: '',
                callback: (res) => {},
                data: item?.PostImages,
            },
        });
    };
    const [isOpenLightbox, setIsOpenLightbox] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);
    return (
        <div className={`${styles.boxImages}`}>
            <p className={`mb-3 ${styles.titleInfoBox}`}>Hình ảnh bài viết</p>
            <div className={styles.contentImgBox}>
                {item?.PostImages?.length > 0 &&
                    item?.PostImages.map((v, key) => {
                        return (
                            <div
                                onClick={() => setIsOpenLightbox(true)}
                                key={key}
                                className={styles.imgLayoutBox}
                            >
                                <img src={v?.Thumb} alt="Ảnh bài viết" />
                            </div>
                        );
                    })}
            </div>
            {isOpenLightbox && (
                <Lightbox
                    mainSrc={item?.PostImages[photoIndex].Thumb}
                    nextSrc={
                        item?.PostImages[
                            (photoIndex + 1) % item?.PostImages.length
                        ]
                    }
                    prevSrc={
                        item?.PostImages[
                            (photoIndex + item?.PostImages.length - 1) %
                                item?.PostImages.length
                        ]
                    }
                    onCloseRequest={() => setIsOpenLightbox(false)}
                    onMovePrevRequest={() =>
                        setPhotoIndex(
                            (photoIndex + item?.PostImages.length - 1) %
                                item?.PostImages.length,
                        )
                    }
                    onMoveNextRequest={() =>
                        setPhotoIndex(
                            (photoIndex + 1) % item?.PostImages.length,
                        )
                    }
                />
            )}
        </div>
    );
}
