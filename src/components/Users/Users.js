import { useEffect, useState } from "react";
import Loading from "../Loading/Loading.js";
import { MailOutlined } from "@ant-design/icons/lib/icons/index.js";
import { PhoneOutlined } from "@ant-design/icons/lib/icons/index.js";
import { GlobalOutlined } from "@ant-design/icons/lib/icons/index.js";
import { HeartOutlined } from "@ant-design/icons/lib/icons/index.js";
import { HeartFilled } from "@ant-design/icons/lib/icons/index.js";
import { EditOutlined } from "@ant-design/icons/lib/icons/index.js";
import { DeleteFilled } from "@ant-design/icons/lib/icons/index.js";
import "./Users.css";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [isCliked, setIsCliked] = useState(false);

  const handleDelete = (id) => {
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  };

  const handleClick = (id) => {
    console.log(id);
  };

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
            <span className="data"></span>
            <MailOutlined /> {user.email}
            <br></br>
            <span className="data"></span>
            <PhoneOutlined /> {user.phone}
            <br></br>
            <span className="data"></span> <GlobalOutlined /> {user.website}
          </div>
          <div className="opinion">
            <HeartOutlined
              style={{ color: "red", fontSize: "20px" }}
              onClick={() => handleClick(user.id)}
            />
            {/* <HeartFilled style={{ color: "red", fontSize: "20px" }} onClick={()=> handleClick(user.id)} /> */}
            <div className="line"></div>
            <p>
              <EditOutlined />
            </p>
            <div className="line"></div>
            <DeleteFilled
              className="delete"
              onClick={() => handleDelete(user.id)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
