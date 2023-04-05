import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Button } from "antd";
import Flex from "@/components/flex";
import { NumericFormat } from "react-number-format";
import OrderForm from "../../components/orderForm";
import { calTotalCost } from "../../services/calTotalCost";
import { useForm } from "antd/lib/form/Form";
import useOrder from "../../services/useOrder";
import useUpdateOrder from "../../services/useUpdateOrder";

export default function EditOrder() {
  const [form] = useForm();
  const { orderId } = useParams();
  const { data: order, isLoading } = useOrder(orderId, {
    enabled: Boolean(orderId),
  });
  const { mutateAsync: updateOrder, isLoading: loadingUpdate } =
    useUpdateOrder();
  const navigation = useNavigate();
  const [values, setValues] = useState();

  const onSubmit = async () => {
    try {
      const values = form.getFieldsValue();
      const { customer, ...filterValue } = values;
      const totalCost = calTotalCost(filterValue);
      const payload = { ...order, ...filterValue, totalCost };
      await updateOrder(payload);
      navigation("/orders");
    } catch (error) {
      console.log({ error });
    }
  };

  const onFieldsChange = () => {
    setValues(form.getFieldsValue());
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
            <h2>Update order: {order?.code}</h2>
            <h3>
              <span>Total: </span>
              <b
                style={{
                  textAlign: "left",
                  color: "#ff4d4f",
                  fontWeight: "bold",
                  fontSize: 24,
                  paddingTop: 25,
                }}
              >
                <NumericFormat
                  thousandSeparator=","
                  prefix={"$"}
                  value={order?.totalCost}
                />
              </b>
            </h3>
            <div>
              <Button
                type="primary"
                onClick={onSubmit}
                htmlType="submit"
                loading={isLoading || loadingUpdate}
              >
                Submit
              </Button>
            </div>
          </Flex>
        </div>
      </div>
      {!isLoading && (
        <OrderForm
          form={form}
          initialValues={order}
          onFieldsChange={onFieldsChange}
          isLoading={isLoading}
          onSubmit={onSubmit}
          values={values}
          mode="edit"
        />
      )}
    </div>
  );
}
