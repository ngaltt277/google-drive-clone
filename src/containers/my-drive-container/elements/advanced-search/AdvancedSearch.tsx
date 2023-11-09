import { Button, Input, Select } from "@/components/form";
import { Checkbox, Col, Row } from "antd";
import { useMemo } from "react";

export function AdvancedSearch() {
  const locationOptions = useMemo(
    () => [
      { label: "In the trash", value: "trash" },
      { label: "Starred", value: "starred" },
      { label: "Encrypted", value: "encrypted" },
    ],
    []
  );

  const approvalOptions = useMemo(
    () => [
      { label: "Waiting for my approval", value: "waiting" },
      { label: "Because I requested it", value: "requested" },
    ],
    []
  );

  return (
    <form className="advanced-search">
      <div className="form-content">
        <Row className="item">
          <Col span={6}>
            <label className="label">Type</label>
          </Col>
          <Col span={9}>
            <Select defaultValue="Any" size="large" />
          </Col>
        </Row>
        <Row className="item">
          <Col span={6}>
            <label className="label">Owner</label>
          </Col>
          <Col span={9}>
            <Select defaultValue="Anyone" size="large" />
          </Col>
        </Row>
        <Row className="item">
          <Col span={6}>
            <label className="label">There are words</label>
          </Col>
          <Col span={18}>
            <Input placeholder="Enter words found in the file" size="large" />
          </Col>
        </Row>
        <Row className="item">
          <Col span={6}>
            <label className="label">Section Name</label>
          </Col>
          <Col span={18}>
            <Input
              placeholder="Enter a phrase that matches part of the file name"
              size="large"
            />
          </Col>
        </Row>
        <Row className="item" gutter={[16, 16]}>
          <Col span={6}>
            <label className="label">There are words</label>
          </Col>
          <Col span={9}>
            <Select defaultValue="Everywhere" size="large" />
          </Col>
          <Col offset={6}>
            <Checkbox.Group options={locationOptions} />
          </Col>
        </Row>
        <Row className="item">
          <Col span={6}>
            <label className="label">Modification date</label>
          </Col>
          <Col span={9}>
            <Select defaultValue="Anytime" size="large" />
          </Col>
        </Row>
        <Row className="item">
          <Col span={6}>
            <label className="label">Request approval</label>
          </Col>
          <Col flex="auto">
            <Checkbox.Group options={approvalOptions} />
          </Col>
        </Row>
        <Row className="item">
          <Col span={6}>
            <label className="label">Shared with</label>
          </Col>
          <Col span={18}>
            <Input placeholder="Enter name or email address..." size="large" />
          </Col>
        </Row>
        <Row className="item">
          <Col span={6}>
            <label className="label">Items to track</label>
          </Col>
          <Col span={9}>
            <Select defaultValue="-" size="large" />
          </Col>
        </Row>
      </div>

      <div className="footer">
        <Button label="Find out more" type="link" shape="round" size="large" />
        <div className="button-group">
          <Button label="Reset" type="link" shape="round" size="large" />
          <Button label="Search" type="primary" shape="round" size="large" />
        </div>
      </div>
    </form>
  );
}
