import IconClose from 'assets/images/icons/icon-close';
import IconRowDown from 'assets/images/icons/icon-row-down';
import useOnClickOutside from 'hooks/use-onclick-outside';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { removeAccents } from 'utils/Helper';
import TreeNode from './TreeNode';
import styles from './TreeSelect.module.scss';

const TreeSelect = (props) => {
    const [clickOpen, setClickOpen] = useState(false);
    const [options, setOptions] = useState([]);
    const ref = useRef();
    const refInput = useRef();
    useOnClickOutside(ref, () => {
        setClickOpen(false);
        refInput.current.value = '';
        if (props?.value) {
            refInput.current.value = props?.optionsAll?.find(
                (x) => x?.key == props?.value,
            )?.label;
        }
    });

    useMemo(() => {
        if (props?.options) {
            setOptions(props?.options);
        }
    }, [props.options]);

    const handleChange = (e) => {
        let result = [];
        const changeValue = e.target.value;
        const lowerCaseChangValue = changeValue.toLowerCase();
        result = props?.options.filter((item) =>
            Object.keys(item).some((key) => {
                if (key == 'label') {
                    const keyWord = item[key].toString().toLowerCase();
                    return (
                        keyWord.includes(lowerCaseChangValue) ||
                        removeAccents(keyWord).includes(
                            removeAccents(lowerCaseChangValue),
                        )
                    );
                }
            }),
        );
        setOptions(result);
    };

    const onChangeItem = (x) => {
        setClickOpen(false);
        setOptions(props?.options);
        refInput.current.value = x?.label;
        props.onChange(x?.value);
    };

    useEffect(() => {
        if (props.value && props?.optionsAll) {
            props?.optionsAll?.map((x) => {
                if (x?.key == props?.value) {
                    refInput.current.value = x?.label;
                }
            });
        } else {
            refInput.current.value = '';
        }
    }, [props.value, props?.optionsAll]);

    return (
        <div ref={ref} className={`${styles['tree-select-container']} ${props?.errors[props.name] ? styles['error'] : ''} ${props.disabled ? styles['disabled'] : ''}`}>
            <div
                onClick={() => {
                    setClickOpen(!clickOpen);
                    setOptions(props?.options);
                }}
                className={`${styles['tree-select']} ${
                    clickOpen ? styles['active'] : ''
                }`}
            >
                <input
                    placeholder="Chọn danh mục..."
                    className={styles['input']}
                    onChange={(e) => {
                        e.preventDefault();
                        handleChange(e);
                    }}
                    ref={refInput}
                />
                {props?.value && (
                    <div
                        className={`${styles['close']} `}
                        onClick={(e) => {
                            e.stopPropagation();
                            e.preventDefault();
                            props.onChange(null);
                        }}
                    >
                        <IconClose />
                    </div>
                )}
                <div
                    className={`${styles['row']} ${
                        clickOpen ? styles['active'] : ''
                    }`}
                >
                    <IconRowDown />
                </div>
            </div>
            {clickOpen ? (
                <div className={styles['drop-down-tree-select']}>
                    {options?.map((x, index) => {
                        return (
                            <TreeNode
                                value={props.value}
                                onChange={onChangeItem}
                                index={0}
                                level={0}
                                node={x}
                                key={index}
                            />
                        );
                    })}
                    <center>
                        {options?.length == 0 ? 'Không tìm thấy' : null}
                    </center>
                </div>
            ) : (
                <></>
            )}
            {props?.errors[props?.name] ? <p className={`${styles['text-error']}`}>* Không được để trống</p> : <></>}
        </div>
    );
};

export default TreeSelect;
