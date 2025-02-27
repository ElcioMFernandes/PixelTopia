import React from "react";
import { motion } from "framer-motion";
import "react-resizable/css/styles.css";

interface WindowProps {
  title: string;
  icon?: string;
  children?: React.ReactNode;
  onClose: () => void;
}

const Window = (props: WindowProps) => {
  const [isOpened, setIsOpened] = React.useState(true);

  const handleWindowClose = () => {
    setIsOpened(false);
    props.onClose();
  };

  if (!isOpened) return null;

  return (
    <motion.div
      drag
      dragConstraints={false} // Permite que a posição seja livre
      dragMomentum={false} // Evita que volte para a posição original
      className="absolute top-10 left-10 z-50 flex flex-col gap-1 bg-stone-300 p-1 border-t-stone-100 border-l-stone-100 border shadow-lg shadow-stone-600/50"
    >
      {/* Barra de Título */}
      <div
        style={{ backgroundColor: "#000080" }}
        className="flex items-center justify-between p-1 pl-2 gap-10"
      >
        <div className="flex gap-2 items-center">
          {props.icon ? (
            <img src={props.icon} alt="" className="w-6 h-6" />
          ) : null}
          <p className="font-w95fa text-xl text-white select-none cursor-default">
            {props.title}
          </p>
        </div>
        <div className="flex gap-1">
          <button
            className="flex items-center justify-center text-black font-semibold bg-stone-300 px-2 border border-l-stone-100 border-t-stone-100 cursor-pointer 
             hover:border-black hover:border-b-stone-100 hover:border-r-stone-100"
          >
            _
          </button>
          <button
            className="flex items-center justify-center text-black font-semibold bg-stone-300 px-1.5 border border-l-stone-100 border-t-stone-100 cursor-pointer hover:border-black hover:border-b-stone-100 hover:border-r-stone-100"
            onClick={handleWindowClose}
          >
            X
          </button>
        </div>
      </div>
      {/* Conteúdo da Janela */}

        {props.children}
    </motion.div>
  );
};

export default Window;
