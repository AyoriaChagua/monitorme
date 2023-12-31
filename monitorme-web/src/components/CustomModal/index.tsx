import { Button, Modal } from 'antd';
import { useState } from 'react';

export default function CustomModal() {
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
  
    const handleOk = () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setOpen(false);
      }, 3000);
    };
  
    const handleCancel = () => {
      setOpen(false);
    };

    return (
            <Modal
                open={open}
                title="Title"
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        Return
                    </Button>,
                    <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
                        Submit
                    </Button>
                ]}
            >
                <p>Some contents...</p>
            </Modal>
    )
}