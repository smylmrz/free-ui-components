import { nouns } from "./nouns";
import { verbs } from "./verbs";
import { adjectives } from "./adjectives";
import { adverbs } from "./adverbs";
import { prepositions } from "./prespositions";

import { ref, watch } from "vue";
export const useSentenceGenerator = () => {

    const sentenceAmount = ref(1)
    const paragraphAmount = ref(1)
    const sentence = ref('')

    const randomWordSelector = (words: string[]) => {
        return words[Math.floor(Math.random() * words.length)];
    }

    const generate = () => {
        sentence.value = ''

        for (let p = 0; p < paragraphAmount.value; p++) {

            for(let i = 0; i < sentenceAmount.value; i++) {
                sentence.value += `The ${randomWordSelector(adjectives)} ${randomWordSelector(nouns)} ${randomWordSelector(adverbs)} ${randomWordSelector(verbs)} because some ${randomWordSelector(nouns)} ${randomWordSelector(adverbs)} ${randomWordSelector(verbs)} ${randomWordSelector(prepositions)} ${randomWordSelector(adjectives)} ${randomWordSelector(nouns)}. `
            }

            if (paragraphAmount.value > 1) {
                sentence.value+= '</br> </br>'
            }
        }
    }

    watch([sentenceAmount, paragraphAmount], () => {
        generate()
    })

    return {
        sentence,
        generate,
        sentenceAmount,
        paragraphAmount
    }
}