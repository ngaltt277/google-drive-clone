import { useMemo } from "react";
import { files, folders } from "@/../public/data/folder";
import { useDispatch, useSelector } from "react-redux";
import { selectSort } from "@/store/sort/sortSlice";

export function useSort() {
  const sort = useSelector(selectSort);
  const dispatch = useDispatch();

  const data = useMemo(() => {
    const { order, field } = sort;
    if (order === "ascend") {
      folders.sort((a: any, b: any) => a[field]?.localeCompare(b[field]));
      files.sort((a: any, b: any) => a[field]?.localeCompare(b[field]));
    } else {
      folders.sort((a: any, b: any) => b[field]?.localeCompare(a[field]));
      files.sort((a: any, b: any) => b[field]?.localeCompare(a[field]));
    }
    return { folders: [...folders], files: [...files] };
  }, [sort]);

  return [sort, dispatch, data] as const;
}
