import { Card } from "antd";
import React from "react";
import TableUser from "../../components/tableUser";

export default function ListUser() {
  return (
    <Card bodyStyle={{ padding: "0px" }}>
      <div className="table-responsive">
        <TableUser />
      </div>
    </Card>
  );
}
