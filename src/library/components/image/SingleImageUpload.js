import React from 'react';
import ImageUploading from 'react-images-uploading';
import Image from 'material-ui-image';
import IconPenEdit from 'assets/images/icons/ic-penedit';
import IconUploadImage from './upload-icon';
import './_image.scss';

function ErrorMessage({ children }) {
    return <p className="error-message">{children}</p>;
}

function SingleImageUpload(props) {
    const {
        readOnly,
        onChange,
        name,
        value,
        clearErrors,
        size: { width, height },
    } = props;
    const formError = props?.errors;
    const maxNumber = 69;
    const handleChangeImage = (imageList) => {
        onChange(imageList);
    };

    const handleError = () => {
        clearErrors(name);
    };

    function DefaultImage() {
        return (
            <div
                className="d-flex justify-content-center align-items-center flex-column"
                style={{
                    width: '254px',
                    height: '140px',
                    border: '1px dashed #707070',
                    borderRadius: '3px',
                    gap: '10px',
                }}
            >
                <IconUploadImage />
                <p
                    style={{
                        fontSize: '12px',
                        fontStyle: 'italic',
                        maxWidth: '80px',
                        textAlign: 'center',
                        color: '#9F9F9F',
                        lineHeight: 1.5,
                    }}
                >
                    Tải ảnh lên từ thiết bị
                </p>
            </div>
        );
    }

    return (
        <ImageUploading
            value={value}
            onChange={handleChangeImage}
            onError={handleError}
            maxNumber={maxNumber}
            dataURLKey="dataUrl"
            resolutionHeight={height}
            resolutionWidth={width}
            resolutionType="absolute"
        >
            {({ imageList, onImageUpload, dragProps, errors }) => (
                <div style={{
                    background: '#F6F6F6',
                    padding: '5px 0px',
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection:'column',
                    alignItems:'center'
                }} className="upload__image-wrapper">
                    <div className="image-wrapper" {...dragProps}>
                        {imageList.length === 0 && <DefaultImage />}
                        {imageList.length > 0 &&
                            imageList.map((image, index) => (
                                <Image
                                    key={index}
                                    src={image.dataUrl}
                                    alt=""
                                    cover
                                    disableSpinner
                                    imageStyle={{
                                        width: '254px',
                                        height: '140px',
                                        borderRadius: '3px',
                                    }}
                                    style={{ paddingTop: 0 }}
                                />
                            ))}
                        {!readOnly && (
                            <div className="pointer overlay" onClick={onImageUpload}>
                                <IconPenEdit />
                            </div>
                        )}
                    </div>

                    <div style={{
                        width: '100%',
                    }}>
                        {errors?.acceptType && (
                            <ErrorMessage>
                                Vui lòng up file đúng định dạng (jpg, gif, png)
                            </ErrorMessage>
                        )}
                        {errors?.maxFileSize && (
                            <ErrorMessage>Selected file size exceed maxFileSize</ErrorMessage>
                        )}
                        {errors?.resolution && (
                            <ErrorMessage>
                                Vui lòng up ảnh kích thước {width}
                                px * {height}
                                px
                            </ErrorMessage>
                        )}
                        {formError[name] && (
                            <ErrorMessage>{formError[name].message}</ErrorMessage>
                        )}
                    </div>
                </div>
            )}
        </ImageUploading>
    );
}

export default SingleImageUpload;
