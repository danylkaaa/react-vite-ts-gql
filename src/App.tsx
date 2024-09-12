import { PrimaryButton } from "@fluentui/react";
import { useQuery } from "@tanstack/react-query";
import { fetchPokemonList } from "./api";

function App() {
  const { data, loading } = useQuery({
    queryKey: ["pokemons"],
    initialData: null,
    queryFn: fetchPokemonList,
  });

  return (
    <div>
      <PrimaryButton>Hello world</PrimaryButton>
      {loading ? "loading" : data?.map(p => <div key={p.name}> {p.name}</div>)}
    </div>
  );
}

export default App;
