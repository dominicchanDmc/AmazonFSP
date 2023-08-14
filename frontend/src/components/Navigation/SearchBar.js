import React, {useState} from 'react'

const categories =  [
    { name: "All", categories: "all" },
    { name: "Amazon Devices", categories: "aDevices" },
    { name: "Amazon Warehouse", categories: "amazonWarehouse" },
    { name: "Apps & Games", categories: "appsGames" }
  ]
  function SearchBar(){

    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
    };
    
    if (searchInput.length > 0) {
    categories.filter((categories) => {
        return categories.name.match(searchInput);
    });
    }
    return (
        <div>
            <input
            type="text"
            placeholder="Search here"
            onChange={handleChange}
            value={searchInput} />      
        </div>
    );

}

export default SearchBar;