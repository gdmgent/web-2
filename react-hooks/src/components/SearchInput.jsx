import React, { useState } from 'react'

const SearchInput = ({ items }) => {
    const [searchInput, setSearchInput] = useState('');

    function handleSearch(query) {
        setSearchInput(query);
    }

    const filteredItems = items.filter(item => item.toLowerCase().includes(searchInput.toLowerCase()));

    return (
        <div>
            <input value={searchInput} onChange={e => handleSearch(e.target.value)} />

            {
                filteredItems.map((item, i) => <li key={i}>{item}</li>)
            }
        </div>
    )
}

export default SearchInput