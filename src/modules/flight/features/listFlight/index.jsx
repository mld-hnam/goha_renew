import { Button, Card } from "antd";

import { PlusCircleOutlined } from "@ant-design/icons";
import React from "react";
import { useNavigate } from "react-router-dom";
import useReflectionSearchParams from "@/hooks/useReflectionSearchParams";
import useGetFlights from "../../services/useGetFlights";
import { useAuth } from "@/hooks/useAuth";
import FilterFlight from "../../components/filterFlight";
import FlightTable from "../../components/tableFlight";

export default function ListFlight() {
  const navigate = useNavigate();

  const [{ page, limit, sortBy, filters }, setSearchParams] =
    useReflectionSearchParams({
      page: 0,
      limit: 20,
      sortBy: "desc",
    });

  const params = {
    page,
    limit,
    sortBy,
    ...filters,
  };

  const { profile } = useAuth();

  const { data, isLoading } = useGetFlights(
    profile?.role === "admin" ? params : { ...params, userId: profile.id }
  );

  const changeTable = (pagination) => {
    setSearchParams({
      page: pagination.current - 1,
      limit: pagination.pageSize,
    });
  };

  const changeFilter = (f) => {
    setSearchParams({
      filters: f,
      page: 0,
    });
  };

  return (
    <Card bodyStyle={{ padding: "0px" }}>
      <div className="flex p-3 justify-between">
        <FilterFlight filters={filters} onChange={changeFilter} />
        <div className="flex justify-between">
          <Button
            onClick={() => {
              navigate(`/flights/add`);
            }}
            type="primary"
            icon={<PlusCircleOutlined />}
            block
          >
            Add flight
          </Button>
        </div>
      </div>
      <div className="table-responsive">
        <FlightTable
          dataSource={data}
          loading={isLoading}
          onChange={changeTable}
        />
      </div>
    </Card>
  );
}
