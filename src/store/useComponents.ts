import { ref } from "vue";
import { Component } from "../models/Component";
import { circularAvatar } from "./components/appUI/elements/avatars/circular-avatar/circularAvatar";
import { stackedAvatars } from "./components/appUI/elements/avatars/stacked-avatars/stackedAvatars";
import { roundedAvatar } from "./components/appUI/elements/avatars/rounded-avatar/roundedAvatar";
import { initialsAvatar } from "./components/appUI/elements/avatars/initials-avatar/initialsAvatar";

export const useComponents = () => {
    const components = ref<Component[]>([
        stackedAvatars, circularAvatar, roundedAvatar, initialsAvatar
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