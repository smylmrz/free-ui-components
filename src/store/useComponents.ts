import { ref } from "vue";
import { Component } from "../models/Component";
import { circularAvatar } from "./components/circular-avatar/circularAvatar";
import { stackedAvatars } from "./components/stacked-avatars/stackedAvatars";

export const useComponents = () => {
    const components = ref<Component[]>([
        stackedAvatars, circularAvatar
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

//todo: generate preview code automatically