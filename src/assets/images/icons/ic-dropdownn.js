import React from 'react'
import PropTypes from 'prop-types'

function Icdropdownn(props) {
    return (
        <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.9959 0.670254C11.155 0.852095 11.1366 1.12849 10.9547 1.2876L6.28805 5.37094C6.1231 5.51527 5.8768 5.51527 5.71186 5.37094L1.04519 1.2876C0.863346 1.12849 0.84492 0.852095 1.00403 0.670254C1.16314 0.488413 1.43954 0.469986 1.62138 0.629097L5.99995 4.46035L10.3785 0.629097C10.5604 0.469986 10.8368 0.488413 10.9959 0.670254Z" fill="white" />
        </svg>
    )
}

Icdropdownn.propTypes = {
    fontSize: PropTypes.number,
}

Icdropdownn.defaultProps = {
    fontSize: 20,
}

export default Icdropdownn
