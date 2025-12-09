import React from 'react';
import {
    CloseCircleOutlined, ExpandAltOutlined,
    MinusSquareOutlined,
} from '@ant-design/icons';
import {Radio} from 'antd';
import styles from './styles/SideNav.module.css'
import IconButton from "/src/components/common/Button/IconButton.jsx";
import SideNavHost from "./components/SideNavHost.jsx";
import SideNavTree from "./components/SideNavTree.jsx";
import VerticalResize from "@/components/common/VerticalResize/VerticalResize.jsx";
import {useSelector} from "react-redux";


const SideNav = () => {
    const [width, setWidth] = React.useState(0);
    const {activeHost} = useSelector(state => state.host);
    return (
        <div style={{display: "flex", width:width, height:"inherit"}}>
        <div className={styles.layout}>
            <div className={styles.top__menu}>
                <div className={styles.mode__view}>
                    <Radio.Group
                        defaultValue={"host"}
                    >
                        <Radio.Button value="host">Host</Radio.Button>
                        <Radio.Button value="monitor">Monitor</Radio.Button>
                    </Radio.Group>
                </div>
                <div className={styles.left__menu__button}>
                    <IconButton>
                        <MinusSquareOutlined />
                    </IconButton>
                    <IconButton>
                        <CloseCircleOutlined />
                    </IconButton>
                    <IconButton>
                        <ExpandAltOutlined />
                    </IconButton>
                </div>
            </div>
            <div className={styles.navigation__container}>
                <SideNavHost/>
                {
                    activeHost.uid ? <SideNavTree/> : null
                }

            </div>


        </div>
            <VerticalResize onChangeWidth={setWidth} defaultWidth={280}/>
        </div>

    );
};
export default SideNav;