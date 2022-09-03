import type { NextPage, GetStaticProps } from "next";
import pokeApi from "../api/pokeApi";
import { Layout } from "../components/layouts";
import { PokemonListResponse, SmallPokemon } from "../interfaces/pokemon-list";
import { PokemonList } from '../components/pokemon/';

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title="Listado pokemons">
      <PokemonList pokemonList={pokemons} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");

  const pokemons: SmallPokemon[] = data.results.map(
    (item: SmallPokemon, index) => ({
      ...item,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
        index + 1
      }.svg`,
      id: index + 1,
    })
  );

  return {
    props: {
      pokemons,
    },
  };
};

export default HomePage;
