import "./styles.css";

export default function Search() {
    return (
        <div className="Search">
            <p className="cityname"></p>
            <input
                type="text"
                placeholder="Search for a City..."
                className="searchForm"
                id="search-input-city"
            />

            <input type="submit" id="search-button" value="🔍" />

            <input type="submit" value="🧭" id="current-location-button" />
        </div>
    );
}
