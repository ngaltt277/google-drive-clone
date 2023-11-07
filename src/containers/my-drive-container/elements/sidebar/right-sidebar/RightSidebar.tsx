import { useMemo, useState } from "react";
import {
  CalendarTwoTone,
  BulbTwoTone,
  SafetyCertificateTwoTone,
  SmileTwoTone,
  PlusOutlined,
  RightOutlined,
  LeftOutlined,
} from "@ant-design/icons";
import { Button } from "@/components/form/button";
import { Divider } from "antd";
import classNames from "classnames";

export function RightSidebar() {
  const [show, setShow] = useState(true);

  const appList = useMemo(
    () => [
      {
        name: "Calendar",
        icon: <CalendarTwoTone />,
      },
      {
        name: "Keep",
        icon: <BulbTwoTone />,
      },
      {
        name: "Task",
        icon: <SafetyCertificateTwoTone />,
      },
      {
        name: "Phonebooks",
        icon: <SmileTwoTone />,
      },
    ],
    []
  );

  const onToggle = () => {
    setShow(!show);
  };

  const renderShowHideButton = () => {
    if (show) {
      return (
        <Button
          size="large"
          icon={<RightOutlined style={{ fontSize: "12px" }} />}
          type="text"
          shape="circle"
          onClick={onToggle}
          className="hide-btn"
        />
      );
    }
    return (
      <Button
        size="large"
        icon={<LeftOutlined style={{ fontSize: "12px" }} />}
        type="text"
        shape="circle"
        onClick={onToggle}
        className="show-btn"
      />
    );
  };

  return (
    <div className="right-sidebar">
      <div className={classNames("app-list", { hide: !show })}>
        {appList.map((app) => (
          <Button
            key={app.name}
            size="large"
            icon={app.icon}
            type="text"
            shape="circle"
          />
        ))}
        <Divider />
        <Button
          size="large"
          icon={<PlusOutlined />}
          type="text"
          shape="circle"
        />
      </div>
      {renderShowHideButton()}
    </div>
  );
}
