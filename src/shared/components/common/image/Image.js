import React from 'react';
import styles from "./Image.module.scss"
import ImageDefault from "assets/images/image_default.png"
function Image (props) {
    const {
        width,
        height,
        className,
        src,
        defaultImage,
        style,
        seo = "fm.com.vn",
        srcset,
        sizes,
    } = props;
    const onError = (e) => {
        e.target.onerror = null;
        e.target.src = defaultImage;
    };
    const onClick = () => {
        if (typeof props.onClick === 'function') {
            props.onClick();
        }
    };
    return <img
        width={width}
        height={height}
        style={style}
        className={`${styles.object_fit_cover} ${className ?? ''}`}
        src={src ?? defaultImage}
        onError={onError}
        onClick={onClick}
        alt={seo}
        title={seo}
        srcSet={srcset?.toString()}
        size={sizes}
    />;
}
Image.defaultProps = {
    defaultImage: ImageDefault,
    srcset: [],
    sizes: '',
};
export default Image;
