import Dashboard from "../features/dashboard/Dashboard.jsx";
import SpaceInfo from "@/features/sidenav/components/contents/SpaceInfo.jsx";
import CubridConfig from "@/features/appbar/components/contents/CubridConfig.jsx";
import BrokerConfig from "@/features/appbar/components/contents/BrokerConfig.jsx";
import CMConfig from "@/features/appbar/components/contents/CMConfig.jsx";

export const TAB_SCREEN = {
    "host":  Dashboard,
    "space_info": SpaceInfo,
    "cubrid_config": CubridConfig,
    "broker_config": BrokerConfig,
    "cm_config": CMConfig,
}
