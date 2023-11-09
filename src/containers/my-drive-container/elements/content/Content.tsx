import { GridItem } from "@/components/grid-item";
import { Button, Select } from "@/components/form";
import {
  TableOutlined,
  InfoCircleOutlined,
  BarsOutlined,
} from "@ant-design/icons";
import { files } from "@/../public/data/folder";
import { Row } from "antd";
import { GridView, ListView } from "../";
import { useState } from "react";
import { LayoutEnum } from "@/enums/layout";

type Props = {
  onToggleShowDetail?: () => void;
  showDetail?: boolean;
};

export function Content({ onToggleShowDetail, showDetail }: Props) {
  const [layout, setLayout] = useState(LayoutEnum.List);
  const isListLayout = layout === LayoutEnum.List;

  const onToggleLayout = () => {
    setLayout(isListLayout ? LayoutEnum.Grid : LayoutEnum.List);
  };

  const renderLayout = () => {
    if (isListLayout) {
      return <ListView />;
    }
    return <GridView showDetail={showDetail} />;
  };

  const renderLayoutIcon = () => {
    if (isListLayout) {
      return <TableOutlined />;
    }
    return <BarsOutlined />;
  };

  return (
    <div className="content">
      <div className="content-header">
        <div className="title">
          <p className="breadcrumb">My drive</p>
          <div className="layout-details">
            <Button
              icon={renderLayoutIcon()}
              size="large"
              onClick={onToggleLayout}
            />
            <Button
              icon={<InfoCircleOutlined />}
              size="large"
              onClick={onToggleShowDetail}
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
                <GridItem
                  key={file.id}
                  type={file.type}
                  name={file.name}
                  img={file.img}
                  recommended
                  showDetail={showDetail}
                />
              ))}
            </Row>
          </div>
        </div>
        {renderLayout()}
      </div>
    </div>
  );
}
