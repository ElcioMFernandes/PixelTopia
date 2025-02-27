import React from "react";
import Window from "./components/Window";
import Icon from "./components/Icon";
import Notepad from "./components/Notepad";
import Trash from "./components/Trash";
import Folder from "./components/Folder";
import InternetExplorer from "./components/InternetExplorer";

interface OpenWindow {
  title: string;
  icon: string;
  content: React.ReactNode;
}

const App = () => {
  const [time, setTime] = React.useState(
    new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })
  );

  const [isStartOpened, setIsStartOpened] = React.useState(false);
  const [openWindows, setOpenWindows] = React.useState<OpenWindow[]>([]);
  const [lastClickTime, setLastClickTime] = React.useState<number>(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      );
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleStartClick = () => {
    setIsStartOpened(!isStartOpened);
  };

  const handleIconClick = (
    title: string,
    icon: string,
    content: React.ReactNode
  ) => {
    const now = Date.now();
    if (now - lastClickTime < 300) {
      if (!openWindows.some((window) => window.title === title)) {
        setOpenWindows((prev) => [...prev, { title, icon, content }]);
      }
    }
    setLastClickTime(now);
  };

  const handleWindowClose = (title: string) => {
    setOpenWindows((prev) => prev.filter((window) => window.title !== title));
  };

  const handleShutdown = () => {
    window.close();
  };

  return (
    <div style={{ backgroundColor: "#008080" }} className="flex max-h-screen">
      <div className="flex-1 grid grid-rows-9 justify-start gap-2 p-1">
        <Icon
          color="w"
          image="/trash.png"
          title="Lixeira"
          onClick={() => handleIconClick("Lixeira", "/trash.png", <Trash />)}
        />
        <Icon
          color="w"
          title="Projetos"
          image="/folder-lg.png"
          onClick={() =>
            handleIconClick("Projetos", "/folder-lg.png", <Folder />)
          }
        />
        <Icon
          color="w"
          image="/explorer.png"
          title="Internet Explorer"
          onClick={() =>
            handleIconClick(
              "Internet Explorer",
              "/explorer.png",
              <InternetExplorer />
            )
          }
        />
        <Icon
          color="w"
          image="/notepad.png"
          title="Bloco de notas"
          onClick={() =>
            handleIconClick("Bloco de notas", "/notepad.png", <Notepad />)
          }
        />
      </div>

      {openWindows.map(({ title, icon, content }) => (
        <Window
          key={title}
          title={title}
          icon={icon}
          onClose={() => handleWindowClose(title)}
        >
          {content}
        </Window>
      ))}
      {isStartOpened ? (
        <div className="absolute bottom-14 left-1 border cursor-default select-none border-t-white border-l-white w-1/8 p-1 bg-stone-300 z-50">
          <div>
            <ul className="flex flex-col">
              <li className="flex p-1 items-center gap-2 cursor-pointer hover:bg-blue-900 hover:text-white">
                <img src="/calculator-md.png" alt="" />
                Calculadora
              </li>
              <li className="flex border-b p-1 border-zinc-400 items-center gap-2 cursor-pointer hover:bg-blue-900 hover:text-white">
                <img src="/gamemine.png" alt="" />
                Campo Minado
              </li>
              <li
                className="flex border-t p-1 border-white items-center gap-2 cursor-pointer"
                onClick={handleShutdown}
              >
                <img src="/shutdown-md.png" alt="" />
                Desligar
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <></>
      )}
      <div className="absolute bottom-0 left-0 right-0 p-1 border-t-2 border-stone-200 bg-stone-300 flex justify-between items-center select-none">
        <div
          onClick={handleStartClick}
          className="flex justify-center items-center border h-full py-2 px-1 border-l-stone-100 border-t-stone-100 cursor-pointer hover:border-black hover:border-b-stone-100 hover:border-r-stone-100"
        >
          <img src="/logo.png" alt="" className="h-6 w-8" />
          <p className="text-lg">Start</p>
        </div>
        <div className="cursor-default border h-full py-2 px-4 border-r-stone-100 border-b-stone-100">
          <p className="text-lg">{time}</p>
        </div>
      </div>
    </div>
  );
};

export default App;
