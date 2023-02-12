import Modal from "../../../../components/ui/Modal/Modal";

const SalesAddModal = ({ open, closeFunc }) => {
  return (
    <Modal
      show={open}
      onClose={closeFunc}
      content={(
        <>
          <div className="text-center modal-header">
            <label className="modal-title">ADD SALES</label>
          </div>
          <div className="text-center modal-item">
            <input className="item" type='text' placeholder="Input User Name"></input>
          </div>
          <div className="text-center modal-item">
            <input className="item" type='text' placeholder="Input Card Number"></input>
          </div>
          <div className="text-center modal-item">
            <input className="item" type='text' placeholder="Input Category"></input>
          </div>
          <div className="text-center modal-item">
            <input className="item" type='number' placeholder="Amount ($)" min={0}></input>
          </div>
          <div className="text-center modal-item">
            <select className="item">
              <option>Successful</option>
              <option>UnSuccessful</option>
            </select>
          </div>
          <div className="text-center">
            <button className="item button" onClick={closeFunc}>Add</button>
          </div>
        </>
      )}
    />
  );
};

export default SalesAddModal;