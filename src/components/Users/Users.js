import { useEffect, useState } from "react";
import Loading from "../Loading/Loading.js";
import "./Users.css";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setIsPending(false);
        console.log(data);
      });
  }, []);

  return (
    <div className="layout">
      {isPending && <Loading />}
      {users.map((user) => (
        <div className="view" key={user.id}>
          <div className="avatar">
            <img
              alt="person with a specyfic mood"
              src={`https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`}
            ></img>
          </div>
          <div className="text">
            <div className="name">{user.name}</div>
            <span className="data">Email:</span> {user.email}
            <br></br>
            <span className="data">Phone:</span> {user.phone}
            <br></br>
            <span className="data">Company:</span> {user.company.name}
            <br></br>
            <span className="data">Website:</span> {user.website}
            <br></br>
            <span className="data">Address:</span> {user.address.street},{" "}
            {user.address.suite},{user.address.city}, {user.address.zipcode}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
