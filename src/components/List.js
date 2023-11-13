import { useEffect, useState } from "react";
import Character from "./Character";


const List = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacter] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetch('https://rickandmortyapi.com/api/character');
        if (!data.ok) {
          throw new Error('API request failed');
        }
        const response = await data.json();
        console.log(response);
  
        // Check if the "results" property contains an array
        if (Array.isArray(response.results)) {
          setCharacter(response.results);
          setLoading(false);
        } else {
          throw new Error('API response does not contain an array of characters');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    }
  
    fetchData();
  }, [characters.length]);
  

  return (
    <div >
      <h2>Characters</h2>
      <div className='row'>
      {loading ? (
        <div>Loading...</div>
      ) : (
        characters.map((character) => (
          <Character
            key={character.id}
            name={character.name}
            origin={character.origin}
            image={character.image}
          />
        ))
      )}
      </div>
    </div>
  );
};

export default List;
