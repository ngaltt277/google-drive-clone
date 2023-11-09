import { Button } from "@/components/form";
import {
  ExpandAltOutlined,
  DownloadOutlined,
  EditOutlined,
  CopyOutlined,
  UserAddOutlined,
  FolderOpenOutlined,
  InfoCircleOutlined,
  DeleteOutlined,
  GlobalOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import { Dropdown, MenuProps } from "antd";

export function OperatorsDropdown() {
  type MenuItem = Required<MenuProps>["items"][number];

  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: "group"
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      type,
    } as MenuItem;
  }

  const items: MenuProps["items"] = [
    getItem("Open with", "1", <ExpandAltOutlined />, []),
    {
      type: "divider",
    },
    getItem("Download", "2", <DownloadOutlined />),
    getItem("Change name", "3", <EditOutlined />),
    getItem("Create a copy", "4", <CopyOutlined />),
    {
      type: "divider",
    },
    getItem("Share", "5", <UserAddOutlined />, [
      getItem("Share", "5-1", <UserAddOutlined />),
      getItem("Copy the link", "5-2", <GlobalOutlined />),
    ]),
    getItem("Arrange", "6", <FolderOpenOutlined />),
    getItem("File information", "7", <InfoCircleOutlined />),
    {
      type: "divider",
    },
    getItem("Move to trash", "8", <DeleteOutlined />),
  ];

  return (
    <Dropdown
      placement="topRight"
      trigger={["click"]}
      menu={{
        items,
        mode: "vertical",
      }}
    >
      <Button icon={<MoreOutlined />} />
    </Dropdown>
  );
}
