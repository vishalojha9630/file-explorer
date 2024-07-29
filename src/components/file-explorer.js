import React, { useEffect, useState } from 'react'
import localData from "../data.json"
import TopBar from "./topbar";
import Display from "./display";
import Input from "./inputs";


// import "./tailwind.output.css";

const FileUploader = () => {
  const [data, setData] = useState(null);
  const [addNew, setAddNew] = useState({});

  useEffect(() => {
    if (!localStorage.getItem("data")) {
      setData(localData);
      localStorage.setItem("data", JSON.stringify(localData));
    } else {
      setData(JSON.parse(localStorage.getItem("data")));
    }
  }, []);

  useEffect(() => {
    if (data) localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  const props = {
    data,
    setData,
    addNew,
    setAddNew
  };

  return (
    <div className="bg-gray-800">
      <div className="p-2 px-4 w-full sm:max-w-xs min-h-screen bg-gray-900">
        <TopBar {...{ addNew, setAddNew, root: true }} />
        {addNew && addNew.root && <Input {...{ addNew, setAddNew, setData }} />}
        <Display {...props} />
      </div>
    </div>
  )
}

export default FileUploader