import { getResponse } from "@/api/endPoint.js";
import { isNotEmpty } from "@/lib/utils.js";
import axios from '/src/api/axiosInstant.js'

export const getDatabasesAPI = async (server) => {
    let payload = {
        task: "startinfo"
    }
    const response = await getResponse(server, payload);
    // const responseD = await axios.get("/api/database", {hostId: server.uid});
    let databases = []

    if (response.success) {
        if (isNotEmpty(response.activelist)) {
            for (let db of response.activelist[0].active) {
                databases.push({ ...db, status: "active" });
            }
        }
        if (isNotEmpty(response.dblist)) {
            for (let db of response.dblist[0].dbs) {
                if (!databases.some(obj => obj.dbname === db.dbname)) {
                    databases.push({ ...db, status: "inactive" });
                }

            }
        }
        return { result: databases, success: true };
    }

    return { success: false };
}

export const getDBSpaceAPI = async (server, data) => {
    let payload = {
        task: "dbspaceinfo",
        ...data
    }
    const response = await getResponse(server, payload)
    return { result: response, success: true };
}