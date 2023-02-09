import { ref } from "vue";
import { Component } from "../models/Component";
import { circularAvatars } from "./components/circularAvatars/circularAvatars";

export const useComponents = () => {
    const components = ref<Component[]>([
        circularAvatars
    ])

    const getComponents = (groupId: number) => {
        return components.value.filter((component) => {
            return component.groupId === groupId;
        });
    }

    return {
        components,
        getComponents
    }
}