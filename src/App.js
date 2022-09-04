import styles from './App.module.css';
import { AddUser } from "./components/AddUser/AddUser";
import { UsersList } from "./components/UsersList/UsersList";

function App() {
  return (
    <div>
      <AddUser />
      <UsersList />
    </div>
  );
}

export default App;
