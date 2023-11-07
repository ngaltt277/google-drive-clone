import RESOURCES from "@/config/resources";
import Image from "next/image";
import { Button } from "../form";
import { MoreOutlined, FolderFilled } from "@ant-design/icons";

type Props = {
  hasOptions?: boolean;
  name?: string;
  type?: string;
  img?: string;
  recommended?: boolean;
};

export function GridItem({
  hasOptions,
  name,
  type,
  img,
  recommended = false,
}: Props) {
  
  const renderFileIcon = () => {
    if (type) {
      return <Image src={RESOURCES[type]} alt="file icon" />;
    }
    return <FolderFilled style={{ fontSize: "20px" }} />;
  }

  return (
    <div className="grid-item">
      <div className="item-header">
        <div className="title">
          {renderFileIcon()}
          <p className="file-name">{name}</p>
        </div>
        {hasOptions && (
          <Button
            icon={<MoreOutlined />}
            size="large"
            type="text"
            shape="circle"
          />
        )}
      </div>
      {img && (
        <div className="img-container">
          <Image
            src={RESOURCES["IMAGEFiLE"]}
            alt="file image"
            className="img"
          />
        </div>
      )}
      {recommended && (
        <div className="caption">
          <p>You opened last week</p>
        </div>
      )}
    </div>
  );
}
