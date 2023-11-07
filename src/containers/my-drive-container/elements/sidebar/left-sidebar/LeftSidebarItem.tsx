import { CaretRightOutlined } from "@ant-design/icons";
import classNames from "classnames";
import { ReactNode } from "react";

type Props = {
  name?: string;
  icon?: ReactNode;
  active?: boolean;
  items?: never[];
};

export function LeftSidebarItem({ name, icon, active, items }: Props) {
  return (
    <div className={classNames("sidebar-item", { active })}>
      {items && <CaretRightOutlined style={{ fontSize: "8px" }} />}
      <div className={classNames("main-icon", {"no-item": !items})}>{icon}</div>
      <p className="name">{name}</p>
    </div>
  );
}
