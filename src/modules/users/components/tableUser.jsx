import { Table } from "antd";
import React from "react";

export default function TableUser({ tableColumns, dataSource }) {
  return <Table columns={tableColumns} dataSource={dataSource} rowKey="id" />;
}
