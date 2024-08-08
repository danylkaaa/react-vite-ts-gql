import { useQuery } from "@apollo/client";
import "./App.css";
import { gql } from "./__generated__/gql";
import Button from "@mui/material/Button";

const QUERY = gql(`
	query samplePokeAPIquery {
		# Gets all the pokemon belonging to generation 3
		gen3_species: pokemon_v2_pokemonspecies(
			where: { pokemon_v2_generation: { name: { _eq: "generation-iii" } } }
			order_by: { id: asc }
		) {
			name
			id
		}

		# You can run multiple queries at the same time
		# Counts how many pokemon were released for each generation
		generations: pokemon_v2_generation {
			name
			pokemon_species: pokemon_v2_pokemonspecies_aggregate {
				aggregate {
					count
				}
			}
		}
	}
`);

function App() {
  const { data, loading } = useQuery(QUERY);

  return (
    <div>
      <Button variant="contained">Hello world</Button>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>{data?.gen3_species?.map(species => <div key={species.id}>{species.name}</div>)}</div>
      )}
    </div>
  );
}

export default App;
