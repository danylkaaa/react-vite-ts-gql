import axios from "axios";

// Define the types for the Pokémon data
interface User {
  name: string;
  id: number;
}

export const fetchUserList = async (): Promise<User[]> => {
  const { data } = await axios.get<User[]>("https://jsonplaceholder.typicode.com/users");
  return data;
};
