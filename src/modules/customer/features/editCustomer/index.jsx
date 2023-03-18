import { Button, Skeleton } from "antd";
import { useNavigate, useParams } from "react-router-dom";

import CustomerForm from "../../components/customerForm";
import Flex from "@/components/flex";
import React from "react";
import { useForm } from "antd/lib/form/Form";
import useGetCustomer from "../../services/useGetCustomer";
import useUpdateCustomer from "../../services/useUpdateCustomer";
import { useAuth } from "@/hooks/useAuth";

export default function EditUser() {
  const [form] = useForm();
  const { customerId } = useParams();
  const { mutateAsync: updateCustomer, isLoading: isLoadingUpdate } =
    useUpdateCustomer();

  const { data: customer, isLoading } = useGetCustomer(customerId, {
    enabled: Boolean(customerId),
  });

  const navigate = useNavigate();
  const { profile } = useAuth();

  const onSubmit = async () => {
    try {
      await form.validateFields();
      const values = form.getFieldsValue();
      await updateCustomer({ ...values, id: customerId, userId: profile.id });
      navigate("/customers");
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <div>
      <div className="border-bottom page-header-alt mb-4">
        <div className="container">
          <Flex
            className="py-2"
            mobileFlex={false}
            justifyContent="between"
            alignItems="center"
          >
            <h2>Update: {customer?.name}</h2>
            <div>
              <Button
                type="primary"
                onClick={onSubmit}
                htmlType="submit"
                loading={isLoading || isLoadingUpdate}
              >
                Submit
              </Button>
            </div>
          </Flex>
        </div>
      </div>
      {isLoading ? (
        <Skeleton />
      ) : (
        <CustomerForm
          form={form}
          initialValues={customer}
          onSubmit={onSubmit}
          isLoading={isLoadingUpdate}
          mode="EDIT"
        />
      )}
    </div>
  );
}
