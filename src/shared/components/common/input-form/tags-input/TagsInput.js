import IconClose from 'assets/images/icons/icon-close';
import React from 'react';
import { useEffect, useRef } from 'react';
import { useState } from 'react';
import styles from './TagsInput.module.scss';
import $ from 'jquery';
import useOnClickOutside from 'hooks/use-onclick-outside';

const TagsInput = React.forwardRef((props, ref) => {
    const { onChange, name, errors, value, placeholder } = props;
    const [tags, setTags] = useState([]);
    const [valueText, setValueText] = useState('');
    const [duplicate, setDuplicate] = useState(-1);
    const refFocus = useRef();
    const onKeyPress = (e) => {
        let value = valueText;
        let dataOld = [...tags];
        if (e.key === 'Enter') {
            if (value != '') {
                let index = dataOld?.findIndex((v) => v == value);
                if (index == -1) {
                    dataOld.push(value);
                    setValueText('');
                    setDuplicate(-1)
                } else {
                    setDuplicate(index);
                }
                onChange(dataOld?.join(','));
                setTags(dataOld);
            }
            e.preventDefault();
        }

        if (e.which == '13') {
            e.preventDefault();
        }
    };

    const onChangeInput = (e) => {
        setDuplicate(-1)
        setValueText(e.target.value);
    };
    const onClickRef = () => {
        $('.input-focus').focus();
    };

    const onDelete = (index) => {
        let dataOld = [...tags];
        dataOld.splice(index, 1);
        setTags(dataOld);
        onChange(dataOld?.join(','));
    };

    useEffect(() => {
        if (value) {
            onChange(value);
            setTags(value?.split(','));
        } else {
            setTags([]);
            onChange('');
        }
    }, [value]);

    let isShowError = false;
    isShowError = errors[name];

    useOnClickOutside(refFocus,()=>{
        if (valueText != '') {
            let value = valueText;
            let dataOld = [...tags];
            let index = dataOld?.findIndex((v) => v == value);
            if (index == -1) {
                dataOld.push(value);
                setValueText('');
                setDuplicate(-1)
            } else {
                setDuplicate(index);
            }
            onChange(dataOld?.join(','));
            setTags(dataOld);
        }
    })

    return (
        <div
            ref={refFocus}
            className={`${styles.TagsInput} ${isShowError ? styles.error : ''}`}
        >
            <div onClick={onClickRef} className={styles.TagsInputRender}>
                {tags?.map((x, index) => {
                    return (
                        <div
                            className={styles.tag}
                            style={{
                                borderColor:
                                    duplicate == index ? '#FF2C00' : '',
                            }}
                            key={index}
                        >
                            <span className={styles.text}>{x}</span>
                            <span
                                onClick={() => onDelete(index)}
                                className={styles.icon}
                            >
                                <IconClose fontSize={12} />
                            </span>
                        </div>
                    );
                })}
                <input
                    placeholder={tags.length == 0 ? placeholder : ''}
                    ref={ref}
                    onKeyPress={onKeyPress}
                    onChange={onChangeInput}
                    value={valueText}
                    className="input-focus"
                />
            </div>
        </div>
    );
});

export default TagsInput;
