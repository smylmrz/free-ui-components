import { ref, watch } from "vue";
import { memorableWords } from "./memorableWords";

export const usePasswordGenerator = () => {
    const randomMinLength = 16
    const randomMaxLength = 40
    const memoMinLength = 3
    const memoMaxLength = 12
    const availableTypes = ref(["Random", "Memorable"])
    const passwordType = ref(availableTypes.value[0])
    const randomPasswordLength = ref(randomMinLength)
    const memorablePasswordLength = ref(memoMinLength)
    const includeUppercase = ref(false)
    const includeNumbers = ref(false)
    const includeSymbols = ref(false)
    const capitalize = ref(false)
    const generatedPassword  = ref('')
    const isGenerating = ref(false)

    const selectType = (type: string) => {
        passwordType.value = type
    }

    // Function to create a random password
    const generateRandomPassword = () => {
        isGenerating.value = true

        generatedPassword.value = ''

        const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
        const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numberChars = '0123456789';
        const symbolChars = '!@#$%^&*()_+-={}[]|:;"<>,.?/';

        // create a base character set consisting of only lowercase letters
        let baseChars = lowercaseChars;

        // append additional character sets based on user parameters
        if (includeUppercase.value) {
            baseChars += uppercaseChars;
        }

        if (includeNumbers.value) {
            baseChars += numberChars;
        }

        if (includeSymbols.value) {
            baseChars += symbolChars;
        }

        // generate a random password by selecting characters from the base character set

        for (let i = 0; i < randomPasswordLength.value; i++) {
            const randomIndex = Math.floor(Math.random() * baseChars.length);
            generatedPassword.value += baseChars[randomIndex];
        }

        setTimeout(() => {
            isGenerating.value = false
        }, 500)
    }

    const randomWordSelector = (words: string[]) => {
        return words[Math.floor(Math.random() * words.length)];
    }

    const generateMemorablePassword = () => {
        isGenerating.value = true

        generatedPassword.value = ''

        for (let i = 0; i < memorablePasswordLength.value; i++) {
            generatedPassword.value += randomWordSelector(memorableWords)

            if (i !== memorablePasswordLength.value - 1) {
                generatedPassword.value += '-'
            }
        }

        if (capitalize.value) {
            generatedPassword.value = generatedPassword.value.charAt(0).toUpperCase() + generatedPassword.value.slice(1)
        }

        setTimeout(() => {
            isGenerating.value = false
        }, 500)
    }

    watch([capitalize, memorablePasswordLength], () => {
        generateMemorablePassword()
    })

    watch([passwordType, randomPasswordLength, includeUppercase, includeNumbers, includeSymbols], () => {
        generateRandomPassword()
    })

    return {
        memoMinLength,
        memoMaxLength,
        randomMinLength,
        randomMaxLength,
        randomPasswordLength,
        memorablePasswordLength,
        includeUppercase,
        includeNumbers,
        includeSymbols,
        generatedPassword,
        generateRandomPassword,
        generateMemorablePassword,
        isGenerating,
        availableTypes,
        passwordType,
        selectType,
        capitalize
    }
}