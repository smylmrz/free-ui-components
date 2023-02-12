import { ref } from "vue";
import { Package } from "../models/Package";

export const usePackages = () => {
  const packages = ref<Package[]>([
    {
      id: 1,
      name: "Marketing",
      slug: "marketing",
    },
    {
      id: 2,
      name: "Application UI",
      slug: "application-ui",
    },
    {
      id: 3,
      name: "Ecommerce",
      slug: "ecommerce",
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
