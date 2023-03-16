import { Button, Card } from "antd";

import CustomerActions from "../../components/customerActions";
import FilterListCustomer from "../../components/filterListCustomer";
import { PlusCircleOutlined } from "@ant-design/icons";
import React from "react";
import TableCustomer from "../../components/tableCustomer";
import moment from "moment";
import useGetCustomers from "@/modules/customer/services/useGetCustomers";
import { useNavigate } from "react-router-dom";
import useReflectionSearchParams from "@/hooks/useReflectionSearchParams";

const columns = [
  {
    title: "Name",
    dataIndex: "fullname",
    sorter: true,
  },
  {
    title: "Phone",
    dataIndex: "phone",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
  {
    title: "Date",
    sorter: true,
    dataIndex: "createdAt",
    render: (_, record) => moment(record?.createdAt).format("DD/MM/YYYY"),
  },
  {
    title: "Actions",
    render: (_, record) => <CustomerActions record={record} />,
  },
];

export default function ListCustomer() {
  const navigate = useNavigate();

  const [{ page, limit, sortBy, filters }, setSearchParams] =
    useReflectionSearchParams({
      page: 0,
      limit: 20,
      sortBy: "desc",
    });

  const { data, isLoading } = useGetCustomers({
    page,
    limit,
    sortBy,
    ...filters,
  });

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
        <FilterListCustomer filters={filters} onChange={changeFilter} />
        <div className="flex justify-between">
          <Button
            onClick={() => {
              navigate(`/customers/add`);
            }}
            type="primary"
            icon={<PlusCircleOutlined />}
            block
          >
            Add customer
          </Button>
        </div>
      </div>
      <div className="table-responsive">
        <TableCustomer
          tableColumns={columns}
          dataSource={data}
          loading={isLoading}
          onChange={changeTable}
        />
      </div>
    </Card>
  );
}
