import React from 'react';
import { Button, Modal } from 'antd';
import './modal_index.scss';

const ModalComponent = ({modalOpen, setModalOpen, sendStatus, setStatus, status}) => {
    
  return (
    <>
      <Modal
        title="Create a Post"
        centered
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        footer={[
            <Button key="submit" 
                type="primary" /*Loading={loading}*/
                onClick={sendStatus}
                disabled={status.length > 0 ? false : true}
            >
                Post
            </Button>,
        ]}
      >
        <input placeholder='What do you want to talk about?' 
               className='modal-input'
               onChange={() => setStatus(event.target.value)}
               value={status}
        />

        
      </Modal>
    </>
  );
};
export default ModalComponent;