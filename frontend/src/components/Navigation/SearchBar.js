import React, {useEffect, useRef, useState} from 'react'
import { categories } from '.';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../../store/productsReducer';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
  function SearchBar(){

    // const [searchInput, setSearchInput] = useState("");
    const [selectedOption, setSelectedOption] = useState("All");
    const selectRef = useRef(null); // Ref for the <select> element
    const dispatch = useDispatch()
    const history = useHistory();

    const [searchParams, setSearchParams] = useState({})

    // const handleChange = (e) => {
    // e.preventDefault();
    // setSearchInput(e.target.value);
    // };

    const handleSearch = e => {
        e.preventDefault()
        dispatch(fetchProducts(searchParams))
        // setSearchParams({})
        const queryParams = new URLSearchParams(searchParams).toString();
        // Redirect to ProductListPage with query string
        history.push(`/products?${queryParams}`);
    }

    useEffect(() => {
        if (selectRef.current) {
            const optionText = selectRef.current.options[selectRef.current.selectedIndex].text;
            const optionWidth = optionText === 'All' ? '50px' : `${optionText.length * 10}px`;
            selectRef.current.style.width = optionWidth;
        }
      }, [selectedOption]);

    // if (searchInput.length > 0) {
    // categories.filter((categories) => {
    //     return categories.name.match(searchInput);
    // });
    // }
    return (
        <div id="nav-search">
            <form id="nav-search-bar-form" onSubmit={handleSearch}>
                <div className="nav-left">
                {/* <span class="nav-search-label">All</span>
                  <i class="fa fa-caret-down" aria-hidden="true"></i> */}
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
                        <option key={categories.categories}>{categories.name}</option>
                        )}
                    </select>
                </div>
                <div className="nav-fill">
                    <input type="text"
                    placeholder="Search here"
                    // onChange={handleChange}
                    // value={searchInput}
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