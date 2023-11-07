import { GridItem } from "@/components/grid-item";
import { Button, Select } from "@/components/form";
import {
  TableOutlined,
  InfoCircleOutlined,
  BarsOutlined,
} from "@ant-design/icons";
import { files } from "@/../public/data/folder";
import { Col, Row } from "antd";
import { GridView } from "../grid-view";
import { useState } from "react";
import { ListView } from "../list-view";

export function Content() {
  const [layout, setLayout] = useState("list");

  const onToggleLayout = () => {
    setLayout(layout === "list" ? "grid" : "list");
  };

  const renderLayout = () => {
    if (layout === "grid") {
      return <GridView />;
    }

    return <ListView />;
  };

  return (
    <div className="content">
      <div className="content-header">
        <div className="title">
          <p className="broadcrumb">My drive</p>
          <div className="layout-details">
            <Button
              icon={layout === "list" ? <TableOutlined /> : <BarsOutlined />}
              size="large"
              shape="circle"
              type="text"
              onClick={onToggleLayout}
            />
            <Button
              icon={<InfoCircleOutlined />}
              size="large"
              shape="circle"
              type="text"
            />
          </div>
        </div>
        <div className="filter">
          <Select defaultValue="Type" />
          <Select defaultValue="People" />
          <Select defaultValue="Last modified" />
        </div>
      </div>
      <div className="content-body">
        <div className="section">
          <p>Recommended</p>
          <div className="recommended-list">
            <Row gutter={[16, 16]}>
              {files.slice(0, 4).map((file) => (
                <Col key={file.id} lg={6} md={8} sm={12} xs={24}>
                  <GridItem
                    type={file.type}
                    name={file.name}
                    img={file.img}
                    hasOptions
                    recommended
                  />
                </Col>
              ))}
            </Row>
          </div>
        </div>
        {renderLayout()}
      </div>
    </div>
  );
}
