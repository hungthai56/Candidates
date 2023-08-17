import React from 'react';
import PropTypes from 'prop-types';

IconCardBank.propTypes = {

};

function IconCardBank(props) {
    return (
        <div>
            <svg style={{ fontSize: props.fontSize ?? 20 }} width="27" height="21" viewBox="0 0 27 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="1" width="25" height="19" rx="1" stroke="#707070" strokeWidth="0.8" />
                <path d="M3.77734 15.6152H3.79068" stroke="#707070" strokeWidth="0.8" strokeLinecap="round" />
                <rect x="1" y="6.84619" width="25" height="2.92308" fill="#707070" />
                <line x1="5.66699" y1="15.8462" x2="11.6114" y2="15.8462" stroke="#707070" strokeLinecap="round" />
            </svg>
        </div>
    );
}

export default IconCardBank;
