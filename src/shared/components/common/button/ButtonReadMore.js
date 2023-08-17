import IconReadMore from 'assets/images/icons/icon-read-more';
import React from 'react';
import { useState } from 'react';
import styles from './Button.module.scss';
import useOnClickOutside from 'hooks/use-onclick-outside';
import { useRef } from 'react';
export default function ButtonReadMore(props) {
    const [open, setOpen] = useState(false);
    const ref = useRef();
    useOnClickOutside(ref,()=>{
        setOpen(false)
    })
    return (
        <div ref={ref} className={styles.buttonReadMore}>
            <span onClick={() => setOpen(!open)}>
                <IconReadMore />
            </span>
            {open && <div className={styles.dropdown}>{props.children}</div>}
        </div>
    );
}
