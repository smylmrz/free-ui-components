import { computed, ref, watch } from "vue";

interface PasswordStrength {
    label: string;
    class: string;
    color: string;
    icon?: string
}

export const usePasswordGenerator = () => {
    const minLength = 10
    const maxLength = 40
    const passwordLength = ref(16)
    const includeUppercase = ref(false)
    const includeNumbers = ref(false)
    const includeSymbols = ref(false)
    const generatedPassword  = ref('')

    const currentPasswordStrength = ref<PasswordStrength>({
        label: "Weak",
        class: "bg-red-500 w-1/4",
        color: 'text-red-700'
    })

    // Function to create a random password
    const generate = () => {
        // reset password
        generatedPassword.value = ''
        // define character sets for each parameter
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

        for (let i = 0; i < passwordLength.value; i++) {
            const randomIndex = Math.floor(Math.random() * baseChars.length);
            generatedPassword.value += baseChars[randomIndex];
        }
    }

    const hasAll = computed(() => {
        return includeUppercase.value && includeNumbers.value && includeSymbols.value
    })
    // any combination of 2/3
    const isOk = computed(() => {
        return (includeUppercase.value && includeNumbers.value) || (includeUppercase.value && includeSymbols.value) || (includeNumbers.value && includeSymbols)
    })

    // contains everything and is longer than 31 chars
    const isUnCrackable = computed(() => {
        return hasAll.value && passwordLength.value >= 32
    })

    // contains everything and is longer than 23 chars
    const isVeryStrong = computed(() => {
        return hasAll.value && passwordLength.value >= 24
    })

    // contains everything and is longer than 15 chars
    const isStrong = computed(() => {
        return isOk.value && passwordLength.value >= 16
    })

    // contains everything and is shorter than 15 chars
    const isGood = computed(() => {
        return hasAll.value && passwordLength.value >= 12
    })

    // contains everything and is shorter than 15 chars
    const isMedium = computed(() => {
        return isOk.value && passwordLength.value >= 12
    })

    const checkPasswordStrength = () => {
        if (isUnCrackable.value) {
            currentPasswordStrength.value = {
                label: "Uncrackable",
                class: "!bg-sky-500 w-full",
                color: "text-sky-500"
            }
            return
        }

        if (isVeryStrong.value) {
            currentPasswordStrength.value = {
                label: "Very Strong",
                class: "bg-green-500 w-5/6",
                color: "text-green-500"
            }
            return
        }

        if (isStrong.value) {
            currentPasswordStrength.value = {
                label: "Strong",
                class: "bg-green-300 w-3/4",
                color: "text-green-300"
            }
            return
        }

        if (isGood.value) {
            currentPasswordStrength.value = {
                label: "Good",
                class: "bg-orange-500 w-2/3",
                color: "text-orange-500"
            }
            return
        }

        if (isMedium.value) {
            currentPasswordStrength.value = {
                label: "Medium",
                class: "bg-orange-300 w-1/2",
                color: "text-orange-300"
            }
            return
        }

        currentPasswordStrength.value = {
            label: "Weak",
            class: "bg-red-500 w-1/4",
            color: 'text-red-700'
        }
    }

    watch([passwordLength, includeUppercase, includeNumbers, includeSymbols], () => {
        generate()
        checkPasswordStrength()
    })

    return {
        minLength,
        maxLength,
        passwordLength,
        includeUppercase,
        includeNumbers,
        includeSymbols,
        currentPasswordStrength,
        generatedPassword,
        generate,
    }
}