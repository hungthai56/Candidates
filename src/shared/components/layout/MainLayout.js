import React, { useEffect, useState } from 'react';
import EventRegister, { EVENT_CHANGE_HEADER } from 'utils/EventRegister';
import Sidebar from './Sidebar';
import styles from './Layout.module.scss';
import ShareService from 'utils/ShareService';


function MainLayout(props) {
    let ShareHeader = ShareService.CommonHeader();
    const [header, setHeader] = useState(<ShareHeader
        iconLeft={<></>}
    />)
    useEffect(() => {
        const reloadEvent = EventRegister.on(EVENT_CHANGE_HEADER, (params) => {
            setHeader(params.Header)
        });
        return () => {
            EventRegister.off(reloadEvent);
        };
    }, []);
    return (
        <div className={`${styles.customSideBar}`}>
            <Sidebar />
            <div
                style={{
                    transitionDuration: '.2s',
                    width: 'calc(100% - 228px)',
                }}
                className={styles.layoutContentRight}
            >
                {header}
                <div style={{ padding: 10, minHeight: 'calc(100vh - 52px)' }}>
                    {props.children}
                </div>
            </div>
        </div>
    );
}
export default MainLayout;
