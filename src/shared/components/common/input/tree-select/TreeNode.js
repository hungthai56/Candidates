import IconRowRight from 'assets/images/icons/ic-row-right';
import IconRowDown from 'assets/images/icons/icon-row-down';
import React, { useState } from 'react';
import styles from './TreeSelect.module.scss';

export default function TreeNode(props) {
    const { node, onChange ,value} = props;
    const [openChild, setOpenChild] = useState(true);
    let child = node?.CategoriesChild
        ? node?.CategoriesChild?.map((x) => {
            return {
                value: x?.value,
                label: x?.label,
                key: x?.key,
                CategoriesChild: x?.CategoriesChild,
                level: props.level + 1,
            };
        })
        : [];
    return (
        <div
            style={{
                paddingLeft: props.level,
            }}
        >
            <div
                onClick={(e) => {
                    e.stopPropagation();
                    onChange(node);
                }}
                className={`${styles['ul-item']} ${value == node?.value ? styles['active'] : ''
                } text-truncate`}
                style={{
                    paddingLeft: props?.index == 0 && 10,
                    marginLeft: props?.index != 0 && 10,
                }}
                title={node?.label}
            >
                <span
                    onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        setOpenChild(!openChild);
                    }}
                    className={`${styles['row-item']} ${openChild ? styles['row-item-active'] : ''
                    }`}
                >
                    {child?.length > 0 ? (
                        openChild ? (
                            <IconRowDown />
                        ) : (
                            <IconRowRight />
                        )
                    ) : (
                        <></>
                    )}
                </span>
                <p>
                    {node?.label}
                </p>
            </div>
            {openChild &&
                child?.map((_child) => {
                    return <TreeNode value={value} onChange={onChange} index={1} node={_child} level={20} />;
                })}
        </div>
    );
}
