import { ref } from "vue";
import { Package } from "../models/Package";

export const usePackages = () => {
  const packages = ref<Package[]>([
    {
      id: 1,
      name: "Application UI",
      slug: "application-ui",
      description: "Form layouts, tables, modal dialogs — everything you need to build beautiful responsive web applications."
    },
    {
      id: 2,
      name: "Marketing",
      slug: "marketing",
      description: "Heroes, feature sections, newsletter sign up forms — everything you need to build beautiful marketing websites."
    },
    {
      id: 3,
      name: "Ecommerce",
      slug: "ecommerce",
      description: "Checkout forms, shopping carts, product views — everything you need to build your next ecommerce front-end."
    },
  ]);

  const getPackage = (id: number) => {
    return packages.value.filter((p) => {
      return p.id === id;
    })[0];
  };

  return {
    packages,
    getPackage,
  };
};
