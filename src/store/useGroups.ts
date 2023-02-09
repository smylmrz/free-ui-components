import { ref } from "vue";
import { Group } from "../models/Group";
import { useSections } from "./useSections";
import { useProducts } from "./useProducts";
import { useComponents } from "./useComponents";

export const useGroups = () => {
    const groups = ref<Group[]>([
        {
            id: 1,
            name: "Avatars",
            slug: "avatars",
            sectionId: 2,
            previewSource:
                "https://tailwindui.com/img/category-thumbnails/application-ui/avatars.png",
        },
        {
            id: 2,
            name: "Buttons",
            slug: "buttons",
            sectionId: 2,
            previewSource:
                "https://tailwindui.com/img/category-thumbnails/application-ui/buttons.png",
        },
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

    const getGroups = (sectionId: number) => {
        return groups.value.filter((group) => {
            return group.sectionId === sectionId;
        });
    }

    const generateGroupUrl = (group: Group) => {

        const { getSection } = useSections()
        const { getProduct } = useProducts()

        const section = getSection(group.sectionId)
        const product = getProduct(section.productId)

        return `/${product.slug}/${section.slug}/${group.slug}`

    }

    const getComponentCount = (id: number) => {
        const { getComponents } = useComponents()

        return getComponents(id).length
    }

    return {
        groups,
        getGroupBySlug,
        getGroup,
        getGroups,
        generateGroupUrl,
        getComponentCount
    }
}