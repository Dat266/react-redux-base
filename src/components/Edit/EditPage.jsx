import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { update } from "../../redux/userSlice";

import "./EditPage.css";

const avaUrl = [
    " https://preview.redd.it/rrz3hmsxcll71.png?width=640&crop=smart&auto=webp&s=87cc5ed38d8f088ef9fffef7a4c5756b64309d6a",
    " https://preview.redd.it/fc9k38jwfwv51.png?auto=webp&s=9ce3d4c488091bb21969fd0fad7a6d89e4bfc50d",
    "  https://preview.redd.it/se39g98mljw51.png?auto=webp&s=758dfe2b0a2df439b06b68533e763f413d58b46c",
    " https://preview.redd.it/5es1lne1du261.png?width=640&crop=smart&auto=webp&s=e6eb0ee5710710000e4fbace119112de63324a38",
    " https://i.redd.it/7ipyf6pvqac61.png",
    "  https://i.redd.it/ksmb0m02ppy51.png",
    "  https://i.redd.it/ksmb0m02ppy51.png",
    "https://preview.redd.it/cpwkbke13vv51.png?auto=webp&s=9158e49b35ad2581d840efd2a013a9ead06abbc7",
    " https://preview.redd.it/26s9eejm8vz51.png?auto=webp&s=e38d32ee0ffa0666fade2abd62ed59037c119990",
];

const EditPage = (props) => {
    const { setIsEdit } = props;
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [about, setAbout] = useState("");
    const [img, setImg] = useState("");
    const [theme, setTheme] = useState("");

    const onSave = (e) => {
        e.preventDefault();
        const updateUser = {
            name,
            age,
            about,
            img,
            theme,
        };

        dispatch(update(updateUser));
        setIsEdit((prev) => !prev);
    };

    return (
        <>
            <form onSubmit={onSave}>
                <section className="edit-container">
                    <button className="close">Save</button>
                    <div className="edit-profile">Edit Profile</div>
                    <div className="input-container">
                        <label>Display name</label>
                        <input
                            type="text"
                            placeholder="datdev"
                            onChange={(e) => setName(e.target.value)}
                        />
                        <label>Age</label>
                        <input
                            type="text"
                            placeholder="26"
                            onChange={(e) => setAge(e.target.value)}
                        />
                        <label>About</label>
                        <textarea
                            name="input-about"
                            onChange={(e) => setAbout(e.target.value)}
                        ></textarea>
                    </div>
                    <label>Profile Picture</label>
                    <div className="input-image-container">
                        {avaUrl.map((url) => {
                            return (
                                <>
                                    <img
                                        onClick={(e) => setImg(e.target.src)}
                                        src={url}
                                        className="input-image"
                                        alt=""
                                    />
                                </>
                            );
                        })}
                    </div>
                    <div className="theme-container">
                        <label>Theme</label>
                        <input
                            type="color"
                            className="theme-color"
                            onChange={(e) => setTheme(e.target.value)}
                        />
                    </div>
                </section>
            </form>
        </>
    );
};

export default EditPage;
