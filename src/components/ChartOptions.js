import SelectionIcon from "./assets/SelectionIcon";

const ChartOptions = (props) => {

  return (
    <div className="flex items-center my-2 mx-10">
      <SelectionIcon highlight={props.active} />
      <div className={"py-2 mx-8 w-[447px] " + (props.id !== "4" && "border-b border-[#969696]")}>
        <p className=" text-sm text-white text-left font-bold leading-relaxed">
          {props.title}
          <br />
          <span className="font-normal">
            {props.description}
          </span>
        </p>
      </div>
    </div>
  );
};

export default ChartOptions;
