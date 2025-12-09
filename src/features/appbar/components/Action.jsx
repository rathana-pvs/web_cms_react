import React from "react";
import DropdownMenu from "./DropdownMenu.jsx";
import {useDispatch} from "react-redux";
import {setOpenHostVersion} from "@/features/domain/host/hostSlice.js";


const CONFIG_PARAM_CONTENT = [
    // {label: "Edit Cubrid Config", screen: CubridConfig, key: nanoid(8)},
    // {label: "Edit Broker Config", screen: CubridBrokerConfig, key: nanoid(8)},
    // {label: "Cubrid Manager Config", screen: CMConfig, key: nanoid(8)},
]




const Action = ()=>{

    const dispatch = useDispatch();
    const menus = [
        {
            label: 'Dashboard Config',
        },
        {
            label: 'Server Version',
            onClick: ()=>{
                dispatch(setOpenHostVersion(true));
            }
        },
        {
            label: 'Properties'
        },
        {
            label: 'Config Params'
        },

    ];

    return <DropdownMenu menus={menus} title={"action"}/>
}

export default Action