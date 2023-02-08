import { groups } from "./groups";

export const getGroup = (name: string) => {
  return groups.filter((group) => {
    return group.name.toLowerCase() === name;
  })[0];
};
