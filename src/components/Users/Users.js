import { useEffect, useState } from "react";
import "./Users.css";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [avatars, setAvatars] = useState([]);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setUsers(data);
          setIsPending(false);
          console.log(data);
        });
    }, 1000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      fetch(
        "https://avatars.dicebear.com/v2/avataaars/{{username}}.svg?options[mood][]=happy"
      )
        .then((response) => {
          console.log(response);
          return response.json();
        })
        .then((data) => {
          setAvatars(data);
          setIsPending(false);
        });
    }, 1000);
  }, []);

  return (
    <div>
      {isPending && (
        <div className="sk-circle">
          <div className="sk-circle1 sk-child"></div>
          <div className="sk-circle2 sk-child"></div>
          <div className="sk-circle3 sk-child"></div>
          <div className="sk-circle4 sk-child"></div>
          <div className="sk-circle5 sk-child"></div>
          <div className="sk-circle6 sk-child"></div>
          <div className="sk-circle7 sk-child"></div>
          <div className="sk-circle8 sk-child"></div>
          <div className="sk-circle9 sk-child"></div>
          <div className="sk-circle10 sk-child"></div>
          <div className="sk-circle11 sk-child"></div>
          <div className="sk-circle12 sk-child"></div>
        </div>
      )}
      {/* <ul> */}
        {users.map((user) => (
          <div className="view" key={user.id}>
            <div className="name">{user.name}</div>
           <span className="data">Email:</span> {user.email}
            <br></br>
           <span className="data">Phone:</span> {user.phone}
            <br></br>
            <span className="data">Company:</span> {user.company.name}
            <br></br>
            <span className="data">Website:</span> {user.website}
            <br></br>
            <span className="data">Address:</span> {user.address.street}, {user.address.suite},
            {user.address.city}, {user.address.zipcode}
          </div>
        ))}
      {/* </ul> */}
      {/* <ul> */}
        {avatars.map(({ user }) => (
          <div key={user.id}>
            <img src={user.username}></img>
          </div>
        ))}
      {/* </ul> */}
    </div>
  );
};

export default Users;
