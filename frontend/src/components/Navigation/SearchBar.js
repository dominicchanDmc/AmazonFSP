import React, {useState} from 'react'

// const categories =  [
//     { name: "All", categories: "all" },
//     { name: "Amazon Devices", categories: "aDevices" },
//     { name: "Amazon Warehouse", categories: "amazonWarehouse" },
//     { name: "Apps & Games", categories: "appsGames" }
//   ]
  function SearchBar(){

    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
    };
    
    // if (searchInput.length > 0) {
    // categories.filter((categories) => {
    //     return categories.name.match(searchInput);
    // });
    // }
    return (
        <div id="nav-search">
            <form id="nav-search-bar-form">
                <div className="nav-left">
                    {/* <select
                        name='categories'
                        value={categories}
                        className='nav-select'
                    >
                        {categories.map(categories =>
                        <option key={categories}>{categories}</option>
                        )}
                    </select> */}
                </div>
                <div className="nav-fill">
                    <input type="text"
                    placeholder="Search here"
                    onChange={handleChange}
                    value={searchInput} />
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