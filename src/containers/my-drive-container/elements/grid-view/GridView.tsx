import { MenuProps, Row } from "antd";
import { GridItem } from "@/components/grid-item";
import { MoreOutlined } from "@ant-design/icons";
import { Button, Dropdown, Select } from "@/components/form";
import { useMemo } from "react";
import { useSort } from "@/hook";
import { setSort } from "@/store/sort/sortSlice";
import { useDispatch } from "react-redux";
import { SortFieldEnum, SortModeEnum, SortOrderEnum } from "@/enums/sort";
import { SortIcon } from "../sort-icon";
import classNames from "classnames";

type Props = {
  showDetail?: boolean;
};

export function GridView({ showDetail }: Props) {
  const [sort, data] = useSort();
  const dispatch = useDispatch();

  const { order, field, mode } = sort;

  const sortOptions = useMemo(
    () => [
      {
        label: "Sorted by",
        options: [
          { label: "Name", value: SortFieldEnum.Name },
          { label: "Last modified", value: SortFieldEnum.LastModified },
        ],
      },
    ],
    []
  );

  const items: MenuProps["items"] = [
    {
      key: "1",
      type: "group",
      label: "Show directory",
      children: [
        {
          key: SortModeEnum.Top,
          label: "On top of",
        },
        {
          key: SortModeEnum.Combine,
          label: "Combine with file",
        },
      ],
    },
  ];

  const onChange = (value: string) => {
    dispatch(setSort({ ...sort, field: value }));
  };

  const onClick = () => {
    if (order === SortOrderEnum.Ascend) {
      dispatch(setSort({ ...sort, order: SortOrderEnum.Descend }));
    } else {
      dispatch(setSort({ ...sort, order: SortOrderEnum.Ascend }));
    }
  };

  return (
    <div className="grid-view">
      <div className="sort">
        <Button icon={<SortIcon sortOrder={order} />} onClick={onClick} />
        <Select
          defaultValue={field}
          options={sortOptions}
          placement="bottomRight"
          bordered={false}
          onChange={onChange}
        />
        <Dropdown
          placement="bottomRight"
          trigger={["click"]}
          menu={{
            items,
            selectable: true,
            defaultSelectedKeys: [mode],
            onSelect: ({ key }: any) => {
              dispatch(setSort({ ...sort, mode: key }));
            },
          }}
        >
          <Button icon={<MoreOutlined />} />
        </Dropdown>
      </div>
      <div className="section">
        <p>{mode === SortModeEnum.Top ? "Folder" : "All items"}</p>
        <Row gutter={[16, 16]}>
          {data?.folders.map((folder) => (
            <GridItem
              key={folder.id}
              type={folder.type}
              name={folder.name}
              img={folder.img}
              showDetail={showDetail}
              className={classNames({
                folder: mode === SortModeEnum.Combine,
              })}
            />
          ))}
        </Row>
      </div>
      {mode === SortModeEnum.Top && (
        <div className="section">
          <p>File</p>
          <Row gutter={[16, 16]}>
            {data?.files.map((file) => (
              <GridItem
                key={file.id}
                type={file.type}
                name={file.name}
                img={file.img}
                showDetail={showDetail}
              />
            ))}
          </Row>
        </div>
      )}
    </div>
  );
}
