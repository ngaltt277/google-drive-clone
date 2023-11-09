import { SortOrderEnum } from "@/enums/sort";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";

type Props = {
  sortOrder: string;
};

export function SortIcon({ sortOrder }: Props) {
  if (sortOrder === SortOrderEnum.Ascend) {
    return <ArrowUpOutlined />;
  }
  return <ArrowDownOutlined />;
}
