import { ref } from "vue";
import { Group } from "../models/Group";
import { useSections } from "./useSections";
import { usePackages } from "./usePackages";
import { useComponents } from "./useComponents";
import { marketing } from "./groups/marketing";
import { appUI } from "./groups/appUI";
import { ecommerce } from "./groups/ecommerce";

export const useGroups = () => {
    const groups = ref<Group[]>([
        ...marketing, ...appUI, ...ecommerce
    ])

    const getGroup = (id: number) => {
        return groups.value.filter((group) => {
            return group.id === id;
        })[0];
    }

    const getGroupBySlug = (slug: string) => {
        return groups.value.filter((group) => {
            return group.slug === slug;
        })[0];
    }

    const getGroupsByPackage = (packageId: number) => {
        return groups.value.filter(group => {
            return group.packageId === packageId
        })
    }

    const getGroups = (sectionId: number) => {
        return groups.value.filter((group) => {
            return group.sectionId === sectionId;
        });
    }

    const generateGroupUrl = (group: Group) => {

        const { getSection } = useSections()
        const { getPackage } = usePackages()

        const section = getSection(group.sectionId)
        const product = getPackage(section.packageId)

        return `/${product.slug}/${section.slug}/${group.slug}`

    }

    const getComponentCount = (groupId: number) => {
        const { getComponents } = useComponents()

        return getComponents(groupId).length
    }

    return {
        groups,
        getGroupBySlug,
        getGroup,
        getGroups,
        generateGroupUrl,
        getComponentCount,
        getGroupsByPackage
    }
}