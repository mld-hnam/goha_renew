import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Space, Tooltip } from "antd";

import DeleteOrderModal from "./deleteOrderModal";
import React from "react";
import useModal from "@/hooks/useModal";
import { useNavigate } from "react-router";

const OrderActions = ({ record }) => {
  const { openModal, closeModal } = useModal();
  const navigate = useNavigate();
  const onRemove = (id) => {
    return openModal(DeleteOrderModal, { orderId: id, closeModal });
  };

  const onEdit = (id) => {
    navigate(`/orders/edit/${id}`);
  };

  return (
    <Space align="end" size="middle">
      <Tooltip title="Edit">
        <Button
          shape="circle"
          onClick={() => onEdit(record?.id)}
          icon={<EditOutlined />}
        />
      </Tooltip>

      <Tooltip title="Delete">
        <Button
          onClick={() => onRemove(record?.id)}
          shape="circle"
          icon={<DeleteOutlined />}
        />
      </Tooltip>
    </Space>
  );
};

export default OrderActions;
