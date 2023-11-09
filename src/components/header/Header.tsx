import Image from "next/image";
import {
  CheckCircleOutlined,
  QuestionCircleOutlined,
  SettingOutlined,
  MenuOutlined,
  SearchOutlined,
  SlidersOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { Button, Dropdown, Input } from "../form";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Switch, Avatar, Popover } from "antd";
import RESOURCES from "@/config/resources";
import { AdvancedSearch } from "@/containers/my-drive-container/elements";

export function Header() {
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);

  const offlineItems = useMemo(
    () => [
      {
        label: (
          <div className="offline">
            <p>Preview offline</p>
            <Switch size="small" />
          </div>
        ),
        key: "0",
      },
    ],
    []
  );

  const supportItems = useMemo(
    () => [
      {
        label: "Help",
        key: "1",
      },
      {
        label: "Train",
        key: "2",
      },
      {
        label: "Update",
        key: "3",
      },
      {
        type: "divider",
      },
      {
        label: "Terms and policies",
        key: "4",
      },
      {
        type: "divider",
      },
      {
        label: "Send feedback to Google",
        key: "5",
      },
    ],
    []
  );

  const settingItems = useMemo(
    () => [
      {
        label: "Setting",
        key: "5",
      },
      {
        label: "Download Drive for computer",
        key: "6",
      },
      {
        label: "Shortcuts",
        key: "7",
      },
    ],
    []
  );

  const dropdownsGroup = useMemo(
    () => [
      {
        name: "offline",
        items: offlineItems,
        icon: <CheckCircleOutlined />,
      },
      {
        name: "support",
        items: supportItems,
        icon: <QuestionCircleOutlined />,
      },
      {
        name: "setting",
        items: settingItems,
        icon: <SettingOutlined />,
      },
    ],
    [offlineItems, settingItems, supportItems]
  );

  const onToggleAdvancedSearch = () => {
    setShowAdvancedSearch(!showAdvancedSearch);
  };

  return (
    <div className="header">
      <Link href="/my-drive" className="title">
        <div className="logo">
          <Image src={RESOURCES.LOGO} alt="logo" width={40} height={40} />
        </div>
        <span>Drive</span>
      </Link>
      <div className="utils">
        <div className="search">
          <form>
            <Input
              size="large"
              placeholder="Search in Drive"
              bordered={false}
              className="large-input"
              addonBefore={
                <Button
                  icon={<SearchOutlined />}
                  size="large"
                  buttonType="submit"
                />
              }
              addonAfter={
                <Popover
                  content={<AdvancedSearch />}
                  title={
                    <Button
                      icon={<CloseOutlined />}
                      size="large"
                      onClick={onToggleAdvancedSearch}
                    />
                  }
                  trigger="click"
                  placement="bottomLeft"
                  arrow={false}
                  open={showAdvancedSearch}
                  onOpenChange={onToggleAdvancedSearch}
                >
                  <Button icon={<SlidersOutlined />} size="large" />
                </Popover>
              }
            />
          </form>
        </div>
        <div className="dropdown-group">
          {dropdownsGroup.map((dropdown) => (
            <Dropdown
              placement="bottomRight"
              trigger={["click"]}
              menu={{ items: dropdown.items }}
              key={dropdown.name}
            >
              <Button icon={dropdown.icon} size="large" />
            </Dropdown>
          ))}
        </div>
      </div>
      <div className="app-account">
        <Button icon={<MenuOutlined />} size="large" />
        <Avatar size={32} className="avatar">
          N
        </Avatar>
      </div>
    </div>
  );
}
