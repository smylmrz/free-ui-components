import { ref } from "vue";
import { Category } from "../models/Category";
import { marketing } from "./categories/marketing";
import { appUI } from "./categories/appUI";
import { ecommerce } from "./categories/ecommerce";

export const useCategories = () => {
    const categories = ref<Category[]>([
        ...marketing, ...appUI, ...ecommerce
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