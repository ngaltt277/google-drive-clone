import { Button as AntButton } from "antd";

type Props = {
  type?: "primary" | "default" | "link" | "text";
  size?: "large" | "small";
  disabled?: boolean;
  loading?: boolean;
  label?: string;
  icon?: any;
  shape?: "circle" | "round";
  className?: string;
  buttonType?: "submit" | "button";
  onClick?: () => void;
};

export function Button({
  label,
  icon,
  type,
  size,
  shape,
  disabled,
  loading,
  className,
  buttonType,
  onClick,
}: Props) {
  return (
    <AntButton
      icon={icon}
      type={type}
      size={size}
      shape={shape}
      disabled={disabled}
      loading={loading}
      className={className}
      htmlType={buttonType}
      onClick={onClick}
    >
      {label}
    </AntButton>
  );
}
