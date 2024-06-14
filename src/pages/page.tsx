import { useState } from "react";
import EditPage from "../components/EditPage";

function Page() {
  interface pageObject {
    Title: string;
    Quote: string;
    Disclaimer: string;
    Content: string;
  }
  
  const [pageState, setPage] = useState<pageObject>(() => {
    const storedPage = localStorage.getItem("page");
    return storedPage
      ? JSON.parse(storedPage)
      : {
          Title: "",
          Quote: "",
          Disclaimer: "",
          Content: "",
        };
  });

  return (
    <div className="min-h-screen bg-[#1A1A1A] overflow-x-hidden">
      <EditPage pageState={pageState} setPage={setPage} />
    </div>
  );
}

export default Page;
