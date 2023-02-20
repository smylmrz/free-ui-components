import { isProd } from "./isProd";

export const imagePrefix = () => isProd ? '/preview-images' : '/public/preview-images/'