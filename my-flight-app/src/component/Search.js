import React , {useState} from "react";

const Search =(props)=>{
    const [searchValue, setSearchValue] = useState("");
    const handleSearchInputChanges =(e)=>{
        setSearchValue(e.target.value)
    }
    const resetSearchInput=(e)=>{
        setSearchValue("")
    }
    const callSearchFunction = (e)=>{
        e.preventDefault();
        props.search(searchValue);
        resetSearchInput();
    }
    return(
        <div>

        <form className="search">
        <input
          value={searchValue}
          placeholder="Search by airline"
          onChange={handleSearchInputChanges}
          type="text"
        />
        <input onClick={callSearchFunction} type="submit" value="SEARCH" />

      </form>


     </div>
    )

}
export default Search;
