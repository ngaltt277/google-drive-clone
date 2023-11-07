import { Dropdown as AntDropdown } from "antd";
import { ReactNode } from "react";

type Props = {
  menu?: any;
  arrow?: boolean;
  placement?:
    | "bottom"
    | "bottomLeft"
    | "bottomRight"
    | "top"
    | "topRight"
    | "topLeft";
  trigger?: ["click" | "hover"];
  children?: ReactNode;
};

export function Dropdown({ menu, arrow, placement, trigger, children }: Props) {
  return (
    <AntDropdown
      menu={ menu }
      arrow={arrow}
      placement={placement}
      trigger={trigger}
    >
      {children}
    </AntDropdown>
  );
}
