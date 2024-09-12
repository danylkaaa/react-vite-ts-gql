import { useQuery } from "@tanstack/react-query";
import { fetchUserList } from "./api";
import { Button } from "@fluentui/react-components";

function App() {
  const { data, isFetching } = useQuery({
    queryKey: ["user"],
    initialData: null,
    queryFn: fetchUserList,
  });

  return (
    <div>
      <Button>Hello world</Button>
      {isFetching ? "loading" : data?.map(p => <div key={p.name}> {p.name}</div>)}
    </div>
  );
}

export default App;
