import { Button, Space, Tooltip } from "antd";
import { EyeFilled } from "@ant-design/icons";

import React from "react";
import { useNavigate } from "react-router";

const AgencyAction = ({ record }) => {
  const navigate = useNavigate();

  const onViewFlights = (id) => {
    navigate(`/flights/user/${id}`);
  };

  return (
    <Space align="end" size="middle">
      <Tooltip title="View Flights">
        <Button
          onClick={() => onViewFlights(record?.id)}
          shape="circle"
          icon={<EyeFilled />}
        />
      </Tooltip>
    </Space>
  );
};

export default AgencyAction;
