import React from "react";
import { Table } from "antd";
import moment from "moment";
import FlightActions from "./flightActions";

const FlightTable = ({ dataSource, loading, onChange, ...props }) => {
  const columns = [
    {
      title: "Code",
      dataIndex: "code",
    },
    {
      title: "Date",
      sorter: true,
      dataIndex: "createdAt",
      render: (_, record) => moment(record?.createdAt).format("DD/MM/YYYY"),
    },
    {
      title: "Actions",
      render: (_, record) => <FlightActions record={record} />,
    },
  ];

  return (
    <>
      <Table
        scroll={{
          x: 1300,
        }}
        {...props}
        columns={columns}
        rowKey={(record) => record.id}
        dataSource={dataSource}
        loading={loading}
        onChange={onChange}
      />
    </>
  );
};

export default FlightTable;
