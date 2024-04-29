interface MainProps {
  Quote: string;
  Disclaimer: string;
  Content: string;
}
export default function Main(props: MainProps) {
  return (
    <div className="w-screen min-h-screen bg-[#1F1F1F] px-16 py-10">
      <div className="text-xl text-white flex flex-col gap-10 ">
        <div className="">{props.Quote}</div>
        <div className="">{props.Disclaimer}</div>
        <div className="">{props.Content}</div>
      </div>
    </div>
  );
}

// export default Main
