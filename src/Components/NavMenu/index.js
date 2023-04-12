import {Menu} from 'antd';
import {useNavigate} from 'react-router-dom';
import React, {useState} from 'react';

const NavMenu = () => {
    const navigate = useNavigate();

    // TODO: Define Nav Menu Options in here
    const MenuItems = [];

    const onMenuClick = (menuItem) => {
        navigate(menuItem.key)
    };

    return (
        <Menu onClick={onMenuClick} mode="horizontal" items={MenuItems} />
    )
};

export default NavMenu;
