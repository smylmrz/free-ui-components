import { nouns } from "./nouns";
import { verbs } from "./verbs";
import { ref } from "vue";
export const useSentenceGenerator = () => {

    const sentence = ref('')

    const randomWordSelector = (words: string[]) => {
        return words[Math.floor(Math.random() * words.length)];
    }

    const generate = () => {
        const randomName = randomWordSelector(nouns)
        const randomVerb = randomWordSelector(verbs)

        sentence.value = ` The ${randomName} ${randomVerb}`
    }

    return {
        sentence,
        generate
    }
}