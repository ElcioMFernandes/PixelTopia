interface IconProps {
  title: string;
  image: string;
  color?: "b" | "w";
  onClick: () => void;
}

const Icon = (props: IconProps) => {
  return (
    <div
      className="flex flex-col justify-center items-center cursor-pointer border border-transparent hover:border-white border-dashed
    hover:brightness-75 select-none p-2"
      onClick={props.onClick}
    >
      <img src={props.image} alt={props.title} className="h-14 w-14" />
      <p className={` ${props.color === "w" ? "text-white" : "text-black"}`}>
        {props.title}
      </p>
    </div>
  );
};

export default Icon;
