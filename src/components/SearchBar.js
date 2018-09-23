import React from 'react'

const SearchBar = props =>{
    return(
        <div style={styles.contentSearch}>
            <input 
                style={styles.inputSearch}
                type="text" 
                placeholder="Search anything" 
                // value={props.search}
                onChange={props.onChangeSearch}
            />
        </div>
    )
}

const styles = {
    inputSearch:{
        width: 500,
        height: 30,
        marginBottom: 10,
        borderRadius: 5,
        border: '1px solid #eaeaea',
        padding: 5

    },
    contentSearch: {
        // backgroundColor: 'red',
    }
}

export default SearchBar