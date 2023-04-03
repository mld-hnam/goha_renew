import { useAuth } from "@/hooks/useAuth";
import useGetCustomers from "@/modules/customer/services/useGetCustomers";
import { AutoComplete, Input } from "antd";
import React, { useState } from "react";

const parseData = (data) =>
  data?.map((item) => ({
    ...item,
    value: item.phone,
  }));

export default function AsyncCustomerSelect({ onSelect, ...props }) {
  const { profile } = useAuth();
  const [filter, setFilter] = useState();

  const params = {
    userId: profile.role !== "admin" ? profile.id : undefined,
    filter: filter || undefined,
  };

  const { data: dataCustomer, isLoading } = useGetCustomers(params);

  const handleSelect = (value) => {
    const item = parseData(dataCustomer)?.find((item) => item.phone === value);
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
      options={parseData(dataCustomer)}
      filterOption={(inputValue, option) =>
        option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
      }
    >
      <Input.Search
        placeholder="Enter phone here..."
        size="large"
        loading={isLoading}
      />
    </AutoComplete>
  );
}
