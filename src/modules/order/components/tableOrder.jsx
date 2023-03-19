import { Button, Space, Table } from "antd";
import moment from "moment";
import React, { useState } from "react";

import OrderActions from "./orderActions";
import { LabelOrderStatus } from "./labelOrderStatus";
import useModal from "@/hooks/useModal";
import { useAuth } from "@/hooks/useAuth";
import { FormOutlined } from "@ant-design/icons";
import StatusAllShipmentModal from "./statusAllShipmentModal";

const OrderTable = ({ data, loading, onChange, ...props }) => {
  const { openModal, closeModal } = useModal();
  const { hasRoles } = useAuth();

  const columns = [
    {
      title: "Full Name",
      dataIndex: "fullName_ship",
      sorter: true,
    },
    {
      title: "Code",
      dataIndex: "code",
    },
    {
      title: "Flight No",
      dataIndex: "flightNo",
    },
    {
      title: "Phone",
      dataIndex: "phone_ship",
    },
    {
      title: "Email",
      dataIndex: "email_ship",
    },
    {
      title: "Date",
      sorter: true,
      dataIndex: "createdAt",
      render: (_, record) => moment(record?.createdAt).format("DD/MM/YYYY"),
    },
    {
      title: "Status",
      dataIndex: "status",
      sorter: true,
      render: (_, record) => <LabelOrderStatus status={record.status} />,
    },
    {
      title: "Actions",
      render: (_, record) => <OrderActions record={record} />,
    },
  ];

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const onUpdateStatus = () => {
    return openModal(StatusAllShipmentModal, {
      ids: selectedRowKeys,
      closeModal,
    });
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;

  return (
    <>
      <Space>
        {hasSelected ? (
          <Space>
            <span style={{ paddingLeft: 15 }}>
              {`Selected: `}
              <b>{selectedRowKeys.length} </b>items
            </span>
            {hasRoles(["admin", "user"]) && (
              <Button
                type="primary"
                size="small"
                icon={<FormOutlined />}
                disabled={!hasSelected}
                onClick={() => onUpdateStatus()}
              >
                Update All
              </Button>
            )}
          </Space>
        ) : (
          ""
        )}
      </Space>
      <Table
        scroll={{
          x: 1300,
        }}
        {...props}
        rowSelection={rowSelection}
        columns={columns}
        rowKey={(record) => record.id}
        dataSource={data}
        loading={loading}
        onChange={onChange}
      />
    </>
  );
};

export default OrderTable;
