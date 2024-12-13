import { appName } from "@/constants/app";

export type LocalStorageItems<T = object | null> = {
  [key: string]: T;
};

export const getAllLocalStorageItemsAsJSON = () => {
  const items: LocalStorageItems = {};
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);

    if (key && key.includes(appName)) {
      items[key] = JSON.parse(localStorage.getItem(key) || "");
    }
  }
  return items;
};

export const getSanitizedName = (name: string) => {
  const split = name.split("_");
  return split[split.length - 1];
};
