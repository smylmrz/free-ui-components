import { ref } from "vue";
import { UIComponent } from "../models/UIComponent";
import { circularAvatar } from "./components/appUI/elements/avatars/circular-avatar/circularAvatar";
import { stackedAvatars } from "./components/appUI/elements/avatars/stacked-avatars/stackedAvatars";
import { roundedAvatar } from "./components/appUI/elements/avatars/rounded-avatar/roundedAvatar";
import { initialsAvatar } from "./components/appUI/elements/avatars/initials-avatar/initialsAvatar";
import { primaryButton } from "./components/appUI/elements/buttons/primary-button/primaryButton";
import { secondaryButton } from "./components/appUI/elements/buttons/secondary-button/secondaryButton";
import { inputWithLabel } from "./components/appUI/forms/input-groups/input-group-with-label/inputWithLabel";
import {
    inputWithLabelAndHelperText
} from "./components/appUI/forms/input-groups/input-group-with-label-and-helper-text/input-with-label-and-helper-text";
import { alertWithDescription } from "./components/appUI/feedback/alerts/alert-with-description/alert-with-description";
import { alertWithActions } from "./components/appUI/feedback/alerts/alert-with-actions/alert-with-actions";

export const useComponents = () => {
    const components = ref<UIComponent[]>([
        stackedAvatars,
        circularAvatar,
        roundedAvatar,
        initialsAvatar,
        primaryButton,
        secondaryButton,
        inputWithLabel,
        inputWithLabelAndHelperText,
        alertWithDescription,
        alertWithActions
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