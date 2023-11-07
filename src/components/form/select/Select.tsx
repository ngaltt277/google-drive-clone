import { ReactNode } from "react";
import { Select as AntSelect } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
import classNames from "classnames";

type Option = {
  label?: string;
  options?: { value: string; label: string }[];
};

type Props = {
  defaultValue?: string;
  onChange?: (value: string) => void;
  options?: Option[];
  disabled?: boolean;
  loading?: boolean;
  allowClear?: boolean;
  size?: "large" | "middle" | "small";
  mode?: "multiple" | "tags";
  children?: ReactNode;
  bordered?: boolean;
  placement?: "bottomLeft" | "bottomRight" | "topLeft" | "topRight";
  autoFocus?: boolean;
  suffixIcon?: ReactNode;
  popupMatchSelectWidth?: boolean;
  fullWidth?: boolean;
};

export function Select({
  defaultValue,
  onChange,
  options,
  disabled,
  loading,
  allowClear,
  size,
  mode,
  children,
  bordered,
  placement,
  autoFocus,
  suffixIcon = <CaretDownOutlined />,
  popupMatchSelectWidth = false,
  fullWidth = false,
}: Props) {
  return (
    <AntSelect
      defaultValue={defaultValue}
      onChange={onChange}
      options={options}
      disabled={disabled}
      loading={loading}
      allowClear={allowClear}
      size={size}
      mode={mode}
      bordered={bordered}
      placement={placement}
      autoFocus={autoFocus}
      suffixIcon={suffixIcon}
      className={classNames({ "full-width": fullWidth })}
      popupMatchSelectWidth={popupMatchSelectWidth}
    >
      {children}
    </AntSelect>
  );
}
