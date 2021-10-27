import { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";
import "./index.css";

const USERDATA = [
  {
    name: "oscar blum",
    age: 21,
    id: 0
  }

]

export default function Age() {
  const [usersList, setUsersList] = useState(USERDATA)
  const addUserHandler = (uName, uAge) => {
    setUsersList(prevUsersList => {
      return [...prevUsersList, {name: uName, age: uAge, id: Math.random().toString()}]
    })
  }
  return (
    <>
      <div>
        <AddUser onAddUser={addUserHandler}/>
        <UserList users={usersList}/>
      </div>
    </>
  );
}