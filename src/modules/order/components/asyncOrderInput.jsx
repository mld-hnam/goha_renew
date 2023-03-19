import { useAuth } from "@/hooks/useAuth";
import { AutoComplete, Input } from "antd";
import React, { useState } from "react";
import useOrders from "../services/useOrders";

const parseData = (data) =>
  data?.map((item) => ({
    ...item,
    value: item.code,
  }));

export default function AsyncOrderSelect({ onSelect, ...props }) {
  const { profile } = useAuth();
  const [filter, setFilter] = useState();

  const params = {
    userId: profile.role !== "admin" ? profile.id : undefined,
    filter: filter || undefined,
  };

  const { data, isLoading } = useOrders(params);

  const handleSelect = (value) => {
    const item = parseData(data)?.find((item) => item.code === value);
    if (item) {
      onSelect({
        ...item,
        value,
      });
    }
  };

  return (
    <AutoComplete
      {...props}
      onSearch={(val) => {
        setFilter(val);
      }}
      onSelect={handleSelect}
      options={parseData(data)}
      filterOption={(inputValue, option) =>
        option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
      }
    >
      <Input.Search
        size="large"
        placeholder="Enter code here..."
        loading={isLoading}
        enterButton
      />
    </AutoComplete>
  );
}
