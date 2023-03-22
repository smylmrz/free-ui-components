import { ref } from "vue";
import { Group } from "../models/Group";
import { useComponents } from "./useComponents";

export const useGroups = () => {
    const groups = ref<Group[]>([
        {
            id: 1,
            name: "Hero Sections",
            slug: "hero-sections",
            previewSource:
                "https://tailwindui.com/img/category-thumbnails/marketing/heroes.png",
        },
        {
            id: 2,
            name: "Feature sections",
            slug: "feature-sections",
            previewSource:
                "https://tailwindui.com/img/category-thumbnails/marketing/feature-sections.png",
        },
        {
            id: 3,
            name: "CTA sections",
            slug: "cta-sections",
            previewSource:
                "https://tailwindui.com/img/category-thumbnails/marketing/feature-sections.png",
        },
        {
            id: 4,
            name: "Header sections",
            slug: "header-sections",
            previewSource:
                "https://tailwindui.com/img/category-thumbnails/marketing/feature-sections.png",
        },
        {
            id: 5,
            name: "Team sections",
            slug: "team-sections",
            previewSource:
                "https://tailwindui.com/img/category-thumbnails/marketing/feature-sections.png",
        },
        {
            id: 6,
            name: "Pricing sections",
            slug: "pricing-sections",
            previewSource:
                "https://tailwindui.com/img/category-thumbnails/marketing/feature-sections.png",
        },
        {
            id: 7,
            name: "FAQs",
            slug: "faqs",
            previewSource:
                "https://tailwindui.com/img/category-thumbnails/marketing/feature-sections.png",
        },
        {
            id: 8,
            name: "Newsletter sections",
            slug: "newsletter-sections",
            previewSource:
                "https://tailwindui.com/img/category-thumbnails/marketing/heroes.png",
        },
        {
            id: 9,
            name: "Stats",
            slug: "stats",
            previewSource:
                "https://tailwindui.com/img/category-thumbnails/marketing/heroes.png",
        },
        {
            id: 10,
            name: "Testimonials",
            slug: "testimonials",
            previewSource:
                "https://tailwindui.com/img/category-thumbnails/marketing/feature-sections.png",
        },
        {
            id: 11,
            name: "Blog sections",
            slug: "blog-sections",
            previewSource:
                "https://tailwindui.com/img/category-thumbnails/marketing/feature-sections.png",
        },
        {
            id: 12,
            name: "Contact sections",
            slug: "contact-sections",
            previewSource:
                "https://tailwindui.com/img/category-thumbnails/marketing/feature-sections.png",
        },
        {
            id: 13,
            name: "Content sections",
            slug: "content-sections",
            previewSource:
                "https://tailwindui.com/img/category-thumbnails/marketing/feature-sections.png",
        },
        {
            id: 14,
            name: "Footers",
            slug: "footers",
            previewSource:
                "https://tailwindui.com/img/category-thumbnails/marketing/feature-sections.png",
        },
        {
            id: 15,
            name: "Logo clouds",
            slug: "logo-clouds",
            previewSource:
                "https://tailwindui.com/img/category-thumbnails/marketing/feature-sections.png",
        },
        {
            id: 16,
            name: "Headers",
            slug: "headers",
            previewSource:
                "https://tailwindui.com/img/category-thumbnails/marketing/feature-sections.png",
        },
        {
            id: 17,
            name: "Banners",
            slug: "banners",
            previewSource:
                "https://tailwindui.com/img/category-thumbnails/marketing/feature-sections.png",
        },
        {
            id: 18,
            name: "Flyout menus",
            slug: "flyout-menus",
            previewSource:
                "https://tailwindui.com/img/category-thumbnails/marketing/feature-sections.png",
        },
        {
            id: 19,
            name: "404 Pages",
            slug: "404-pages",
            previewSource:
                "https://tailwindui.com/img/category-thumbnails/marketing/feature-sections.png",
        },
        {
            id: 20,
            name: "Landing pages",
            slug: "landing-pages",
            previewSource:
                "https://tailwindui.com/img/category-thumbnails/marketing/feature-sections.png",
        },
        {
            id: 21,
            name: "Pricing pages",
            slug: "pricing-pages",
            previewSource:
                "https://tailwindui.com/img/category-thumbnails/marketing/feature-sections.png",
        },
        {
            id: 22,
            name: "Contact pages",
            slug: "contact-pages",
            previewSource:
                "https://tailwindui.com/img/category-thumbnails/marketing/feature-sections.png",
        },
        {
            id: 23,
            name: "Stacked Layouts",
            slug: "stacked-layouts",
            previewSource:
                "https://tailwindui.com/img/category-thumbnails/marketing/feature-sections.png",
        },
        {
            id: 24,
            name: "Sidebar Layouts",
            slug: "sidebar-layouts",
            previewSource:
                "https://tailwindui.com/img/category-thumbnails/application-ui/avatars.png",
        },
        {
            id: 25,
            name: "Multi-Column Layouts",
            slug: "multi-column-layouts",
            previewSource:
                "https://tailwindui.com/img/category-thumbnails/application-ui/buttons.png",
        },
        {
            id: 26,
            name: "Page Headings",
            slug: "page-headings",
            previewSource:
                "https://tailwindui.com/img/category-thumbnails/marketing/feature-sections.png",
        },
        {
            id: 27,
            name: "Card Headings",
            slug: "card-headings",
            previewSource:
                "https://tailwindui.com/img/category-thumbnails/application-ui/avatars.png",
        },
        {
            id: 28,
            name: "Section Headings",
            slug: "section-headings",
            previewSource:
                "https://tailwindui.com/img/category-thumbnails/application-ui/buttons.png",
        },
        {
            id: 29,
            name: "Description Lists",
            slug: "description-lists",
            previewSource:
                "https://tailwindui.com/img/category-thumbnails/marketing/feature-sections.png",
        },
        {
            id: 30,
            name: "Stats",
            slug: "stats",
            previewSource:
                "https://tailwindui.com/img/category-thumbnails/application-ui/avatars.png",
        },
        {
            id: 31,
            name: "Calendars",
            slug: "Calendars",
            previewSource:
                "https://tailwindui.com/img/category-thumbnails/application-ui/buttons.png",
        },
        {
            id: 32,
            name: "Tables",
            slug: "tables",
            previewSource:
                "https://tailwindui.com/img/category-thumbnails/marketing/feature-sections.png",
        },
        {
            id: 33,
            name: "Stacked Lists",
            slug: "stacked-lists",
            previewSource:
                "https://tailwindui.com/img/category-thumbnails/application-ui/avatars.png",
        },
        {
            id: 34,
            name: "Grid Lists",
            slug: "grid-lists",
            previewSource:
                "https://tailwindui.com/img/category-thumbnails/application-ui/buttons.png",
        },
        {
            id: 35,
            name: "Feeds",
            slug: "feeds",
            previewSource:
                "https://tailwindui.com/img/category-thumbnails/application-ui/buttons.png",
        },
        {
            id: 36,
            name: "Form Layouts",
            slug: "form-layouts",
            previewSource:
                "https://tailwindui.com/img/category-thumbnails/application-ui/avatars.png",
        },
        {
            id: 37,
            name: "Input Groups",
            slug: "input-groups",
            previewSource:
                "https://tailwindui.com/img/category-thumbnails/application-ui/buttons.png",
        },
        {
            id: 38,
            name: "Select Menus",
            slug: "select-menus",
            previewSource:
                "https://tailwindui.com/img/category-thumbnails/application-ui/buttons.png",
        },
        {
            id: 39,
            name: "Sign-in and Registrations",
            slug: "sign-in-and-registration",
            previewSource:
                "https://tailwindui.com/img/category-thumbnails/application-ui/avatars.png",
        },
        {
            id: 40,
            name: "Textareas",
            slug: "textareas",
            previewSource:
                "https://tailwindui.com/img/category-thumbnails/application-ui/buttons.png",
        },
        {
            id: 41,
            name: "Toggles",
            slug: "toggles",
            previewSource:
                "https://tailwindui.com/img/category-thumbnails/application-ui/buttons.png",
        },
        {
            id: 42,
            name: "Action Panels",
            slug: "action-panels",
            previewSource:
                "https://tailwindui.com/img/category-thumbnails/application-ui/buttons.png",
        },
        {
            id: 43,
            name: "Comboboxes",
            slug: "comboboxes",
            previewSource:
                "https://tailwindui.com/img/category-thumbnails/application-ui/buttons.png",
        },
        {
            id: 44,
            name: "Alerts",
            slug: "alerts",
            previewSource:
                "https://tailwindui.com/img/category-thumbnails/application-ui/buttons.png",
        },
        {
            id: 45,
            name: "Empty States",
            slug: "empty-states",
            previewSource:
                "https://tailwindui.com/img/category-thumbnails/application-ui/buttons.png",
        },
        {
            id: 46,
            name: "Navbars",
            slug: "navbars",
            previewSource:
                "https://tailwindui.com/img/category-thumbnails/application-ui/buttons.png",
        },
        {
            id: 47,
            name: "Pagination",
            slug: "pagination",
            previewSource:
                "https://tailwindui.com/img/category-thumbnails/application-ui/buttons.png",
        },
        {
            id: 48,
            name: "Tabs",
            slug: "tabs",
            previewSource:
                "https://tailwindui.com/img/category-thumbnails/application-ui/buttons.png",
        },
        {
            id: 49,
            name: "Vertical Navigation",
            slug: "vertical-navigation",
            previewSource:
                "https://tailwindui.com/img/category-thumbnails/application-ui/buttons.png",
        },
        {
            id: 50,
            name: "Sidebar Navigation",
            slug: "sidebar-navigation",
            previewSource:
                "https://tailwindui.com/img/category-thumbnails/application-ui/buttons.png",
        },
        {
            id: 51,
            name: "Breadcrumbs",
            slug: "breadcrumbs",
            previewSource:
                "https://tailwindui.com/img/category-thumbnails/application-ui/buttons.png",
        },
        {
            id: 52,
            name: "Steps",
            slug: "steps",
            previewSource:
                "https://tailwindui.com/img/category-thumbnails/application-ui/buttons.png",
        },
        {
            id: 53,
            name: "Command Palettes",
            slug: "command-palettes",
            previewSource:
                "https://tailwindui.com/img/category-thumbnails/application-ui/buttons.png",
        },
        {
            id: 54,
            name: "Modals",
            slug: "modals",
            previewSource:
                "https://tailwindui.com/img/category-thumbnails/application-ui/buttons.png",
        },
        {
            id: 55,
            name: "Slide-overs",
            slug: "slide-overs",
            previewSource:
                "https://tailwindui.com/img/category-thumbnails/application-ui/buttons.png",
        },
        {
            id: 56,
            name: "Notifications",
            slug: "notifications",
            previewSource:
                "https://tailwindui.com/img/category-thumbnails/application-ui/buttons.png",
        },
        {
            id: 57,
            name: "Avatars",
            slug: "avatars",
            previewSource:
                "https://tailwindui.com/img/category-thumbnails/application-ui/avatars.png",
        },
        {
            id: 58,
            name: "Dropdowns",
            slug: "dropdowns",
            previewSource:
                "https://tailwindui.com/img/category-thumbnails/application-ui/avatars.png",
        },
        {
            id: 59,
            name: "Badges",
            slug: "badges",
            previewSource:
                "https://tailwindui.com/img/category-thumbnails/application-ui/avatars.png",
        },
        {
            id: 60,
            name: "Buttons",
            slug: "buttons",
            previewSource:
                "https://tailwindui.com/img/category-thumbnails/application-ui/buttons.png",
        },
        {
            id: 61,
            name: "Button Groups",
            slug: "buttons-groups",
            previewSource:
                "https://tailwindui.com/img/category-thumbnails/application-ui/buttons.png",
        },
        {
            id: 62,
            name: "Containers",
            slug: "containers",
            previewSource:
                "https://tailwindui.com/img/category-thumbnails/application-ui/avatars.png",
        },
        {
            id: 63,
            name: "List Containers",
            slug: "list-containers",
            previewSource:
                "https://tailwindui.com/img/category-thumbnails/application-ui/avatars.png",
        },
        {
            id: 64,
            name: "Media Objects",
            slug: "media-objects",
            previewSource:
                "https://tailwindui.com/img/category-thumbnails/application-ui/avatars.png",
        },
        {
            id: 65,
            name: "Dividers",
            slug: "dividers",
            previewSource:
                "https://tailwindui.com/img/category-thumbnails/application-ui/buttons.png",
        },
        {
            id: 66,
            name: "Home Screens",
            slug: "home-screens",
            previewSource:
                "https://tailwindui.com/img/category-thumbnails/application-ui/buttons.png",
        },
        {
            id: 66,
            name: "Detail Screens",
            slug: "detail-screens",
            previewSource:
                "https://tailwindui.com/img/category-thumbnails/application-ui/buttons.png",
        },
        {
            id: 66,
            name: "Settings-screens",
            slug: "home-screens",
            previewSource:
                "https://tailwindui.com/img/category-thumbnails/application-ui/buttons.png",
        },
        {
            id: 70,
            name: "Product Overviews",
            slug: "product-overviews",
            previewSource:
                "https://tailwindui.com/img/category-thumbnails/ecommerce/product-overviews.png",
        },
        {
            id: 71,
            name: "Product Lists",
            slug: "product-lists",
            previewSource:
                "https://tailwindui.com/img/category-thumbnails/ecommerce/product-lists.png",
        },
        {
            id: 72,
            name: "Category Previews",
            slug: "category-previews",
            previewSource:
                "https://tailwindui.com/img/category-thumbnails/ecommerce/product-overviews.png",
        },
        {
            id: 73,
            name: "Shopping Carts",
            slug: "shopping-carts",
            previewSource:
                "https://tailwindui.com/img/category-thumbnails/ecommerce/product-lists.png",
        },
        {
            id: 74,
            name: "Category Filters",
            slug: "category-fitlers",
            previewSource:
                "https://tailwindui.com/img/category-thumbnails/ecommerce/product-lists.png",
        },
        {
            id: 75,
            name: "Product Quickviews",
            slug: "product-quickviews",
            previewSource:
                "https://tailwindui.com/img/category-thumbnails/ecommerce/product-overviews.png",
        },
        {
            id: 76,
            name: "Product Features",
            slug: "product-features",
            previewSource:
                "https://tailwindui.com/img/category-thumbnails/ecommerce/product-lists.png",
        },
        {
            id: 77,
            name: "Store Navigation",
            slug: "store-navigation",
            previewSource:
                "https://tailwindui.com/img/category-thumbnails/ecommerce/product-overviews.png",
        },
        {
            id: 78,
            name: "Promo Sections",
            slug: "promo-sections",
            previewSource:
                "https://tailwindui.com/img/category-thumbnails/ecommerce/product-lists.png",
        },
        {
            id: 79,
            name: "Checkout Forms",
            slug: "checkout-forms",
            previewSource:
                "https://tailwindui.com/img/category-thumbnails/ecommerce/product-lists.png",
        },
        {
            id: 80,
            name: "Reviews",
            slug: "reviews",
            previewSource:
                "https://tailwindui.com/img/category-thumbnails/ecommerce/product-overviews.png",
        },
        {
            id: 81,
            name: "Order Summaries",
            slug: "order-summaries",
            previewSource:
                "https://tailwindui.com/img/category-thumbnails/ecommerce/product-lists.png",
        },
        {
            id: 82,
            name: "Order History",
            slug: "order-history",
            previewSource:
                "https://tailwindui.com/img/category-thumbnails/ecommerce/product-overviews.png",
        },
        {
            id: 83,
            name: "Incentives",
            slug: "incentives",
            previewSource:
                "https://tailwindui.com/img/category-thumbnails/ecommerce/product-lists.png",
        },
        {
            id: 84,
            name: "Storefront Pages",
            slug: "storefront-pages",
            previewSource:
                "https://tailwindui.com/img/category-thumbnails/ecommerce/product-lists.png",
        },
        {
            id: 85,
            name: "Product Pages",
            slug: "product-pages",
            previewSource:
                "https://tailwindui.com/img/category-thumbnails/ecommerce/product-lists.png",
        },
        {
            id: 86,
            name: "Category Pages",
            slug: "category-pages",
            previewSource:
                "https://tailwindui.com/img/category-thumbnails/ecommerce/product-overviews.png",
        },
        {
            id: 87,
            name: "Shopping Cart Pages",
            slug: "shopping-cart-pages",
            previewSource:
                "https://tailwindui.com/img/category-thumbnails/ecommerce/product-lists.png",
        },
        {
            id: 88,
            name: "Checkout Pages",
            slug: "checkout-pages",
            previewSource:
                "https://tailwindui.com/img/category-thumbnails/ecommerce/product-overviews.png",
        },
        {
            id: 89,
            name: "Order Detail Pages",
            slug: "order-detail-pages",
            previewSource:
                "https://tailwindui.com/img/category-thumbnails/ecommerce/product-lists.png",
        },
        {
            id: 90,
            name: "Order History Pages",
            slug: "order-history-pages",
            previewSource:
                "https://tailwindui.com/img/category-thumbnails/ecommerce/product-lists.png",
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

    const filterGroups = (name: string) => {
        return groups.value.filter((group) => {
            return group.name.toLowerCase().includes(name);
        }).filter(group => {
            return getComponentCount(group.id) > 0
        })
    }

    const generateGroupUrl = (group: Group) => {

        return {
            url: `/components/${group.slug}`
        }
    }

    const getComponentCount = (groupId: number) => {
        const { getComponents } = useComponents()

        return getComponents(groupId).length
    }

    return {
        groups,
        getGroupBySlug,
        getGroup,
        generateGroupUrl,
        getComponentCount,
        filterGroups
    }
}