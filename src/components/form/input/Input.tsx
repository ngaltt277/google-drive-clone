import { Input as AntInput } from "antd";
import { ReactNode } from "react";

type Props = {
  size?: "small" | "large";
  placeholder?: string;
  defaultValue?: string;
  disabled?: boolean;
  bordered?: boolean;
  addonAfter?: ReactNode;
  className?: string;
  addonBefore?: ReactNode;
  prefix?: ReactNode;
  suffix?: ReactNode;
  value?: string;
  allowClear?: boolean;
};

export function Input({
  size,
  placeholder,
  defaultValue,
  disabled,
  bordered,
  addonAfter,
  addonBefore,
  className,
  prefix,
  suffix,
  value,
  allowClear
}: Props) {
  return (
    <AntInput
      size={size}
      placeholder={placeholder}
      defaultValue={defaultValue}
      disabled={disabled}
      bordered={bordered}
      addonAfter={addonAfter}
      addonBefore={addonBefore}
      prefix={prefix}
      suffix={suffix}
      value={value}
      className={className}
      allowClear={allowClear}
    />
  );
}
