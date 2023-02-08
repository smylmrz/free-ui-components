import { components } from "./components";

export const getComponents = (groupId: number) => {
  return components.filter((component) => {
    return component.groupId === groupId;
  });
};
