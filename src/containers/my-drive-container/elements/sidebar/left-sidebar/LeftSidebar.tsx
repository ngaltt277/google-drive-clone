import { useMemo } from "react";
import {
  CloudServerOutlined,
  LaptopOutlined,
  TeamOutlined,
  ClockCircleOutlined,
  StarOutlined,
  ExclamationCircleOutlined,
  DeleteOutlined,
  CloudOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { LeftSidebarItem } from "./LeftSidebarItem";
import { Button } from "@/components/form/button";
import { Progress } from "antd";

export function LeftSidebar() {
  const sidebarItems = useMemo(
    () => [
      {
        name: "My drive",
        icon: <CloudServerOutlined />,
        active: true,
        items: [],
      },
      {
        name: "Computer",
        icon: <LaptopOutlined />,
        items: [],
      },
      {
        name: "Shared with me",
        icon: <TeamOutlined />,
      },
      {
        name: "Recently",
        icon: <ClockCircleOutlined />,
      },
      {
        name: "Starred",
        icon: <StarOutlined />,
      },
      {
        name: "Spam content",
        icon: <ExclamationCircleOutlined />,
      },
      {
        name: "Trash can",
        icon: <DeleteOutlined />,
      },
      {
        name: "Memory",
        icon: <CloudOutlined />,
      },
    ],
    []
  );

  return (
    <div className="left-sidebar">
      <Button label="New" icon={<PlusOutlined />} className="new" />

      <div className="menu">
        {sidebarItems.map((item) => (
          <LeftSidebarItem key={item.name} {...item} />
        ))}
        <div className="storage">
          <div className="amount">
            <Progress
              percent={50}
              showInfo={false}
              size="small"
              strokeColor="#0b57d0"
              strokeWidth={5}
            />
            <p>Used 9.29 GB out of 15 GB</p>
          </div>

          <Button label="Buy more storage" size="large" className="buy-more" />
        </div>
      </div>
    </div>
  );
}
