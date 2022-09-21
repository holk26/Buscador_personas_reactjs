export default function SearchResultsItem({name, email}){
    return (
        <div style={{
            backgroundColor: "#E8E7E7",
            margin: "1rem",
            padding: 10
        }}>
            <p>{name}</p>
            <p>{email}</p>
        </div>
    );

}