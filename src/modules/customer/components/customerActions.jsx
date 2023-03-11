import { Button, Space, Tooltip } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

import DeleteCustomerModal from "./deleteCustomerModal";
import React from "react";
import { useNavigate } from "react-router";
import useModal from "@/hooks/useModal";

const CustomerActions = ({ record }) => {
  const { openModal, closeModal } = useModal();
  const navigate = useNavigate();

  const onRemove = (id) => {
    return openModal(DeleteCustomerModal, {
      customerId: id,
      closeModal,
      name: record?.fullname,
    });
  };

  const onEdit = (id) => {
    navigate(`/customers/edit/${id}`);
  };

  return (
    <Space align="end" size="middle">
      <Tooltip title="Update customer">
        <Button
          shape="circle"
          onClick={() => onEdit(record?.id)}
          icon={<EditOutlined />}
        />
      </Tooltip>

      <Tooltip title="Delete customer">
        <Button
          onClick={() => onRemove(record?.id)}
          shape="circle"
          icon={<DeleteOutlined />}
        />
      </Tooltip>
    </Space>
  );
};

export default CustomerActions;
