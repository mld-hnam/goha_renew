import { Col, Input, Row } from "antd";

import { debounce } from "lodash";
import { useMemo } from "react";

const { Search } = Input;

const FilterFlight = ({ filters, onChange }) => {
  const onSearchChange = useMemo(
    () => debounce((val) => onChange({ ...filters, filter: val }), 300),
    [onChange, filters]
  );

  return (
    <Row gutter={16}>
      <Col span={16}>
        <Search
          style={{ width: 220 }}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search code ..."
        />
      </Col>
    </Row>
  );
};

export default FilterFlight;
