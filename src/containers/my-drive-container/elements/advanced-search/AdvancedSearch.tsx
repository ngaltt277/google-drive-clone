import { Input, Select } from "@/components/form";
import { Checkbox, Col, Row } from "antd";

export function AdvancedSearch() {
  const locationOptions = [
    { label: "In the trash", value: "trash" },
    { label: "Starred", value: "starred" },
    { label: "Encrypted", value: "encrypted" },
  ];

  const approvalOptions = [
    { label: "Waiting for my approval", value: "waiting" },
    { label: "Because I requested it", value: "requested" },
  ];

  return (
    <div className="advanced-search">
      <Row className="item">
        <Col span={6}>
          <label className="label">Type</label>
        </Col>
        <Col span={9}>
          <Select defaultValue="Any" fullWidth />
        </Col>
      </Row>
      <Row className="item">
        <Col span={6}>
          <label className="label">Owner</label>
        </Col>
        <Col span={9}>
          <Select defaultValue="Anyone" fullWidth />
        </Col>
      </Row>
      <Row className="item">
        <Col span={6}>
          <label className="label">There are words</label>
        </Col>
        <Col span={18}>
          <Input placeholder="Enter words found in the file" />
        </Col>
      </Row>
      <Row className="item">
        <Col span={6}>
          <label className="label">Section Name</label>
        </Col>
        <Col span={18}>
          <Input placeholder="Enter a phrase that matches part of the file name" />
        </Col>
      </Row>
      <Row className="item">
        <Col span={6}>
          <label className="label">There are words</label>
        </Col>
        <Col span={9}>
          <Select defaultValue="Everywhere" fullWidth />
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
          <Select defaultValue="Anytime" fullWidth />
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
          <Input placeholder="Enter name or email address..." />
        </Col>
      </Row>
      <Row className="item">
        <Col span={6}>
          <label className="label">Items to track</label>
        </Col>
        <Col span={9}>
          <Select defaultValue="-" fullWidth />
        </Col>
      </Row>
    </div>
  );
}
