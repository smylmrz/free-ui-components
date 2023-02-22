import { ref } from "vue";
import { Component } from "../models/Component";
import { circularAvatar } from "./components/appUI/elements/avatars/circular-avatar/circularAvatar";
import { stackedAvatars } from "./components/appUI/elements/avatars/stacked-avatars/stackedAvatars";
import { roundedAvatar } from "./components/appUI/elements/avatars/rounded-avatar/roundedAvatar";
import { initialsAvatar } from "./components/appUI/elements/avatars/initials-avatar/initialsAvatar";
import { primaryButton } from "./components/appUI/elements/buttons/primary-button/primaryButton";
import { secondaryButton } from "./components/appUI/elements/buttons/seondary-button/secondaryButton";
import { inputWithLabel } from "./components/appUI/forms/input-groups/input-group-with-label/inputWithLabel";

export const useComponents = () => {
    const components = ref<Component[]>([
        stackedAvatars, circularAvatar, roundedAvatar, initialsAvatar, primaryButton, secondaryButton, inputWithLabel
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