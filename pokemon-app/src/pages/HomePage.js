// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import PokemonCard from '../components/PokemonCard';
// import './HomePage.css';

// const HomePage = () => {
//   const [allPokemons, setAllPokemons] = useState([]); // Store all Pokémon names
//   const [pokemons, setPokemons] = useState([]); // Pokémon displayed on the current page
//   const [search, setSearch] = useState('');
//   const [page, setPage] = useState(1);
//   const [loading, setLoading] = useState(true);
//   const itemsPerPage = 20; // Number of Pokémon to display per page

//   // Fetch all Pokémon names when component mounts
//   useEffect(() => {
//     const fetchAllPokemonNames = async () => {
//       setLoading(true);
//       try {
//         const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1000');
//         setAllPokemons(response.data.results);
//       } catch (error) {
//         console.error("Error fetching the Pokémon data", error);
//       }
//       setLoading(false);
//     };
//     fetchAllPokemonNames();
//   }, []);

//   // Update the displayed Pokémon based on pagination and search
//   useEffect(() => {
//     const fetchPagePokemons = () => {
//       if (search) {
//         // Filter Pokémon by search term
//         const filteredPokemons = allPokemons.filter(pokemon =>
//           pokemon.name.toLowerCase().includes(search.toLowerCase())
//         );
//         setPokemons(filteredPokemons.slice(0, itemsPerPage)); // Display first 20 matching Pokémon
//       } else {
//         // Paginate Pokémon if no search term
//         const offset = (page - 1) * itemsPerPage;
//         setPokemons(allPokemons.slice(offset, offset + itemsPerPage)); // Paginate results
//       }
//     };
//     fetchPagePokemons();
//   }, [allPokemons, page, search]);

//   const handleSearch = (event) => {
//     setSearch(event.target.value);
//     setPage(1); // Reset page when searching
//   };

//   return (
//     <div className="home-page">
//       <input
//         type="text"
//         className="search-bar"
//         placeholder="Search Pokémon by name..."
//         value={search}
//         onChange={handleSearch}
//       />
//       <div className="pokemon-list">
//         {loading ? (
//           <p>Loading...</p>
//         ) : (
//           pokemons.length > 0 ? (
//             pokemons.map(pokemon => (
//               <PokemonCard key={pokemon.name} pokemon={pokemon} />
//             ))
//           ) : (
//             <p>No Pokémon found</p>
//           )
//         )}
//       </div>
//       {!search && (
//         <div className="nav-buttons">
//           <button onClick={() => setPage(page => Math.max(page - 1, 1))} disabled={page === 1}>Previous</button>
//           <button onClick={() => setPage(page => page + 1)} disabled={page * itemsPerPage >= allPokemons.length}>Next</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default HomePage;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonCard from '../components/PokemonCard';
import './HomePage.css';

const HomePage = () => {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  // Fetching all Pokémon data on component mount
  useEffect(() => {
    const fetchAllPokemons = async () => {
      setLoading(true);
      try {
        // Fetch all Pokémon (limit 1000 for this example)
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1000');
        setPokemons(response.data.results);
      } catch (error) {
        console.error('Error fetching the Pokémon data', error);
      }
      setLoading(false);
    };

    fetchAllPokemons();
  }, []);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  // Filter Pokémon based on search input
  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="home-page">
      {/* Search Bar */}
      <input
        type="text"
        className="search-bar"
        placeholder="Search..."
        value={search}
        onChange={handleSearch}
      />

      {/* Pokémon List */}
      <div className="pokemon-list">
        {loading ? (
          <p>Loading...</p>
        ) : (
          filteredPokemons.map((pokemon) => (
            <PokemonCard key={pokemon.name} pokemon={pokemon} />
          ))
        )}
      </div>
    </div>
  );
};

export default HomePage;
