import React from "react";
import styles from "./styles/AppBar.module.css";
import {Dropdown} from "antd";
import {LogoutOutlined, UserDeleteOutlined} from "@ant-design/icons";
import {nanoid} from "nanoid";
import {useDispatch, useSelector} from "react-redux";
import Action from "./components/Action.jsx";
import File from "./components/File.jsx";
import {setLogout} from "../auth/authSlice.js";

const AppBar = () => {
    const dispatch = useDispatch();
    const language = [
        {
            label: <b>EN</b>,
            key: nanoid(4),
            // onClick: ()=>dispatch(setLocale("en")),
        },
        {
            label: <b>KR</b>,
            key: nanoid(4),
            // onClick: ()=>dispatch(setLocale("kr")),
        }
    ]
    // useEffect(() => {
    //     setLocale(lang)
    // },[lang])
    const menuItems = [
        {
            key: "profile",
            label: (<>
                <UserDeleteOutlined /> Logout
            </>),
        },
        {
            key: "logout",
            label: (
                <>
                    <LogoutOutlined style={{color: "var(--color-error)"}}/> Logout
                </>
            ),
            onClick: () => {
                dispatch(setLogout())
            }
        },
    ];
    return (
        <div className={styles.layout}>
            <div className={styles.layout__menu}>
                <File/>
                {/*/!*<ToolMenu/>*!/*/}
                <Action/>

                {/*<HelpMenu/>*/}
                {/*{[t("header.title.file"), t("header.title.tools"), t("header.title.actionbar"), t("header.title.help")].map((item, index) => (*/}
                {/*    <Dropdown key={index} menu={{ items: menus[index] }} trigger={['click']}>*/}
                {/*        <div className={styles.dropdown__menu} onClick={(e) => e.preventDefault()}>*/}
                {/*            {item}*/}
                {/*        </div>*/}
                {/*    </Dropdown>*/}
                {/*))}*/}
            </div>

            <div className={styles.layout__action}>
                <div className={styles.action__language}>
                    <Dropdown menu={{ items: language }} trigger={['click']}>
                        <div className={styles.dropdown__menu} onClick={(e) => e.preventDefault()}>
                            {/*{locale.toUpperCase()}*/}
                        </div>
                    </Dropdown>
                </div>
                <div className={styles.user__nav__layout}>
                    {/*<div className={styles.user__nav__title}>{user.id}</div>*/}
                    <Dropdown menu={{ items: menuItems }} trigger={['click']}>
                        <div className={styles.dropdown__menu} onClick={(e) => e.preventDefault()}>
                            <UserDeleteOutlined />
                        </div>
                    </Dropdown>
                    {/*<UserDeleteOutlined />*/}
                </div>

            </div>
        </div>
    )

}

export default AppBar;