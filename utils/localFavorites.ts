
const toggleFavorites = (id: number) => {
  if (typeof window == 'object') {
    let favorites: number[] = JSON.parse( localStorage.getItem("favorites") || "[]");
    if (favorites.includes(id)) {
      favorites = favorites.filter((pokeId) => pokeId !== id);
    } else {
      favorites.push(id);
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }
};

const existPokemonInFavorites = (id: number): boolean => {
  if (typeof window == 'undefined') return false
  let favorites: number[] = JSON.parse( localStorage.getItem("favorites") || "[]");
  return favorites.includes(id)
}

const pokemons = (): number[] => {
  return JSON.parse(localStorage.getItem('favorites') || '[]')
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  toggleFavorites,
  existPokemonInFavorites,
  pokemons
};
