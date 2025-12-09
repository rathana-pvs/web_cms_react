import {getResponse} from "@/api/endPoint.js";


export const getBrokersAPI = async (server) => {
    let payload = {
        task: "getbrokersinfo"
    }
    const response = await getResponse(server, payload)

    return {...response, result: response.brokersinfo?.[0].broker};
}

export const getBrokerStatusAPI = async (node, data) => {
    let payload = {
        task: "getbrokerstatus",
        ...data
    }
    const response = await getResponse(node, payload)
    if(response.success){
        return {result: response.asinfo, success: true};
    }
    return {success: false};
}