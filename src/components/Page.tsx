import { useEffect } from "react";
import TextareaAutosize from "react-textarea-autosize";

interface pageObject {
  Title: string;
  Quote: string;
  Disclaimer: string;
  Content: string;
}

interface IPageProps {
  pageState: pageObject;
  setPage: React.Dispatch<React.SetStateAction<pageObject>>;
}

export const Page = ({ pageState, setPage }: IPageProps) => {
  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setPage((oldData) => ({ ...oldData, [name]: value }));
  }

  useEffect(() => {
    localStorage.setItem("page", JSON.stringify(pageState));
  }, [pageState]);

  return (
    <div className="w-screen overflow-x-hidden flex flex-col py-5">
      <div className="w-full text-white bg-[#1A1A1A]">
        <TextareaAutosize
          defaultValue={pageState.Title}
          placeholder="edit title"
          maxLength={30}
          name="Title"
          className="w-full sm:h-20 sm:py-2 font-medium resize-none md:text-4xl sm:text-2xl text-xl bg-[#1A1A1A] text-center p-4 rounded-3xl focus:outline-none"
          onChange={handleChange}
          spellCheck="false"
        />
      </div>

      <div className="w-full text-white bg-[#1A1A1A] sm:px-10 px-5">
        <form className="w-full flex flex-col sm:gap-7 place-items-center sm:text-base text-sm">
          <TextareaAutosize
            defaultValue={pageState.Quote}
            name="Quote"
            placeholder="edit quote"
            className="resize-none p-4 w-[90%] bg-[#1A1A1A] md:text-2xl sm:text-xl text-base focus:outline-none text-center"
            onChange={handleChange}
            spellCheck="false"
          />
          <TextareaAutosize
            defaultValue={pageState.Disclaimer}
            name="Disclaimer"
            placeholder="edit disclaimer"
            className="resize-none p-4 w-[90%] bg-[#1A1A1A] focus:outline-none"
            onChange={handleChange}
            spellCheck="false"
          />
          <TextareaAutosize
            defaultValue={pageState.Content}
            name="Content"
            placeholder="edit content"
            className="resize-none p-4 w-[90%] bg-[#1A1A1A] focus:outline-none"
            onChange={handleChange}
            spellCheck="false"
          />
        </form>
      </div>
    </div>
  );
};
