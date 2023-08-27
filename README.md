# YellowArrow
## Background 
Amazon is the world's most popular online shopping platform, it's has lots of categories with different products. Through cloning the Amazon, allows developers to practice creating a functional e-commerce website with familiar features, offering a hands-on experience in building such platforms.

Users can search product by name or categories, choose products to cart, review and rating the products, view the shopping and review history.

## Live version 
Live version can be seen on <a href='https://yellow-arrow.onrender.com/'>this link</a>

## Technologies
In this website,I have use :

- **Font Awesome**: The commom and easy to understand icon
- **Ruby**: Build backEnd Api to get DB data
- **React & Redux**: Build frontEnd

## Technical Features 
### Product Filtering
The Product Filtering feature enables users to refine their product search results based on specific criteria, such as category, and name. Users can customize their search to find products that match their preferences more closely.

The searchbar using URLSearchParams to make URL to productList with searchParam

```JavaScript
function SearchBar({selectedOption,setSelectedOption,searchParams,setSearchParams}){

    // const [selectedOption, setSelectedOption] = useState("All");
    // const [searchParams, setSearchParams] = useState({})
    const selectRef = useRef(null);
    const dispatch = useDispatch()
    const history = useHistory();

    const handleSearch = e => {
        e.preventDefault()
        const updatedSearchParams = {
            ...searchParams,
            category: selectedOption !== 'All' ? selectedOption : ''
        };
        dispatch(fetchProducts(updatedSearchParams))
        // setSearchParams({})
        const queryParams = new URLSearchParams(updatedSearchParams).toString();
        history.push(`/products?${queryParams}`);
    }

    useEffect(() => {
        if (selectRef.current) {
            const optionText = selectRef.current.options[selectRef.current.selectedIndex].text;
            const optionWidth = optionText === 'All'|| optionText === 'Alexa' ? '60px' : `${optionText.length * 10}px`;
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
```


## Future  Features
-  **Enhanceadd to user can add item to cart (checkout request login)**: Now add item to cart must be login
