import { Button, Card, Space } from "antd";
import React from "react";
import useReflectionSearchParams from "@/hooks/useReflectionSearchParams";
import { useNavigate, useParams } from "react-router-dom";
import { PlusCircleOutlined } from "@ant-design/icons";
import useOrders from "../../services/useOrders";
import { useAuth } from "@/hooks/useAuth";
import OrderTable from "../../components/tableOrder";
import FilterListOrder from "../../components/filterListOrder";
import ExportExcel from "../../components/exportExcel";
import moment from "moment";
import useGetFlight from "@/modules/flight/services/useGetFlight";

export default function OrderFlight() {
  const navigate = useNavigate();
  const { flightId } = useParams();

  const { data: flight } = useGetFlight(flightId, {
    enabled: Boolean(flightId),
  });

  const [{ page, limit, sortBy, filters }, setSearchParams] =
    useReflectionSearchParams({
      page: 0,
      limit: 20,
      sortBy: "desc",
      filters: {
        flightNo: flight?.code,
      },
    });

  const { profile } = useAuth();

  const params = {
    page,
    limit,
    sortBy,
    ...filters,
  };

  const { data, isLoading } = useOrders(
    profile?.role === "admin" ? params : { ...params, userId: profile.id },
    {
      enabled: Boolean(flight?.code),
    }
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
        <div style={{ width: "70%" }}>
          <FilterListOrder filters={filters} onChange={changeFilter} />
        </div>
        <div className="flex justify-between">
          <Space>
            <Button
              onClick={() => {
                navigate(`/orders/add`);
              }}
              type="primary"
              icon={<PlusCircleOutlined />}
              block
            >
              Add order
            </Button>
            <ExportExcel
              csvData={data}
              fileName={`goha_${moment().format("YYYY-MM-DD-HH-mm-ss")}`}
            />
          </Space>
        </div>
      </div>
      <div className="table-responsive">
        <OrderTable data={data} loading={isLoading} onChange={changeTable} />
      </div>
    </Card>
  );
}
