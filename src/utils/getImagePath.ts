import { isProd } from "./isProd";

export const getImagePath = () => {
    return isProd ? '/' : '/public/'
}