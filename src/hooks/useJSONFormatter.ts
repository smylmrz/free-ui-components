import { ref } from "vue";

export type FormatType = "beautify" | "minify"

export const useJSONFormatter = () => {
    const input = ref("")
    const result = ref("")
    const formatType = ref<FormatType>("beautify")
    const tabSpaces = ref(2)
    const availableTabs = [2,3,4]
    const err = ref()

    const clear = () => {
        input.value = ''
        result.value = ''
    }

    const clearError = () => {
        err.value = ''
    }

    const beautify = () => {

        clearError()

        if (!input.value){
            return
        }

        try {
            const jsonObj = JSON.parse(input.value);
            result.value = JSON.stringify(jsonObj, null, tabSpaces.value);
            console.error("Failed to format string as JSON:", err);
        } catch (error) {
            err.value = error;
        }
    }

    const minify = () => {

        clearError()

        if (!input.value){
            return
        }

        try {
            result.value = JSON.stringify(JSON.parse(input.value));
        } catch (error) {
            console.error("Failed to minify JSON:", error);
            err.value = error
        }
    }

    const format = () => {
        formatType.value === 'beautify' ? beautify() : minify()
    }

    // watch([input], () => {
    //     format()
    // })

    return {
        input,
        result,
        formatType,
        tabSpaces,
        err,
        format,
        minify,
        beautify,
        clear,
        availableTabs
    }
}