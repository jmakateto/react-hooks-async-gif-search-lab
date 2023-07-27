
import React, { useState, useEffect } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer() {
  const [gifs, setGifs] = useState([]);
  const [query, setQuery] = useState("cats"); 

  const fetchGifs = async () => {
    try {
      const API_KEY = "9nEFmLHU5wSpZduF0Cy52KdrDPpJHhDd"; 
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${API_KEY}&rating=g`
      );
      const data = await response.json();
      setGifs(data.data.slice(0, 3)); 
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    
    fetchGifs(); 
  }, [query]); 

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
  };

  return (
    <div>
      <GifSearch onSearch={handleSearch} />
      <GifList gifs={gifs} />
    </div>
  );
}

export default GifListContainer;
