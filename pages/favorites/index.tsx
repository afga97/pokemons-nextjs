import { useEffect, useState } from "react";
import { Card, Grid } from "@nextui-org/react";
import { Layout } from "../../components/layouts";
import NoFavorites from '../../components/ui/NoFavorites';
import { localFavorites } from "../../utils";
import { FavoritePokemons } from '../../components/pokemon/';

const Favorites = () => {

  const [favortePokemons, setFavoritePokemons] = useState<number[]>([])

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons)
  }, [])

  return (
    <Layout title="Pokemons - Favoritos">
      { favortePokemons.length === 0 
        ? ( <NoFavorites />)
        : ( <FavoritePokemons pokemons={favortePokemons}/> )
      }
    </Layout>
  );
};

export default Favorites;
