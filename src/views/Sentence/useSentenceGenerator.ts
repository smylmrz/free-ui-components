import { nouns } from "./nouns";
import { verbs } from "./verbs";
import { adjectives } from "./adjectives";
import { adverbs } from "./adverbs";
import { prepositions } from "./prespositions";

import { ref, watch } from "vue";
export const useSentenceGenerator = () => {

    const amount = ref(2)
    const sentence = ref('')

    const randomWordSelector = (words: string[]) => {
        return words[Math.floor(Math.random() * words.length)];
    }

    const generate = () => {
        sentence.value = ''

        for(let i = 0; i < amount.value; i++) {
            sentence.value += `The ${randomWordSelector(adjectives)} ${randomWordSelector(nouns)} ${randomWordSelector(adverbs)} ${randomWordSelector(verbs)} because some ${randomWordSelector(nouns)} ${randomWordSelector(adverbs)} ${randomWordSelector(verbs)} ${randomWordSelector(prepositions)} ${randomWordSelector(adjectives)} ${randomWordSelector(nouns)}. `
        }
    }

    watch([amount], () => {
        generate()
    })

    return {
        sentence,
        generate,
        amount
    }
}