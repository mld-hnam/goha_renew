import { Col, Input, Row } from "antd";

import { debounce } from "lodash";
import { useMemo } from "react";

const { Search } = Input;

const FilterListCustomer = ({ filters, onChange }) => {
  const onSearchChange = useMemo(
    () => debounce((val) => onChange({ ...filters, filter: val }), 300),
    [onChange, filters]
  );

  return (
    <Row gutter={16}>
      <Col span={16}>
        <Search
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search Name, Email, Phone ..."
        />
      </Col>
    </Row>
  );
};

export default FilterListCustomer;
