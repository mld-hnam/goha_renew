import Form, { useForm } from "antd/lib/form/Form";
import { Input, Modal, Radio, Space, message, Button } from "antd";

import StatusSelect from "@/modules/order/components/statusSelect";

import { useInvalidateOrder } from "@/modules/order/services/useOrders";
import { useState } from "react";
import useUpdateOrders from "@/modules/order/services/useUpdateOrders";
import { useAuth } from "@/hooks/useAuth";

const StatusAllShipmentModal = ({
  ids = [],
  type,
  closeModal,
  ...restProps
}) => {
  const { mutate: updateOrders } = useUpdateOrders();
  const [status, setStatus] = useState("");
  const [note, setNote] = useState("");
  const [statusInput, setStatusInput] = useState("");
  const [state, setState] = useState(true);
  const invalidateOrder = useInvalidateOrder();
  const { profile } = useAuth();
  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    if (!status || !note || note === "" || note === null) {
      message.error("Please input content...");
      setStatusInput("error");
      return;
    }
    setLoading(true);
    updateOrders(
      {
        ids,
        status,
        userId: profile?.id,
        note,
        state,
      },
      {
        onSuccess: async () => {
          await invalidateOrder();
          closeModal();
          setLoading(false);
        },
      }
    );
  };
  const [form] = useForm();

  return (
    <Modal
      {...restProps}
      footer={[
        <Button
          key="submit"
          type="primary"
          loading={loading}
          onClick={onSubmit}
        >
          Submit
        </Button>,
      ]}
    >
      <Form layout="vertical" form={form}>
        <h1>Update Status</h1>
        <Space
          style={{
            marginBottom: "16px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <StatusSelect
            status={statusInput}
            onChange={(val) => setStatus(val)}
            width="100%"
          />

          <Radio.Group
            defaultValue={true}
            onChange={(e) => setState(e.target.value)}
          >
            <Radio value={true}>Success</Radio>
            <Radio value={false}>Fail</Radio>
          </Radio.Group>
        </Space>
        <Input.TextArea
          status={statusInput}
          placeholder="Please input content..."
          onChange={(e) => setNote(e.target.value)}
        />
      </Form>
    </Modal>
  );
};

export default StatusAllShipmentModal;
