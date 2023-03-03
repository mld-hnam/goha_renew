import { Button, Space } from "antd";
import {
  AreaChartOutlined,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";

import DeleteUserModal from "./deleteUserModal";
import React from "react";
import { useNavigate } from "react-router";
import useModal from "@/hooks/useModal";

const UserActions = ({ record }) => {
  const { openModal, closeModal } = useModal();
  const navigate = useNavigate();
  const onRemove = (id) => {
    return openModal(DeleteUserModal, {
      userId: id,
      closeModal,
      name: record?.name,
    });
  };

  const onEdit = (id) => {
    navigate(`/user/${id}`);
  };

  const onViewOrderUser = (id) => {
    navigate(`/order-user/${id}`);
  };

  return (
    <Space align="end" size="middle">
      <Button
        shape="circle"
        onClick={() => onEdit(record?.id)}
        icon={<EditOutlined />}
      />
      <Button
        onClick={() => onRemove(record?.id)}
        shape="circle"
        icon={<DeleteOutlined />}
      />
      <Button
        onClick={() => onViewOrderUser(record?.id)}
        shape="circle"
        icon={<AreaChartOutlined />}
      />
    </Space>
  );
};

export default UserActions;
