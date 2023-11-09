import { Header } from "@/components/header";
import { RightSidebar, LeftSidebar, Content, Detail } from "./elements";
import { useState } from "react";

export function MyDriveContainer() {
  const [showDetail, setShowDetail] = useState(false);

  const onToggleShowDetail = () => {
    setShowDetail(!showDetail);
  };

  return (
    <div className="container">
      <Header />
      <main>
        <LeftSidebar />
        <Content onToggleShowDetail={onToggleShowDetail} showDetail={showDetail} />
        {showDetail && <Detail onHideDetail={onToggleShowDetail} />}
        <RightSidebar />
      </main>
    </div>
  );
}
