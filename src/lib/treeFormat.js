import {nanoid} from "nanoid";
// import {FolderGearIcon} from "../components/common/icons/index.js";


export const getTemplateFormat = (node)=>{
    return {
        // serverId: node.serverId,
        parentId: node.key,
        key: nanoid(4)
    }
}
export const getHostFormat =(server)=>{

    return {
        ...server,
        key: nanoid(4),
        serverId: nanoid(4),
        title: server.alias,
        type: "host",
        // icon: <i className="fa-regular fa-server success server__icon"/>
    }
}


export const getDatabaseFormat =(item)=>{
    return {
        isLogin: false,
        ...item,
        key: nanoid(4),
        title: item.dbname,
        type: "database",
        icon: `fa-database ${item.status === "inactive" ? "warning" : "success"}`
        // icon: <i className={`fa-regular fa-database ${item.status === "inactive" ? "warning" : "success"}`}/>
    }
}

export const getBrokerFormat =(item)=>{
    return {
        key: nanoid(4),
        title: `${item.name} (${item.port})`,
        icon: "fa-folder-gear",
        ...item,
        type: "broker"
    }
}

export const getUserFormat =(item, node)=>{
    return {
        ...getTemplateFormat(node),
        title: item["@name"],
        type: "user",
        icon: "fa-user success",
        isLeaf: true,
        ...item
    }
}