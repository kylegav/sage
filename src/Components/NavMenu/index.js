import {Menu} from 'antd';
import {useNavigate} from 'react-router-dom';
import React, {useState} from 'react';

const NavMenu = () => {
    const navigate = useNavigate();

    // TODO: Define Nav Menu Options in here
    const MenuItems = [
        {
            key: "/",
            label: "Home",
        },
        {
            key: "account",
            label: "Account",

        },
        {
            key: "timeoff",
            label: "Time Off",
        },
        {
            key: "contacts",
            label: "Contacts",
        },
    ];

    const onMenuClick = (menuItem) => {
        navigate(menuItem.key)
    };
    // TODO: Style Menu centered
    return (
        <Menu onClick={onMenuClick} mode="horizontal" items={MenuItems} />
    )
};

export default NavMenu;
