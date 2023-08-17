import React from 'react';
import Box from 'shared/components/common/box/Box';
import styles from './TabTable.module.scss';
import PropTypes from 'prop-types';

function TabTable(props) {
    const {
        value,
        handleChange,
        tabTable,
        showQuantity = false,
        marginTop=false,
        iconRight
    } = props;

    function capitalizeFirstLetter(s) {
        s = s?.toLowerCase();
        return (s = s.charAt(0).toUpperCase() + s.slice(1));
    }
    return (
        <>
            <div className={`${styles.listProductTable} ${marginTop ? 'mt-3': ''}`}>
                <Box className={`list-product-tablebox-order d-flex flex-row`}>
                    <div className="d-flex flex-row">
                        <div className={styles.tabList}>
                            {tabTable.map((x, key) => {
                                return (
                                    <div
                                        className={`${styles.tabListItem} ${
                                            value == x.id
                                                ? styles.tabListActive
                                                : ''
                                        }`}
                                        key={key}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleChange(x.id);
                                        }}
                                    >
                                        {capitalizeFirstLetter(x?.text)}
                                        {showQuantity && (
                                            <span
                                                className={`${
                                                    value == x.id
                                                        ? styles.active
                                                        : ''
                                                }`}
                                            >
                                                {x?.number}
                                            </span>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="d-flex flex-row">
                        <div className={styles.tabListIcon}>
                            {iconRight}
                        </div>
                    </div>
                </Box>
            </div>
        </>
    );
}

TabTable.propTypes = {
    value: PropTypes.number,
    handleChange: PropTypes.func,
    tabTable: PropTypes.array,
    quantity: PropTypes.number,
    showQuantity: PropTypes.bool,
    marginTop: PropTypes.bool,
};

export default TabTable;
