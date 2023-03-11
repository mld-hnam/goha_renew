import Flex from "@/components/flex";
import { Button, message } from "antd";
import React, { useState } from "react";
import useCreateOrder from "../../services/useCreateOrder";
import { useForm } from "antd/lib/form/Form";
import { useNavigate } from "react-router-dom";
import OrderForm from "../../components/orderForm";
import { calTotalCost } from "../../services/calTotalCost";
import { NumericFormat } from "react-number-format";

export default function AddOrder() {
  const [form] = useForm();
  const navigate = useNavigate();

  const { mutateAsync: createUser, isLoading } = useCreateOrder();
  const [values, setValues] = useState(0);
  const onSubmit = async () => {
    try {
      await form.validateFields();
      const values = form.getFieldsValue();
      const { confirmPassword, ...payload } = values;
      await createUser({ ...payload });
      navigate("/orders");
    } catch (error) {
      message.error("Error: please check your input fields");
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
            <h2>Create order</h2>
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
                  value={calTotalCost(values)}
                />
              </b>
            </h3>
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
      <OrderForm
        form={form}
        initialValues={{ insurance: false, paymentBy: "ZELLE" }}
        onFieldsChange={onFieldsChange}
        isLoading={isLoading}
        onSubmit={onSubmit}
        values={values}
      />
    </div>
  );
}
