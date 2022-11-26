import React from "react";
import { useSelector } from "react-redux";
import "./Header.css";

const Header = ({ setIsEdit }) => {
    const user = useSelector((state) => state.user);

    const onEdit = () => {
        setIsEdit((prev) => !prev);
    };

    return (
        <header
            style={{
                backgroundColor: `${user.theme}`,
                backgroundImage: `linear-gradient(180deg ,${user.theme} 2%, ${user.theme} ,65%, #181818 100% )`,
            }}
        >
            <div className="info-container">
                <div className="info-edit" onClick={onEdit}>
                    Edit
                </div>
                <img className="info-ava" src={user.img} alt="" />
                <div className="info-username">{user.name}</div>
                <div className="info-age">{user.age}</div>
                <div className="info-about">{user.about}</div>
            </div>
        </header>
    );
};

export default Header;
