import {getResponse} from "@/api/endPoint.js";

export const getDBUsersAPI = async (server, data) => {
    let payload = {
        task: "userinfo",
        ...data
    }
    const response = await getResponse(server, payload)
    return {result: response.user, success: true};
}