import { useEffect, useState } from "react";
import "./Users.css";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [avatars, setAvatars] =useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => setUsers(data));
  }, []);

  useEffect(() => {
    fetch("https://avatars.dicebear.com/v2/avataaars/{{username}}.svg?options[mood][]=happy")
      .then((response) => {
        return response.json();
      })
      .then((data) => setAvatars(data));
  }, []);

  return (
    <div>
    <ul>
      {users.map(({id, name, email, city}) => (
        <li key={id}>
            <br></br>
          {name}
          <br></br>
          {email}
          <br></br>
          {city}
        </li>
      ))}
    </ul>
    <ul>
        {avatars.map(({id, username}) => (
            <li key={id}>
                <img src={username}></img>
            </li>
        ))}
    </ul>
    </div>
  );
};

export default Users;
