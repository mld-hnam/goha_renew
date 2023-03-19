import { Button, Space, Tooltip } from "antd";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";

import DeleteFlightModal from "./deleteFlightModal";
import React from "react";
import useModal from "@/hooks/useModal";
import { useNavigate } from "react-router";

const FlightActions = ({ record }) => {
  const { openModal, closeModal } = useModal();
  const navigate = useNavigate();

  const onRemove = (id) => {
    return openModal(DeleteFlightModal, {
      flightId: id,
      closeModal,
      code: record?.code,
    });
  };

  const onEdit = (id) => {
    navigate(`/flights/edit/${id}`);
  };

  const onViewOrder = (id) => {
    navigate(`/orders/flight/${id}`);
  };

  return (
    <Space align="end" size="middle">
      <Tooltip title="View Order">
        <Button
          shape="circle"
          onClick={() => onViewOrder(record?.id)}
          icon={<EyeOutlined />}
        />
      </Tooltip>

      <Tooltip title="Update">
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

export default FlightActions;
