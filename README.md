### Task for Interview: Fetch and Display Data using TypeScript, React Query, JSONPlaceholder API, and Fluent UI

---

**Objective**:  
The goal of this task is to evaluate your skills with TypeScript, React Query (`useQuery`), and Fluent UI, while using a public API (`JSONPlaceholder`). You will fetch and display data in a well-structured React application.

### Requirements:

1. **Use TypeScript** for the entire application.
2. **Use React Query (`useQuery`)** to manage server state and data fetching.
3. **Use Fluent UI** for styling and UI components.
4. Fetch data from the **JSONPlaceholder API**.

---

### Task Details:

#### 1. Fetch List of Users:
   - Fetch the list of users from the endpoint:
     ```
     https://jsonplaceholder.typicode.com/users
     ```
   - Display the users in a **Fluent UI List** or **Table** component.
   - Each item in the list should display the user's name and be clickable/selectable.

#### 2. Fetch Posts and Comments:
   - When a user is selected from the list:
     - Fetch the posts made by that user from the endpoint:
       ```
       https://jsonplaceholder.typicode.com/posts?userId={userId}
       ```
     - For each post, fetch the comments using the post ID:
       ```
       https://jsonplaceholder.typicode.com/comments?postId={postId}
       ```

#### 3. Display the Data:
   - Display the posts and associated comments for the selected user:
     - **Post Title** should be displayed in bold.
     - **Comments** should be displayed underneath each post.
   - Use Fluent UI components such as **DetailsList**, **Card**, or **List** to display posts and comments.

---

### UI Requirements:

1. The UI should have three main sections:
   - **User List**: A list of users or dropdown to select a user.
   - **Posts List**: Display a list of posts by the selected user.
   - **Comments**: Each post should display its corresponding comments.

2. Ensure a clean, readable, and responsive layout using Fluent UI.

---

### Data Fetching & Caching:
- Use **React Query (`useQuery`)** to fetch and cache the data.
- Implement proper **loading** and **error** states for both the users, posts, and comments.
- **Cache** the fetched data appropriately so switching between users does not re-fetch unnecessarily.

---

### Bonus:
- Use Fluent UI's **Shimmer** component for loading states.
- Implement basic filtering or sorting functionality for posts or comments.
- Make the layout responsive and ensure it's user-friendly on different screen sizes.

---

### What We Are Looking For:
1. **Code Quality**: Clean, readable, and well-structured code using TypeScript.
2. **React Query**: Correct usage of `useQuery` for fetching and caching data.
3. **Fluent UI**: Proper use of Fluent UI components to create a modern and professional UI.
4. **State Management**: Efficient management of application state with React Query and React hooks.
5. **Data Fetching**: Correct API calls and data handling using JSONPlaceholder.
   
---

### JSONPlaceholder API Endpoints:
- **Users**: `https://jsonplaceholder.typicode.com/users`
- **Posts by User**: `https://jsonplaceholder.typicode.com/posts?userId={userId}`
- **Comments by Post**: `https://jsonplaceholder.typicode.com/comments?postId={postId}`

Good luck! Feel free to be creative with the implementation, but ensure the functionality and user experience are prioritized.