import React, { FC } from "react";
import { Grid } from "@nextui-org/react";
import { PokemonFavorite } from './PokemonFavorite';

type Props = {
  pokemons: number[];
};

export const FavoritePokemons: FC<Props> = ({ pokemons }) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {pokemons.map((id) => (
        <PokemonFavorite pokemonId={id} key={id}/>
      ))}
    </Grid.Container>
  );
};
