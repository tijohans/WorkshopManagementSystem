import SmallButton from "./SmallButton";

export default function ToolCard(props) {
  return (
    <div className=" bg-white flex flex-col justify-center items-center border-2 h-96 md:flex-row md:w-96 md:h-60">
        <div className="w-52 h-72 md:w-auto md:h-52">
        <img
          className="w-52 h-40 mt-1 object-cover rounded-2xl aspect-square"
          src={props.src}
          alt={props.alt}
        />
        <h1 className="text-3xl font-bold ml-3 w-52 md:w-28 md:text-xl md:hidden">
            {props.name}
          </h1>
        </div>
        <div className="md:max-w-max">
          <h1 className=" hidden text-3xl font-bold ml-3 w-52 md:w-28 md:text-2xl md:block">
            {props.name}
          </h1>
          <p className="ml-3 w-52 md:w-36 md:text-sm">{props.paragraph}</p>
          <div className="w-10">
            <SmallButton text="Book" toolId={props.id} />
          </div>
        </div>
      </div>
  );
}