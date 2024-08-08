### Live Coding Task: React/TypeScript/Apollo GraphQL/Vite/MUI

#### **Project Context:**
You are given a project where everything is already set up using the following technologies:
- **React** with **TypeScript**
- **Apollo GraphQL** for data fetching
- **Vite** as the build tool
- **Material-UI (MUI)** for UI components

#### **Objective:**
Your task is to enhance the existing project by fetching a list of Pokémon using a GraphQL API and displaying them in a table using Material-UI (MUI). You will also implement a filter field with a debounce function, add pagination, and optionally add a popover with additional information about a Pokémon when hovering over a row.

#### **Tasks:**

1. **Fetch Pokémon List:**
   - Use the GraphQL API provided at `https://beta.pokeapi.co/graphql/console/` to fetch a list of Pokémon.
   - Display the list in a Material-UI table.

2. **Add Filter with Debounce:**
   - Implement a text input field that allows users to filter the Pokémon list by name.
   - Use a debounce function to minimize the number of API requests made while filtering.

3. **Add Pagination:**
   - Implement pagination to manage the display of a large number of Pokémon.
   - Use Apollo's pagination support to efficiently fetch and display paginated data.
   - Implement Material-UI’s pagination component to navigate between pages.

4. **Optional: Add Popover on Hover:**
   - Enhance the table rows so that when a user hovers over a Pokémon, a popover appears showing additional information about that Pokémon.

#### **Resources:**
- **GraphQL API:** [PokeAPI GraphQL Console](https://beta.pokeapi.co/graphql/console/)
- **MUI Documentation:** [Material-UI Components](https://mui.com/material-ui/all-components/)

#### **Instructions:**
1. **Fetching Data:** 
   - Use Apollo Client to set up a query to fetch the Pokémon data. 
   - Example query:
     ```graphql
     query GetPokemonList($limit: Int, $offset: Int) {
       pokemon_v2_pokemon(limit: $limit, offset: $offset) {
         id
         name
         height
         weight
       }
     }
     ```
   - Define appropriate TypeScript types for the response.

2. **Table Implementation:**
   - Use Material-UI’s `Table`, `TableHead`, `TableBody`, `TableCell`, and `TableRow` components to create the table.
   - Ensure that the table is properly styled and responsive.

3. **Filter Implementation:**
   - Add a `TextField` component from MUI for filtering.
   - Implement the filtering logic on the client-side, using the `name` field to filter the list.
   - Use `lodash`'s `debounce` function or implement a custom debounce to optimize the filter input.

4. **Pagination:**
   - Implement pagination using the Apollo Client’s support for paginated queries.
   - Use the `Pagination` component from Material-UI to allow users to navigate through pages.
   - Ensure that the pagination UI is intuitive and responsive.

5. **Popover (Optional):**
   - Use MUI’s `Popover` component.
   - On hover over a table row, fetch additional details about the Pokémon (e.g., abilities, types) and display them in the popover.

#### **Evaluation Criteria:**
- **Code Quality:** Clean, well-structured code with proper TypeScript typings.
- **UI/UX:** The table, filter, and pagination should be intuitive and responsive.
- **Efficiency:** Proper use of GraphQL queries, debounce, pagination, and state management.
- **Optional Task:** Creativity and attention to detail in the implementation of the popover.

Good luck!