import { useState } from "react";

import EditPage from "./components/Edit/EditPage";
import Header from "./components/Header/Header";

import "./App.css";

function App() {
    const [isEdit, setIsEdit] = useState(false);

    return (
        <div className="App">
            {isEdit ? (
                <EditPage setIsEdit={setIsEdit} />
            ) : (
                <Header setIsEdit={setIsEdit} />
            )}
        </div>
    );
}

export default App;
