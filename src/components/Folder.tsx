import { useEffect, useState } from "react";
import Icon from "./Icon";
import axios from "axios";

const Folder = () => {
  const [repos, setRepos] = useState<
    { id: number; name: string; html_url: string }[]
  >([]);

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(
        "https://api.github.com/users/ElcioMFernandes/repos"
      );
      setRepos(res.data);
    };
    fetch();
  }, []);

  return (
    <div>
      <ul className="flex gap-4">
        <li>File</li>
        <li>Edit</li>
        <li>View</li>
        <li>Help</li>
      </ul>
      <div className="grid grid-cols-3 gap-6 text-black bg-white justify-around p-4 pr-8">
        {repos.map((repo) => (
          <Icon
            key={repo.id}
            title={repo.name}
            image={"/folder-lg.png"}
            onClick={() => {
              window.open(repo.html_url, "_blank");
            }}
          />
        ))}
      </div>
      <div className="grid grid-cols-12">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Folder;
