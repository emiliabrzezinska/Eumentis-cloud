import { useEffect, useState, useContext } from "react";
import ModalEdit from "../ModalEdit/ModalEdit.js";
import { Modal, Button } from "antd";
import Loading from "../Loading/Loading.js";
import { MailOutlined } from "@ant-design/icons/lib/icons/index.js";
import { PhoneOutlined } from "@ant-design/icons/lib/icons/index.js";
import { GlobalOutlined } from "@ant-design/icons/lib/icons/index.js";
import { HeartOutlined } from "@ant-design/icons/lib/icons/index.js";
import { HeartFilled } from "@ant-design/icons/lib/icons/index.js";
import { EditOutlined } from "@ant-design/icons/lib/icons/index.js";
import { DeleteFilled } from "@ant-design/icons/lib/icons/index.js";
import "./Users.css";
import { formatStrategyValues } from "rc-tree-select/lib/utils/strategyUtil.js";

const Users = ({close}) => {
  const [users, setUsers] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [isCliked, setIsCliked] = useState(false);
  const [openModal, setOpenModal] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [hearts, setHearts] = useState([])

  
  

  const showModal = () => {
    setOpenModal(true);
  };

const handleOk = () => {
  setIsModalOpen(false);
}

  const handleCancel = () => {
    setIsModalOpen(false);
  };


// const handleChooseHeart = (id) =>{
// console.log('click');
// setHearts((hearts) =>
// hearts.includes(id) ? hearts.filter((heart)=> heart !== id ) : hearts.concat(id) ); 
// }

  const handleDelete = (id) => {
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  };
  // const handleClick = (id) => {
  //   console.log(id);
  // };

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
            <MailOutlined className="icons" /> {user.email}
            <br></br>
            <span className="data"></span>
            <PhoneOutlined className="icons" /> {user.phone}
            <br></br>
            <span className="data"></span>
            <GlobalOutlined className="icons" /> {user.website}
          </div>
          <div className="opinion">
            <HeartOutlined onClick={() =>{users.filter((user) =>(user.id !== user.id? <HeartOutlined style={{color: "red"}}/>:<HeartFilled/>))} }

            />
            
            <div className="line"></div>
            <div>
              <EditOutlined className="edit" onClick={showModal}/>
              {openModal && <ModalEdit close = {setOpenModal}/>}
            </div>
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
