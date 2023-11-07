import type { ColumnsType, TableProps } from "antd/es/table";
import { Button, Dropdown } from "@/components/form";
import { MoreOutlined } from "@ant-design/icons";
import { Table } from "antd";
import Image from "next/image";
import RESOURCES from "@/config/resources";
import {
  ArrowUpOutlined,
  ArrowDownOutlined,
  FolderFilled,
} from "@ant-design/icons";
import { useMemo } from "react";
import { useSort } from "@/hook";
import { setSort } from "@/store/sort/sortSlice";

type File = {
  id: string;
  type: string;
  name: string;
  owner: string;
  lastModified: string;
  fileSize: string;
  img: string;
};

export function ListView() {
  const [{ order, field }, dispatch, data] = useSort();

  const mergedData = useMemo(() => [...data.folders, ...data.files], [data]);

  const renderFileIcon = (record: File) => {
    if (record.type === "folder") {
      return <FolderFilled style={{ fontSize: "20px" }} />;
    }
    return <Image src={RESOURCES[record.type]} alt="file icon" />;
  };

  const renderSortIcon = () => {
    if (order === "ascend") {
      return <ArrowUpOutlined />;
    }
    return <ArrowDownOutlined />;
  };

  const columns: ColumnsType<File> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (_, record) => (
        <div className="title">
          {renderFileIcon(record)}
          <p className="file-name">{record.name}</p>
        </div>
      ),
      width: 560,
      sorter: () => 0,
      sortDirections: ["ascend", "descend", "ascend"],
      sortIcon: renderSortIcon,
    },
    {
      title: "Owner",
      dataIndex: "owner",
      key: "owner",
      render: (owner) => (
        <div className="title">
          <p className="file-name">{owner}</p>
        </div>
      ),
      width: 150,
    },
    {
      title: "Last modifiled",
      dataIndex: "lastModified",
      key: "lastModified",
      sorter: () => 0,
      sortIcon: renderSortIcon,
      sortDirections: ["ascend", "descend", "ascend"],
    },
    {
      title: "File Size",
      dataIndex: "fileSize",
      key: "fileSize",
      width: 100,
    },
    {
      title: (
        <Dropdown>
          <Button icon={<MoreOutlined />} type="text" shape="circle" />
        </Dropdown>
      ),
      key: "action",
      render: () => (
        <Button icon={<MoreOutlined />} type="text" shape="circle" />
      ),
    },
  ];

  const onChange: TableProps<File>["onChange"] = (_, __, sorter: any) => {
    dispatch(setSort({ order: sorter.order, field: sorter.field }));
  };

  return (
    <Table
      columns={columns}
      dataSource={mergedData}
      size="small"
      pagination={false}
      onChange={onChange}
    />
  );
}
