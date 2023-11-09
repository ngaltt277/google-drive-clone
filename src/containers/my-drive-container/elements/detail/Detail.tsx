import { Button } from "@/components/form";
import { CloseOutlined, CloudServerOutlined } from "@ant-design/icons";
import { Menu, MenuProps } from "antd";
import { useState } from "react";

type Props = {
  onHideDetail?: () => void;
};

enum DetailOptionEnum {
  Detail = "detail",
  Work = "work",
}

export function Detail({ onHideDetail }: Props) {
  const items: MenuProps["items"] = [
    {
      label: "Detail",
      key: DetailOptionEnum.Detail,
    },
    {
      label: "Work",
      key: DetailOptionEnum.Work,
    },
  ];

  const [current, setCurrent] = useState(DetailOptionEnum.Detail);

  const onClick: MenuProps["onClick"] = (e: any) => {
    setCurrent(e.key);
  };

  return (
    <div className="detail">
      <div className="detail-header">
        <p className="title">
          <CloudServerOutlined />
          <span>My drive</span>
        </p>
        <div className="close-btn">
          <Button
            icon={<CloseOutlined />}
            size="large"
            onClick={onHideDetail}
          />
        </div>
      </div>
      <div className="detail-menu">
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
        />
      </div>
      <div className="detail-content"></div>
    </div>
  );
}
