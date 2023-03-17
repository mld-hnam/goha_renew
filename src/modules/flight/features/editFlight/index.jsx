import { Button, Skeleton } from "antd";
import { useNavigate, useParams } from "react-router-dom";

import Flex from "@/components/flex";
import React from "react";
import { useForm } from "antd/lib/form/Form";
import useUpdateFlight from "../../services/useUpdateFlight";
import useGetFlight from "../../services/useGetFlight";
import FlightForm from "../../components/flightForm";

export default function EditUser() {
  const [form] = useForm();
  const { flightId } = useParams();
  const { mutateAsync: updateFlight, isLoading: isLoadingUpdate } =
    useUpdateFlight();

  const { data: flight, isLoading } = useGetFlight(flightId, {
    enabled: Boolean(flightId),
  });

  const navigate = useNavigate();
  const onSubmit = async () => {
    try {
      await form.validateFields();
      const values = form.getFieldsValue();
      await updateFlight({ ...values, id: flightId });
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
            <h2>Update: {flight?.code}</h2>
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
        <FlightForm
          form={form}
          initialValues={flight}
          onSubmit={onSubmit}
          isLoading={isLoadingUpdate}
          mode="EDIT"
        />
      )}
    </div>
  );
}
