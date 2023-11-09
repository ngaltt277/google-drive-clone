import RESOURCES from "@/config/resources";
import Image from "next/image";
import { FolderFilled } from "@ant-design/icons";
import { OperatorsDropdown } from "@/containers/my-drive-container/elements/operators-dropdown";
import { Col } from "antd";

type Props = {
  name?: string;
  type?: string;
  img?: string;
  recommended?: boolean;
  showDetail?: boolean;
  className?: string;
};

export function GridItem({
  name,
  type,
  img,
  recommended = false,
  showDetail,
  className,
}: Props) {
  const renderFileIcon = () => {
    if (img && type) {
      return <Image src={RESOURCES[type]} alt="file icon" />;
    }
    return <FolderFilled style={{ fontSize: "20px" }} />;
  };

  return (
    <Col
      lg={showDetail ? 8 : 6}
      md={showDetail ? 12 : 8}
      sm={showDetail ? 24 : 12}
      xs={24}
      className={className}
    >
      <div className="grid-item">
        <div className="item-header">
          <div className="title">
            {renderFileIcon()}
            <p className="file-name">{name}</p>
          </div>
          {!recommended && <OperatorsDropdown />}
        </div>

        <div className="img-container">
          {img && (
            <Image
              src={RESOURCES["IMAGEFiLE"]}
              alt="file image"
              className="img"
            />
          )}
        </div>
        {recommended && (
          <div className="caption">
            <p>You opened last week</p>
          </div>
        )}
      </div>
    </Col>
  );
}
