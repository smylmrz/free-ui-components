import { ref } from "vue";
import { Section } from "../models/Section";

export const useSections = () => {
    const sections = ref<Section[]>([
        {
            id: 1,
            name: "Page Sections",
            slug: "page-sections",
            productId: 1
        },
        {
            id: 2,
            name: "Elements",
            slug: "elements",
            productId: 1
        },
        {
            id: 3,
            name: "Feedback",
            slug: "feedback",
            productId: 1
        },
        {
            id: 4,
            name: "Page examples",
            slug: "page-examples",
            productId: 1
        },
    ])

    const getSection = (id: number) => {
        return sections.value.filter(section => {
            return section.id === id
        })[0]
    }

    return {
        sections,
        getSection
    }
}