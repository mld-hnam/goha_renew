import Flex from "@/components/flex";
import { Button, message } from "antd";
import React, { useState } from "react";
import useCreateOrder from "../../services/useCreateOrder";
import { useForm } from "antd/lib/form/Form";
import { useNavigate } from "react-router-dom";
import OrderForm from "../../components/orderForm";
import { calTotalCost } from "../../services/calTotalCost";
import { NumericFormat } from "react-number-format";
import { useAuth } from "@/hooks/useAuth";
import useUpdateShipmentHistory from "../../services/useUpdateShipmentHistory";
import useCreateCustomer from "@/modules/customer/services/useCreateCustomer";
import useCheckCustomer from "@/modules/customer/services/useCheckCustomer";

export default function AddOrder() {
  const [form] = useForm();
  const navigate = useNavigate();

  const { mutateAsync: createOrder, isLoading } = useCreateOrder();

  const { mutateAsync: updateShipmentHistory } = useUpdateShipmentHistory();
  const { mutateAsync: createCustomer } = useCreateCustomer();
  const { mutateAsync: checkEmail } = useCheckCustomer();

  const [values, setValues] = useState(0);
  const { profile } = useAuth();

  const onSubmit = async () => {
    try {
      const values = form.getFieldsValue();
      const totalCost = calTotalCost(values);

      const { fullName_ship, email_ship, phone_ship, ...orders } = values;

      const payloadCustomer = {
        fullname: fullName_ship,
        email: email_ship,
        phone: phone_ship,
        userId: profile?.id,
      };

      let customer;
      const hasCustomer = await checkEmail({ email: email_ship });

      if (hasCustomer) {
        customer = hasCustomer;
      } else {
        customer = await createCustomer(payloadCustomer);
      }
      const payloadOrder = {
        ...orders,
        fullName_ship: customer.fullname,
        email_ship: customer.email,
        phone_ship: customer.phone,
        totalCost,
        userId: profile?.id,
      };
      const res = await createOrder(payloadOrder);

      await updateShipmentHistory({
        orderId: res?.id,
        userId: profile?.id,
        status: res?.status,
        note: "Packages Successfully",
        state: true,
      });

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
