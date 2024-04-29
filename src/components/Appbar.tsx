interface AppbarProps {
  title: string;
}

function Appbar(props: AppbarProps) {
  return (
    <div className="w-screen p-4 text-white bg-[#1A1A1A]">
      <h1 className="text-4xl text-center font-medium"> {props.title} </h1>
    </div>
  );
}

export default Appbar;
