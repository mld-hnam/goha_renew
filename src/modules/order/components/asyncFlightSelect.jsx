import { useAuth } from "@/hooks/useAuth";
import useGetFlights from "@/modules/flight/services/useGetFlights";
import { AutoComplete } from "antd";
import React, { useState } from "react";

const parseData = (data) =>
  data?.map((item) => ({
    ...item,
    value: item.code,
  }));

export default function AsyncFlightSelect({ ...props }) {
  const { profile } = useAuth();
  const [filter, setFilter] = useState();

  const params = {
    userId: profile.role !== "admin" ? profile.id : undefined,
    filter: filter || undefined,
  };

  const { data } = useGetFlights(params);

  return (
    <>
      <AutoComplete
        {...props}
        options={parseData(data)}
        onSearch={(val) => {
          setFilter(val);
        }}
        filterOption={(inputValue, option) =>
          option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
        }
        placeholder="Enter code here..."
      />
    </>
  );
}
