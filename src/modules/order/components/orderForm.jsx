import { Form, Tabs } from "antd";

import BillingInformation from "./billingInformation";
import ConsigneeInformation from "./consigneeInformation";
import React from "react";
import ShipperInformation from "./shipperInformation";
import ShippingCost from "./shippingCost";

export default function OrderForm({
  form,
  initialValues,
  onFieldsChange,
  values,
  mode='add'
}) {
  return (
    <>
      <Form
        layout="vertical"
        form={form}
        name="advanced_search"
        className="ant-advanced-search-form"
        initialValues={initialValues}
        onFieldsChange={onFieldsChange}
      >
        <div className="container">
          <Tabs
            defaultActiveKey="1"
            style={{ marginTop: 30 }}
            items={[
              {
                label: "Shipper Information",
                key: "1",
                children: <ShipperInformation form={form} />,
              },
              {
                label: "Consignee Information",
                key: "2",
                children: <ConsigneeInformation form={form} />,
              },
              {
                label: "Shipping Cost",
                key: "3",
                children: <ShippingCost form={form} values={values} />,
              },
              {
                label: "Billing Information",
                key: "4",
                children: <BillingInformation form={form} data={mode === 'add' ? values : initialValues} />,
              },
            ]}
          />
        </div>
      </Form>
    </>
  );
}
