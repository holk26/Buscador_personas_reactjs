export default function SearchResults( {results, isSearching} ){
    return (
        <div>
            {!results.length && isSearching && <p>No existe resultado</p>}
            {results?.map((value) =>{
                return(
                    <div key={value.id}>
                        <p>{value.name}</p>
                        <p>{value.email}</p>
                        <p>{value.name}</p>
                    </div>
                )
            })}
        </div>

    )
}