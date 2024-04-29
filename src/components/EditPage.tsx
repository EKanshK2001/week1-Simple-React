import { useEffect, useRef, useState } from "react";

interface pageObject {
  Title: string;
  Quote: string;
  Disclaimer: string;
  Content: string;
}

export default function EditPage() {
  const [pageState, editPageState] = useState<pageObject>(() => {
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

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    editPageState((oldData) => ({ ...oldData, [name]: value }));
  }

  const ref1 = useRef<HTMLTextAreaElement>(null);
  const ref2 = useRef<HTMLTextAreaElement>(null);

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (ref1.current) {
      ref1.current.style.height = "auto";
      ref1.current.style.height = `${Math.min(500, e.target.scrollHeight)}px`;
    }
    if (ref2.current) {
      ref2.current.style.height = "auto";
      ref2.current.style.height = `${Math.min(500, e.target.scrollHeight)}px`;
    }
  };

  useEffect(() => {
    ref1.current!.style.height = "auto";
    ref1.current!.style.height = `${ref1.current!.scrollHeight}px`;

    ref2.current!.style.height = "auto";
    ref2.current!.style.height = `${ref2.current!.scrollHeight}px`;
  }, []);

  useEffect(() => {
    localStorage.setItem("page", JSON.stringify(pageState));
  }, [pageState]);

  return (
    <div className="w-screen overflow-x-hidden flex flex-col">
      <div className="w-screen sm:py-7 py-3 text-white bg-[#1A1A1A]">
        <input
          maxLength={30}
          type="text"
          name="Title"
          placeholder="edit title"
          className="w-screen h-20 py-2 text-white bg-[#1A1A1A] text-4xl text-center font-medium rounded-3xl focus:outline-none"
          value={pageState.Title}
          onChange={handleChange}
        />
      </div>

      <div className="w-screen text-white bg-[#1A1A1A] sm:py-5 py-2 px-10">
        <form className=" border-white rounded-3xl flex flex-col gap-7 place-items-center">
          <input
            type="text"
            name="Quote"
            placeholder="edit quote"
            className="w-[90%] text-xl bg-[#1A1A1A] text-center p-4 rounded-3xl focus:outline-none"
            value={pageState.Quote}
            onChange={handleChange}
          />
          <textarea
            name="Disclaimer"
            placeholder="edit disclaimer"
            ref={ref1}
            rows={1}
            className="w-[90%] text-md bg-[#1A1A1A] p-4 rounded-3xl focus:outline-none resize-none"
            value={pageState.Disclaimer}
            onChange={handleChange}
            onInput={handleInput}
          />
          <textarea
            name="Content"
            placeholder="edit content"
            ref={ref2}
            rows={1}
            className="w-[90%] text-md bg-[#1A1A1A] p-4 rounded-3xl focus:outline-none resize-none"
            value={pageState.Content}
            onChange={handleChange}
            onInput={handleInput}
          ></textarea>
          {/* <div className="w-screen flex bg-[#1A1A1A] justify-end px-10 py-5">
          <button onClick={handleChange} className="w-50 text-white text-xl bg-green-800 rounded-lg px-5 py-2 font-semibold">
            save
          </button>
        </div> */}
        </form>
      </div>
    </div>
  );
}
