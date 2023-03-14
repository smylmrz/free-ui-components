import { computed, ref, watch } from "vue";
import axios from "axios";
import { useJSONFormatter } from "./useJSONFormatter";
export const useFakeApi = () => {
    const apiResources = ["users", "products"]
    const skip = ref(0)
    const limit = ref(10)

    const currentResource = ref(apiResources[0])
    const { json, beautify, minify } = useJSONFormatter()

    const baseApiUrl = `${window.location.protocol}//${window.location.hostname}:3000`

    const generatedApiUrl = computed(() => {
        return `${baseApiUrl}/${currentResource.value}?limit=${limit.value}&skip=${skip.value}`
    })

    const userApiUrl = computed(() => {
        const { pathname, search } = new URL(generatedApiUrl.value)

        return pathname+search
    })

    const fetchData = async () => {
        const req = await axios(generatedApiUrl.value)
        json.value = JSON.stringify(req.data)
        beautify()
    }

    watch([skip, limit], () => {
        json.value = ''
    })

    return {
        apiResources,
        currentResource,
        json,
        fetchData,
        skip,
        limit,
        beautify,
        minify,
        userApiUrl,
        generatedApiUrl
    }
}