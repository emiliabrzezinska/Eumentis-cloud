import "./ModalEdit.css"

const ModalEdit = ({ close}) => {
 
  return (
    <div>
      <div className="modal">
        
        <div className="x">
        <div className="bar"></div>
        <div className="font">
          <input></input>
           Edit data<div className="small">Do you want to save changes?</div> </div> 
        <div ><button onClick={() => close(false)} className="modal1">
            Close
          </button></div> 
          
        </div>
      </div>
      
    </div>
  );
};

export default ModalEdit;

  
 