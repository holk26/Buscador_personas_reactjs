import { useState } from "react";
import "./style.css";

export default function  SearchBox({onSearch, onClose, isSearching}) {

    const [searchText, setSearchText] = useState("");
    const handlerSearchClick = () => {
        setSearchText("");
        onClose();
    }

    return (
        
        <div className="search-box">
               <h2 className="serach-box-title">Buscador de personal</h2>
            <div className="search-box-buttons">
            <label>
                <input 
                value={searchText} 
                onChange={({ target: { value }}) => setSearchText(value)}
                className="searc-box-input"
                /> 
            </label>
            <button onClick={() => onSearch(searchText)} disabled={!searchText.length}>Buscar</button>
            {isSearching && <button onClick={handlerSearchClick} disabled={!searchText.length}>Cerrar</button>}
            </div>
            
            

        </div>
    );

}