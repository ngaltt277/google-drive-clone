import Image from "next/image";
import {
  CheckCircleOutlined,
  QuestionCircleOutlined,
  SettingOutlined,
  MenuOutlined,
  SearchOutlined,
  SlidersOutlined,
} from "@ant-design/icons";
import { Button, Dropdown, Input } from "../form";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Switch, Avatar, Popover } from "antd";
import SearchModal from "@/modals/search-modal";
import RESOURCES from "@/config/resources";
import { AdvancedSearch } from "@/containers/my-drive-container/elements/advanced-search";

export function Header() {
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);

  const offlineItems = [
    {
      label: (
        <div className="offline">
          <p>Preview offline</p>
          <Switch size="small" />
        </div>
      ),
      key: "0",
    },
  ];

  const supportItems = [
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
  ];

  const settingItems = [
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
  ];

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
    []
  );

  const onShowAdvancedSearch = () => {
    setShowAdvancedSearch(true);
  };

  const onCloseAdvancedSearch = () => {
    setShowAdvancedSearch(false);
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
                  shape="circle"
                  type="text"
                  buttonType="submit"
                />
              }
              addonAfter={
                <Popover
                  content={<AdvancedSearch />}
                  title="Title"
                  trigger="click"
                  placement="bottomLeft"
                  arrow={false}
                >
                  <Button
                    icon={<SlidersOutlined />}
                    size="large"
                    shape="circle"
                    type="text"
                  />
                </Popover>
              }
            />
          </form>

          {/* <SearchModal
            show={showAdvancedSearch}
            onClose={onCloseAdvancedSearch}
          /> */}
        </div>
        <div className="dropdown-group">
          {dropdownsGroup.map((dropdown) => (
            <Dropdown
              placement="bottomRight"
              trigger={["click"]}
              menu={{ items: dropdown.items }}
              key={dropdown.name}
            >
              <Button
                icon={dropdown.icon}
                size="large"
                shape="circle"
                type="text"
              />
            </Dropdown>
          ))}
        </div>
      </div>
      <div className="app-account">
        <Button
          icon={<MenuOutlined />}
          size="large"
          shape="circle"
          type="text"
        />
        <Avatar size={32} className="avatar">
          N
        </Avatar>
      </div>
    </div>
  );
}
