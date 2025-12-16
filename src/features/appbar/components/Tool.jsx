import React, {useState} from "react";
import DropdownMenu from "./DropdownMenu.jsx";
import {useDispatch, useSelector} from "react-redux";
import {setHostConnection} from "@/features/appbar/appBarSlice.js";





const Tool = () => {
    const {activeHost} = useSelector(state => state.host);
    const dispatch = useDispatch();

    const menus = [
        {
            label: ""
        }

    ];

    return <DropdownMenu menus={menus} title={"Tool"}/>
}


export default Tool