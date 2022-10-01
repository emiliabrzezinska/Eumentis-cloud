import "./ModalEdit.css";

const ModalEdit = ({ close, name, mail, phone, website}) => {
console.log (name, mail)
  return (
    <div>
      <div className="modal">
        <div className="window">
          <div className="bar">
            <span>Basic Modal</span>
            <button className="x">X</button>
          </div>
          <form className="form">
            <label className="one">
              <span className="aster">*</span>
              <span className="label">Name:</span>
            </label>
            <input placeholder={name}></input>
            <label className="one">
              <span className="aster">*</span>
              <span className="label">Email:</span>
            </label>
            <input placeholder={mail}></input>
            <label className="one">
              <span className="aster">*</span>
              <span className="label">Phone:</span>
            </label>
            <input placeholder={phone}></input>
            <label className="one">
              <span className="aster">*</span>
              <span className="label">Website:</span>
            </label>
            <input placeholder={website}></input>
          </form>
          <div className="buttons">
            <button onClick={() => close(false)} className="modal1">
              Cancel
            </button>
            <button onClick={() => close(false)} className="modal1">
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalEdit;
