import React from "react";
import { Card, Row, Col } from "antd";

const backgroundStyle = {
  backgroundImage: "url(/img/others/img-17.jpg)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

const PublicLayout = ({ children }) => {
  return (
    <div className="h-100" style={backgroundStyle}>
      <div
        style={{ minHeight: "100vh" }}
        className="container d-flex flex-column justify-content-center "
      >
        <Row justify="center">
          <Col xs={20} sm={20} md={20} lg={10}>
            <Card>{children}</Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default PublicLayout;
