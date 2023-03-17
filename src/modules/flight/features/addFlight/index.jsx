import { Button } from "antd";
import Flex from "@/components/flex";
import React from "react";
import { useForm } from "antd/lib/form/Form";
import { useNavigate } from "react-router-dom";
import useCreateFlight from "../../services/useCreateFlight";
import FlightForm from "../../components/flightForm";
import { useAuth } from "@/hooks/useAuth";

export default function Addflight() {
  const [form] = useForm();
  const navigate = useNavigate();

  const { mutateAsync: createFlight, isLoading } = useCreateFlight();
  const { profile } = useAuth();

  const onSubmit = async () => {
    try {
      await form.validateFields();
      const values = form.getFieldsValue();
      await createFlight({ ...values, userId: profile?.id });
      navigate("/flights");
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
            <h2>Create flight</h2>
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
      <FlightForm form={form} isLoading={isLoading} onSubmit={onSubmit} />
    </div>
  );
}
