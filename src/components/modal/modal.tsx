import { Modal } from "antd";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  title?: string;
  open?: boolean;
  onClose?: () => void;
  onSubmit?: () => void;
  footer?: ReactNode;
  width?: number;
  zIndex?: number;
};

export function ModalLayout({
  children,
  title,
  open,
  onClose,
  onSubmit,
  footer,
  width,
  zIndex,
}: Props) {
  return (
    <Modal
      title={title}
      onCancel={onClose}
      onOk={onSubmit}
      footer={footer}
      width={width}
      zIndex={zIndex}
      open={open}
    >
      {children}
    </Modal>
  );
}
