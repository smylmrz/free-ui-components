import { ref } from "vue";

export const useURL = () => {
    const url = ref(new URL(window.location.href))

    const setParam = (key: string, value: string) => {
        url.value.searchParams.has(key)
            ? url.value.searchParams.set(key, value)
            : url.value.searchParams.append(key, value)
    }

    return {
        setParam
    }
}