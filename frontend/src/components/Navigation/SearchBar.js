import React, {useEffect, useRef, useState} from 'react'
import { categories } from '.';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../../store/productsReducer';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
  function SearchBar(){

    const [selectedOption, setSelectedOption] = useState("All");
    const selectRef = useRef(null);
    const dispatch = useDispatch()
    const history = useHistory();
    const [searchParams, setSearchParams] = useState({})

    const handleSearch = e => {
        e.preventDefault()
        const updatedSearchParams = {
            ...searchParams
            // category: selectedOption !== 'All' ? selectedOption : ''
        };
        dispatch(fetchProducts(updatedSearchParams))
        // setSearchParams({})
        const queryParams = new URLSearchParams(updatedSearchParams).toString();
        history.push(`/products?${queryParams}`);
    }

    useEffect(() => {
        if (selectRef.current) {
            const optionText = selectRef.current.options[selectRef.current.selectedIndex].text;
            const optionWidth = optionText === 'All' ? '50px' : `${optionText.length * 10}px`;
            selectRef.current.style.width = optionWidth;
        }
      }, [selectedOption]);

    return (
        <div id="nav-search">
            <form id="nav-search-bar-form" onSubmit={handleSearch}>
                <div className="nav-left">
                    <select
                        name='categories'
                        ref={selectRef}
                        // value={categories}
                        className='select-search'
                        value={selectedOption}
                        onChange={(e) => setSelectedOption(e.target.value)}
                    >
                        <option key='All'>All</option>
                        {categories.map(categories =>
                        <option key={categories.value} value={categories.value}>{categories.name}</option>
                        )}
                    </select>
                </div>
                <div className="nav-fill">
                    <input type="text"
                    placeholder="Search here"
                    value={searchParams.search || ''} 
                    onChange={e => setSearchParams(prev => ({ ...prev, search: e.target.value }))}
                    />
                </div>
                <div className="nav-right">
                    <button type="submit">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
            </form>
        </div>
    );

}

export default SearchBar;