import SearchResultsItem from "./SearchResultsItem"

export default function SearchResults( {results, isSearching} ){
    return (
        <div style={{
            justifyContent: "center",
            alignItems: "center",
            width: "100%"
        }}>
            {!results.length && isSearching && <p>No existe resultado</p>}
            {results?.map((value) => <SearchResultsItem key={value.id} {...value}/>)}
        </div>

    )
}