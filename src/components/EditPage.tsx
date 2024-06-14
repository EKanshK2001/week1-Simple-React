import { Page } from "./Page";

interface pageObject {
  Title: string;
  Quote: string;
  Disclaimer: string;
  Content: string;
}

interface IEditPageProps {
  pageState: pageObject;
  setPage: React.Dispatch<React.SetStateAction<pageObject>>;
}

export default function EditPage({ pageState, setPage }: IEditPageProps) {
  return <Page pageState={pageState} setPage={setPage} />;
}
