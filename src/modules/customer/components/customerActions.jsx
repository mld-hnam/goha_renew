import { Button, Space, Tooltip } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";

import DeleteCustomerModal from "./deleteCustomerModal";
import React from "react";
import useModal from "@/hooks/useModal";
import { useNavigate } from "react-router";
import AddAssigneeModal from "./addAssigneeModal";

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

  const onAddAssignee = (customer) => {
    return openModal(AddAssigneeModal, {
      customer,
      closeModal,
    });
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

      <Tooltip title="Delete">
        <Button
          onClick={() => onRemove(record?.id)}
          shape="circle"
          icon={<DeleteOutlined />}
        />
      </Tooltip>

      <Tooltip title="Add assignee">
        <Button
          onClick={() => onAddAssignee(record)}
          shape="circle"
          icon={<PlusCircleOutlined />}
        />
      </Tooltip>
    </Space>
  );
};

export default CustomerActions;
