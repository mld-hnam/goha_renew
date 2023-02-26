import React from "react";
import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";
import { Button, Row, Col } from "antd";
import { Link } from "react-router-dom";

function ErrorFallback() {
  return (
    <div className="h-100 ">
      <div className="container-fluid d-flex flex-column justify-content-between h-100 px-md-4 pb-md-4 pt-md-1">
        <div>
          <img className="img-fluid" src={'/img/logo.png"}'} alt="" />
        </div>
        <div className="container">
          <Row align="middle">
            <Col xs={24} sm={24} md={8}>
              <h1 className="font-weight-bold mb-4 display-4">
                Page not found
              </h1>
              <p className="font-size-md mb-4">
                We`ve noticed you lost your way, no worries, we will help you to
                found the correct path.
              </p>
              <Link to="/">
                <Button type="primary">Go back</Button>
              </Link>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default function ErrorBoundary({ children }) {
  return (
    <ReactErrorBoundary FallbackComponent={ErrorFallback}>
      {children}
    </ReactErrorBoundary>
  );
}
