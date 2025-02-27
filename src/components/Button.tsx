export interface ButtonProps {
  title: string;
}

const Button = (props: ButtonProps) => {
  return (
    <div className="flex justify-center items-center border border-t-white border-l-white shadow-md shadow-stone-500/50 select-none cursor-pointer">
      <button
        className="m-1 w-full hover:border-dashed border border-transparent hover:border-black

 px-4 py-0.5"
      >
        {props.title}
      </button>
    </div>
  );
};

export default Button;
