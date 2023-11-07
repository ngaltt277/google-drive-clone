import { Input, Select } from "@/components/form";
import { ModalLayout } from "@/components/modal/modal";
import { Checkbox, Col, Row } from "antd";

type Props = {
  show: boolean;
  onClose?: () => void;
};

export default function SearchModal({ show, onClose }: Props) {
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
    <ModalLayout open={show} width={700} onClose={onClose}>
      <Row className="item">
        <Col span={6}>
          <label>Type</label>
        </Col>
        <Col span={9}>
          <Select defaultValue="Any" fullWidth />
        </Col>
      </Row>
      <Row className="item">
        <Col span={6}>
          <label>Owner</label>
        </Col>
        <Col span={9}>
          <Select defaultValue="Anyone" fullWidth />
        </Col>
      </Row>
      <Row className="item">
        <Col span={6}>
          <label>There are words</label>
        </Col>
        <Col span={18}>
          <Input placeholder="Enter words found in the file" />
        </Col>
      </Row>
      <Row className="item">
        <Col span={6}>
          <label>Section Name</label>
        </Col>
        <Col span={18}>
          <Input placeholder="Enter a phrase that matches part of the file name" />
        </Col>
      </Row>
      <Row className="item">
        <Col span={6}>
          <label>There are words</label>
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
          <label>Modification date</label>
        </Col>
        <Col span={9}>
          <Select defaultValue="Anytime" fullWidth />
        </Col>
      </Row>
      <Row className="item">
        <Col span={6}>
          <label>Request approval</label>
        </Col>
        <Col flex="auto">
          <Checkbox.Group options={approvalOptions} />
        </Col>
      </Row>
      <Row className="item">
        <Col span={6}>
          <label>Shared with</label>
        </Col>
        <Col span={18}>
          <Input placeholder="Enter name or email address..." />
        </Col>
      </Row>
      <Row className="item">
        <Col span={6}>
          <label>Items to track</label>
        </Col>
        <Col span={9}>
          <Select defaultValue="-" fullWidth />
        </Col>
      </Row>
    </ModalLayout>
  );
}
