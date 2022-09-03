import { Grid } from "@nextui-org/react";
import { FC } from "react";
import { SmallPokemon } from "../../interfaces/";
import { PokemonCard } from "./PokemonCard";

interface Props {
  pokemonList: SmallPokemon[];
}

export const PokemonList: FC<Props> = ({ pokemonList }) => {
  return (
    <Grid.Container gap={2} justify="flex-start">
      {pokemonList.map((pokemon ) => (
        <PokemonCard pokemon={pokemon} key={pokemon.id} />
      ))}
    </Grid.Container>
  );
};
