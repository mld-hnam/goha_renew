import { Button } from "antd";
import CustomerForm from "../../components/customerForm";
import Flex from "@/components/flex";
import React from "react";
import useCreateCustomer from "../../services/useCreateCustomer";
import { useForm } from "antd/lib/form/Form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

export default function AddCustomer() {
  const [form] = useForm();
  const navigate = useNavigate();
  const { profile } = useAuth();
  const { mutateAsync: createCustomer, isLoading } = useCreateCustomer();

  const onSubmit = async () => {
    try {
      await form.validateFields();
      const values = form.getFieldsValue();
      const { confirmPassword, ...payload } = values;
      await createCustomer({ ...payload, userId: profile.id });
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
            <h2>Create customer</h2>
            <div>
              <Button
                type="primary"
                onClick={onSubmit}
                htmlType="submit"
                loading={isLoading}
              >
                Submit
              </Button>
            </div>
          </Flex>
        </div>
      </div>
      <CustomerForm form={form} isLoading={isLoading} onSubmit={onSubmit} />
    </div>
  );
}
