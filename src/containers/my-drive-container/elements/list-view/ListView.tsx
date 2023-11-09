import type { ColumnsType, TableProps } from "antd/es/table";
import { Button, Dropdown } from "@/components/form";
import { MenuProps, Table } from "antd";
import Image from "next/image";
import RESOURCES from "@/config/resources";
import { FolderFilled, MoreOutlined } from "@ant-design/icons";
import { useMemo } from "react";
import { useSort } from "@/hook";
import { setSort } from "@/store/sort/sortSlice";
import { useDispatch } from "react-redux";
import { SortIcon } from "../sort-icon";
import { SortFieldEnum, SortModeEnum, SortOrderEnum } from "@/enums/sort";
import { OperatorsDropdown } from "../operators-dropdown";

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
  const [sort, data] = useSort();
  const dispatch = useDispatch();

  const { order, mode } = sort;

  const mergedData = useMemo(() => [...data.folders, ...data.files], [data]);

  const sortDirections = useMemo(
    () => [SortOrderEnum.Ascend, SortOrderEnum.Descend, SortOrderEnum.Ascend],
    []
  );

  const items: MenuProps["items"] = [
    {
      key: "1",
      type: "group",
      label: "Show directory",
      children: [
        {
          key: SortModeEnum.Top,
          label: "On top of",
        },
        {
          key: SortModeEnum.Combine,
          label: "Combine with file",
        },
      ],
    },
  ];

  const renderFileIcon = (record: File) => {
    if (record.type === "folder") {
      return <FolderFilled style={{ fontSize: "20px" }} />;
    }
    return <Image src={RESOURCES[record.type]} alt="file icon" />;
  };

  const columns: ColumnsType<File> = [
    {
      title: "Name",
      dataIndex: SortFieldEnum.Name,
      key: SortFieldEnum.Name,
      render: (_, record) => (
        <div className="title">
          {renderFileIcon(record)}
          <p className="file-name">{record.name}</p>
        </div>
      ),
      width: 560,
      sorter: () => 0,
      sortDirections: sortDirections,
      sortIcon: () => <SortIcon sortOrder={order} />,
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
    },
    {
      title: "Last modifiled",
      dataIndex: SortFieldEnum.LastModified,
      key: SortFieldEnum.LastModified,
      sorter: () => 0,
      sortIcon: () => <SortIcon sortOrder={order} />,
      sortDirections: sortDirections,
    },
    {
      title: "File Size",
      dataIndex: "fileSize",
      key: "fileSize",
    },
    {
      title: (
        <Dropdown
          placement="bottomRight"
          trigger={["click"]}
          menu={{
            items,
            selectable: true,
            defaultSelectedKeys: [mode],
            onSelect: ({ key }: any) => {
              dispatch(setSort({ ...sort, mode: key }));
            },
          }}
        >
          <Button icon={<MoreOutlined />} />
        </Dropdown>
      ),
      key: "action",
      render: () => <OperatorsDropdown />,
    },
  ];

  const onChange: TableProps<File>["onChange"] = (_, __, sorter: any) => {
    dispatch(setSort({ ...sort, order: sorter.order, field: sorter.field }));
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
