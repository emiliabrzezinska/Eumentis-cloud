import "./ModalEdit.css";

const ModalEdit = ({ close }) => {
  return (
    <div>
      <div className="modal">
        <div className="window">
          <div className="bar"><span>Basic Modal</span><button className="x">X</button></div>
          <form className="form">
            <label className="one">
              <span className="aster">*</span>
              <span>Name:</span>
            </label>
            <input></input>
            <label className="one">
              <span className="aster">*</span>
              <span>Email:</span>
            </label>
            <input></input>{" "}
            <label className="one">
              <span className="aster">*</span>
              <span>Phone:</span>
            </label>
            <input></input>
            <label className="one">
              <span className="aster">*</span>
              <span>Website:</span>
            </label>
            <input></input>
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
