import { ref } from "vue";

export type FormatType = "beautify" | "minify"

interface Message {
    type: "error" | "success",
    body: any
}
export const useJSONFormatter = () => {
    const input = ref("")
    const result = ref("")
    const formatType = ref<FormatType>("beautify")
    const tabSpaces = ref(2)
    const availableTabs = [2,3,4]
    const message = ref<Message |null>()

    const clear = () => {
        input.value = ''
        result.value = ''
        clearMessage()
    }

    const clearMessage = () => {
        message.value = null
    }

    const createMessage = (type: "error" | "success", body: any) => {
        message.value = {
            type, body
        };
    }

    const beautify = () => {

        clearMessage()

        if (!input.value){
            return
        }

        try {
            const jsonObj = JSON.parse(input.value);
            result.value = JSON.stringify(jsonObj, null, tabSpaces.value);
        } catch (error) {
            console.error("Failed to format string as JSON:", error);

            createMessage("error", error)
        }
    }

    const minify = () => {

        clearMessage()

        if (!input.value){
            return
        }

        try {
            result.value = JSON.stringify(JSON.parse(input.value));
        } catch (error) {
            console.error("Failed to minify JSON:", error);

            createMessage("error", error)
        }
    }

    const format = () => {
        formatType.value === 'beautify' ? beautify() : minify()
    }

    const validateJSON = () => {
        try {
            JSON.parse(input.value);
            createMessage("success", "Valid JSON.")
        } catch (error) {

            createMessage("error", "Invalid JSON.")
        }
    }

    // watch([input], () => {
    //     format()
    // })

    return {
        input,
        result,
        formatType,
        tabSpaces,
        message,
        format,
        minify,
        beautify,
        clear,
        availableTabs,
        validateJSON
    }
}