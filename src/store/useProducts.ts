import { ref } from "vue";
import { Product } from "../models/Product";

export const useProducts = () => {
  const products = ref<Product[]>([
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

  const getProduct = (id: number) => {
    return products.value.filter((product) => {
      return product.id === id;
    });
  };

  return {
    products,
    getProduct,
  };
};
