const Notepad = () => {
  return (
    <div>
      <ul className="flex gap-4">
        <li>File</li>
        <li>Edit</li>
        <li>View</li>
        <li>Help</li>
      </ul>
      <textarea
        className="flex h-96 w-96 focus:outline-none p-1 resize-none bg-white border border-t-black border-l-black border-b-white border-r-white
        overflow-x-auto overflow-y-auto"
      ></textarea>
    </div>
  );
};

export default Notepad;
