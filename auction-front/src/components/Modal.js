import styled from "styled-components";
const Modal = ({ close, show }) => {
  return (
    <Wrapper>
      <div className={`modal ${show ? "show" : " "}`}>
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Modal title</h4>
          </div>
          <div className="modal-body">This is modal content</div>
          <div className="modal-footer">
            <button className="button" onClick={close}>
              Close
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .modal {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: all 0.3s ease-in-out;
    pointer-events: none;
  }
  .modal-content {
    width: 500px;
    background-color: #fff;
    transform: translateX(200px);
    transition: all 0.3s ease-in-out;
  }
  .modal-header,
  .modal-footer {
    padding: 10px;
  }
  .modal-title {
    margin: 0;
  }
  .modal-body {
    padding: 10px;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
  }
  .modal.show {
    opacity: 1;
    pointer-events: visible;
  }
  .modal.show .modal-content {
    transform: translateY(0);
  }
`;
export default Modal;
