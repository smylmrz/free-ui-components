import { ref } from "vue";
import { Section } from "../models/Section";

export const useSections = () => {
    const sections = ref<Section[]>([
        {
            id: 1,
            name: "Page Sections",
            slug: "page-sections",
            packageId: 1
        },
        {
            id: 2,
            name: "Elements",
            slug: "elements",
            packageId: 1
        },
        {
            id: 3,
            name: "Feedback",
            slug: "feedback",
            packageId: 1
        },
        {
            id: 4,
            name: "Page examples",
            slug: "page-examples",
            packageId: 1
        },
    ])

    const getSection = (id: number) => {
        return sections.value.filter(section => {
            return section.id === id
        })[0]
    }

    const getSections = (packageId: number) => {
        return sections.value.filter(section => {
            return section.packageId === packageId
        })
    }

    return {
        sections,
        getSection,
        getSections
    }
}