import { groups } from "./groups";

export const getGroups = (sectionId: number) => {
  return groups.filter((group) => {
    return group.sectionId === sectionId;
  });
};
