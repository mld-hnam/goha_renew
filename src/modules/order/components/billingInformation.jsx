import React, { useRef } from "react";
import { PrinterOutlined } from "@ant-design/icons";
import { Card, Table, Button } from "antd";
// import { NumericFormat } from "react-number-format";
import moment from "moment";
import { useReactToPrint } from "react-to-print";
import styles from "./invoice.style.css";

export default function BillingInformation({ data }) {
  const {
    code,
    createdAt,
    flightNo,
    fullName_ship,
    phone_ship,
    email_ship,
    fullName_conSignee,
    email_conSignee,
    phone_conSignee,
    paymentBy,
    weight,
    cost,
    fees,
    insurance,
    totalCost,
    address,
    packageDescription,
    packageNumber,
  } = data || {};
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <Card>
      <div
        className={`d-md-flex justify-content-md-between ${styles.invoiceBox}`}
        ref={componentRef}
      >
        <div>
          <address>
            <p>
              <span className="font-weight-semibold text-dark font-size-md">
                Shipper Information
              </span>
              <br />
              <span>Full Name: {fullName_ship || "-"}</span>
              <br />
              <span>Phone: {phone_ship || "-"}</span>
              <br />
              <span>Email: {email_ship || "-"}</span>
              <br />
            </p>
          </address>
          <address>
            <p>
              <span className="font-weight-semibold text-dark font-size-md">
                Consignee Information
              </span>
              <br />
              <span>Payment By: {paymentBy || "-"}</span>
              <br />
              <span>Weight: {weight || "-"}</span>
              <br />
              <span>Shipping Cost For LBS: {cost || "-"}</span>
              <br />
            </p>
          </address>
          <address>
            <p>
              <span className="font-weight-semibold text-dark font-size-md">
                Shipping Cost
              </span>
              <br />
              <span>Payment By: {paymentBy || "-"}</span>
              <br />
              <span>Weight: {weight || "-"}</span>
              <br />
              <span>Shipping Cost For LBS: {cost || "-"}</span>
              <br />
              <span>Insurance: {insurance || "-"}</span>
              <br />
              <span>
                Other Fees:
                {fees?.map((item) => (
                  <p>
                    <span>{`${item?.name}: `}</span>
                    <span> {` ${item?.price} $`}</span>
                  </p>
                ))}
              </span>
            </p>
          </address>
          <div className="mt-3">
            <address>
              <p>
                <span className="font-weight-semibold text-dark font-size-md">
                  Total: $ {totalCost}
                </span>
              </p>
            </address>
          </div>
        </div>
        <div className="mt-3 text-right">
          <h2 className="mb-1 font-weight-semibold">
            Invoice #: <b>{code || "-"}</b>
          </h2>
          <div>
            Created: <b>{moment(createdAt).format("DD/MM/YYYY")}</b>
          </div>
          <div>
            Fight No: <b>{flightNo || "-"}</b>
          </div>
        </div>
      </div>

      <hr className="d-print-none" />
      <div className="text-right d-print-none my-3">
        <Button type="primary" onClick={handlePrint}>
          <PrinterOutlined type="printer" />
          <span className="ml-1">Print</span>
        </Button>
      </div>
    </Card>
  );
}