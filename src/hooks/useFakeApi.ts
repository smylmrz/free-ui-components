import { ref } from "vue";
import axios from "axios";
import { useJSONFormatter } from "./useJSONFormatter";
export const useFakeApi = () => {
    const apiResources = ["users", "products"]
    const currentResource = ref(apiResources[0])
    const { json, beautify } = useJSONFormatter()

    const baseApiUrl = `${window.location.protocol}//${window.location.hostname}:3000`

    const generateApiUrl = (api: string) => {
        return `${baseApiUrl}/${api}`
    }

    const fetchData = async () => {
        const url = generateApiUrl(currentResource.value)
        const req = await axios(url)
        json.value = JSON.stringify(req.data)
        beautify()
    }

    return {
        apiResources,
        currentResource,
        json,
        fetchData,
    }
}