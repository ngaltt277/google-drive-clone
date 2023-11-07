import { Header } from "@/components/header";
import { LeftSidebar } from "@/containers/my-drive-container/elements/sidebar/left-sidebar";
import { RightSidebar } from "./elements/sidebar/right-sidebar";
import { Content } from "./elements/content";

export function MyDriveContainer() {
  return (
    <div className="container">
      <Header />
      <main>
        <LeftSidebar />
        <Content />
        <RightSidebar />
      </main>
    </div>
  );
}
