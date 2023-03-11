import { OrderStatus } from "../services/orderService";
import React from "react";
import { Select } from "antd";

const StatusSelect = ({ value, ...props }) => {
  return (
    <Select {...props} placeholder="Choose Status ..." value={value}>
      <Select.Option value={OrderStatus.PACKAGED}>PACKAGED</Select.Option>
      <Select.Option value={OrderStatus.SHIPPING}>SHIPPING</Select.Option>
      <Select.Option value={OrderStatus.TOVIETNAM}>TOVIETNAM</Select.Option>
      <Select.Option value={OrderStatus.REVEIVED}>REVEIVED</Select.Option>
      <Select.Option value={OrderStatus.CANCELED}>CANCELED</Select.Option>
    </Select>
  );
};
export default StatusSelect;
