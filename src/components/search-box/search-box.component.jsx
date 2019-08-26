import React from 'react';

import './search-box.styles.css';

export const SearchBox = ({ placeholder, handleChange }) => (//este tipo de função serve para ler html mas não afeta o state
    <input
        className='search'
        type='search'
        placeholder={placeholder}
        onChange={handleChange}
    />
);