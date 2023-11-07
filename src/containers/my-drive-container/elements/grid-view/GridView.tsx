import { Col, Row } from "antd";
import { GridItem } from "@/components/grid-item";
import {
  ArrowUpOutlined,
  MoreOutlined,
  ArrowDownOutlined,
} from "@ant-design/icons";
import { Button, Select } from "@/components/form";
import { useMemo } from "react";
import { useSort } from "@/hook";
import { setSort } from "@/store/sort/sortSlice";

export function GridView() {
  const [{ order, field }, dispatch, data] = useSort();

  const sortOptions = useMemo(
    () => [
      {
        label: "Sorted by",
        options: [
          { label: "Name", value: "name" },
          { label: "Last modified", value: "lastModified" },
        ],
      },
    ],
    []
  );

  const onChange = (value: string) => {
    dispatch(setSort({ order, field: value }));
  };

  const onClick = () => {
    if (order === "ascend") {
      dispatch(setSort({ order: "descend", field }));
    } else {
      dispatch(setSort({ order: "ascend", field }));
    }
  };

  return (
    <div className="grid-view">
      <div className="sort">
        <Button
          icon={
            order === "ascend" ? <ArrowUpOutlined /> : <ArrowDownOutlined />
          }
          shape="circle"
          type="text"
          onClick={onClick}
        />
        <Select
          defaultValue={field}
          options={sortOptions}
          placement="bottomRight"
          bordered={false}
          onChange={onChange}
        />
        <Button icon={<MoreOutlined />} type="text" shape="circle" />
      </div>
      <div className="section">
        <p>Folder</p>
        <Row gutter={[16, 16]}>
          {data.folders.map((folder) => (
            <Col key={folder.id} lg={6} md={8} sm={12} xs={24}>
              <GridItem name={folder.name} hasOptions />
            </Col>
          ))}
        </Row>
      </div>
      <div className="section">
        <p>File</p>
        <Row gutter={[16, 16]}>
          {data.files.map((file) => (
            <Col key={file.id} lg={6} md={8} sm={12} xs={24}>
              <GridItem
                type={file.type}
                name={file.name}
                img={file.img}
                hasOptions
              />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
