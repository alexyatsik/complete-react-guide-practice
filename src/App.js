import styles from './App.module.css';
import { AddUser } from "./AddUser/AddUser";
import { UsersList } from "./UsersList/UsersList";

function App() {
  return (
    <div>
      <AddUser />
      <UsersList />
    </div>
  );
}

export default App;
