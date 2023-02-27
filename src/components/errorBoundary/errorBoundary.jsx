import React from "react";
import { Button } from "antd";
import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";
import { Link } from "react-router-dom";

function ErrorFallback() {
  return (
    <div className={`h-100 text-center`}>
      <div className="container-fluid d-flex flex-column justify-content-between h-100 px-md-4 pb-md-4 pt-md-1">
        <div className="container">
          <div className="text-center mb-5">
            <img className="img-fluid" src="/img/others/img-21.png" alt="" />
            <h1 className="font-weight-bold mb-4">
              Sorry, something goes wrong
            </h1>
            <Link to="/">
              <Button type="primary">Back to Home</Button>
            </Link>
          </div>
        </div>
        <div className="text-center">
          <span>
            Copyright &copy; {`${new Date().getFullYear()}`}{" "}
            <span className="font-weight-semibold">Goha</span>
          </span>
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
