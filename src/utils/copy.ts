import { ref } from "vue";

export const useCopyToClipBoard = () => {
  const isCopying = ref(false)

  const copy = (text: string) => {
    isCopying.value = true
    
    navigator.clipboard.writeText(text);

      setTimeout(() => {
        isCopying.value = false;
      }, 1500);
  }

  return {
    copy,
    isCopying
  }
}

export const copy = (text: string) => {
  navigator.clipboard.writeText(text);
};
