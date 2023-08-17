import React from 'react'
import { IcSearch } from '../assets/icons'

function InputSearch(props) {
    const { inputCustom } = props
    return (
        <div className={`input-search-social ${inputCustom}`}>
            <IcSearch />
            <input placeholder="Tìm kiếm" className="input-social" />
        </div>
    )
}

export default InputSearch
