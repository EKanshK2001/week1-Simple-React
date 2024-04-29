import { useState } from "react";
import EditPage from "../components/EditPage";

function Page() {

  interface pageObject {
    Title: string,
    Quote: string,
    Disclaimer: string,
    Content: string,
  }

  const [page, setPage] = useState<pageObject>({
    Title: "this is title",
    Quote: "this is quote",
    Disclaimer: "this is disclaimer",
    Content: "this is content",
  });

  return (
    <div className="min-h-screen bg-[#1A1A1A] overflow-x-hidden">
      <EditPage />
    </div>
  );
}

export default Page;
