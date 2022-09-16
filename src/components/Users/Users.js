import { useEffect, useState } from "react";
import "./Users.css";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [avatars, setAvatars] = useState([]);
  const [isPending, setIsPending] = useState(true)

  useEffect(() => {
    setTimeout (()=>{   
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data); 
        setIsPending(false);
      });
      }, 1000);
  }, []);

  useEffect(() => {
    setTimeout (()=>{    
      fetch("https://avatars.dicebear.com/v2/avataaars/{{username}}.svg?options[mood][]=happy"
    )
      .then((response) => {
        console.log(response)
        return response.url();
      })
      .then((data) => {
        setAvatars(data); 
        setIsPending(false);
      }); 
      }, 1000);
  },[]);

  return (
    <div>
      {isPending && <div className="sk-circle">
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
</div>}
      <ul>
        {users.map(({ id, name, email, city }) => (
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
        {avatars.map(({user}) => (
          <li key={user.id}>
            <img src={user.username}></img>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
