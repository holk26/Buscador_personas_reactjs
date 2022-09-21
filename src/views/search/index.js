import { useEffect, useState } from "react";
import SearchBox from "./components/SearchBox";
import "./style.css"
import SearchResults from "./components/SearchResults";
import axios from "axios";


export default function  Search() {

    const [isAtTop, setIsAtTop] = useState(false);
    const [results, setResults] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
         const getUsers = async () => {

            try {
                /*Metodo nativo para API
                const respose = await fetch("https://jsonplaceholder.typicode.com/users")
                const data = await respose.json();*/
                const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
                setData(data);
                
            } catch (err) {
                console.error(err);
            }
 
            

         }; 
         getUsers().catch(null);
    }, []);

    const handleCloseSearch = () => {
        setIsAtTop(false);
        setResults([]);
    }

    const handleOpenSearchClick = (searchText) => {
        setIsAtTop(true);
        if (data?.length) {
            const searchTextMinus = searchText.toLowerCase();
            const filterData = data.filter((value) => (
                    value.name.toLowerCase().includes(searchTextMinus) || 
                    value.phone.toLowerCase().includes(searchTextMinus) ||
                    value.email.toLowerCase().includes(searchTextMinus) ||
                    value.username.toLowerCase().includes(searchTextMinus)
                ) 
            );

            setResults(filterData);
        }

    }

    return (
        <div className={`search ${isAtTop ? "search--top" : "search--center"}`}>
             <SearchBox onSearch={handleOpenSearchClick} onClose={handleCloseSearch} isSearching={isAtTop}/>
             <SearchResults results={results} isSearching={isAtTop}/>
        </div>
       
    );
}