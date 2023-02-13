import { ref } from "vue";
import { Category } from "../models/Category";

export const useCategories = () => {
    const categories = ref<Category[]>([
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

    const getCategory = (id: number) => {
        return categories.value.filter(category => {
            return category.id === id
        })[0]
    }

    const getCategories = (packageId: number) => {
        return categories.value.filter(category => {
            return category.packageId === packageId
        })
    }

    return {
        categories,
        getCategory,
        getCategories
    }
}