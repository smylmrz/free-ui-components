import { ref } from "vue";
import { Tab } from "../models/Tab";

export const useTabs = () => {

    const tabs = ref<Tab[]>([
        {
            id: 1,
            title: 'Application UI',
            body: 'Form layouts, tables, modal dialogs — everything you need to build beautiful responsive web applications.'
        },
        {
            id: 2,
            title: 'Marketing',
            body: 'Heroes, feature sections, newsletter sign up forms — everything you need to build beautiful marketing websites.'
        },
        {
            id: 3,
            title: 'Ecommerce',
            body: 'Checkout forms, shopping carts, product views — everything you need to build your next ecommerce front-end.'
        },
    ])

    const currentTab = ref<Tab>(tabs.value[0])

    const setCurrentTab = (tab: Tab) => {
        currentTab.value = tab
    }

    const isCurrentTab = (tab: Tab) => {
        return currentTab.value.id === tab.id
    }

    return {
        tabs,
        currentTab,
        setCurrentTab,
        isCurrentTab,
    }
}