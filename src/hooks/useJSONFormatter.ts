import { ref } from "vue";

export type FormatType = "beautify" | "minify"

interface Message {
    type: "error" | "success",
    body: any
}
export const useJSONFormatter = () => {
    const json = ref("")
    const formatType = ref<FormatType>("beautify")
    const tabSpaces = ref(2)
    const availableTabs = [2,3,4]
    const message = ref<Message |null>()

    const clear = () => {
        json.value = ''
        clearMessage()
    }

    const clearMessage = () => {
        message.value = null
    }

    const createMessage = (type: "error" | "success", body: any) => {
        message.value = {
            type, body
        };

        setTimeout(() => {
            message.value = null
        }, 5000)
    }

    const beautify = () => {

        clearMessage()

        if (!json.value){
            return
        }

        try {
            const jsonObj = JSON.parse(json.value);
            json.value = JSON.stringify(jsonObj, null, tabSpaces.value);
        } catch (error) {
            console.error("Failed to format string as JSON:", error);

            createMessage("error", error)
        }
    }

    const minify = () => {

        clearMessage()

        if (!json.value){
            return
        }

        try {
            json.value = JSON.stringify(JSON.parse(json.value));
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
            JSON.parse(json.value);
            createMessage("success", "Valid JSON.")
        } catch (error) {

            createMessage("error", "Invalid JSON.")
        }
    }

    // watch([input], () => {
    //     format()
    // })

    return {
        json,
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