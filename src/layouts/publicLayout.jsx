import React from "react";
import { Row, Col } from "antd";

const backgroundStyle = {
  backgroundImage: "url(/img/others/img-17.jpg)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  minHeight: "100vh",
  alignItems: "center",
};

const PublicLayout = ({ children }) => {
  return (
    <div className={`h-100 light`}>
      <Row justify="center" className="align-items-stretch h-100">
        <Col xs={20} sm={20} md={24} lg={16}>
          <div className="container d-flex flex-column h-100">
            <div className="mt-4">{children}</div>
          </div>
        </Col>
        <Col xs={0} sm={0} md={0} lg={8}>
          <div
            className="d-flex flex-column justify-content-center h-100 px-4"
            style={backgroundStyle}
          >
            <Row justify="center" align="center">
              <Col xs={0} sm={0} md={0} lg={20}>
                <img
                  className="img-fluid mb-5"
                  src="/img/others/img-19.png"
                  alt=""
                />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default PublicLayout;
