import { useMemo } from "react";
import { files, folders } from "@/../public/data/folder";
import { useSelector } from "react-redux";
import { selectSort } from "@/store/sort/sortSlice";
import { SortModeEnum, SortOrderEnum } from "@/enums/sort";

export function useSort() {
  const sort = useSelector(selectSort);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const compareField = (a: any, b: any) => {
    const { order, field } = sort;
    if (order === SortOrderEnum.Ascend) {
      return a[field].localeCompare(b[field]);
    }
    return b[field].localeCompare(a[field]);
  };

  const data = useMemo(() => {
    if (sort.mode === SortModeEnum.Top) {
      folders.sort((a, b) => compareField(a, b));
      files.sort((a, b) => compareField(a, b));
      return { folders: [...folders], files: [...files] };
    }

    const combineData = [...folders, ...files].sort((a, b) =>
      compareField(a, b)
    );
    return { folders: [...combineData], files: [] };
  }, [compareField, sort.mode]);

  return [sort, data] as const;
}
