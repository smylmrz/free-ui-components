import { getImagePath } from "../../utils/getImagePath";

export interface PasswordInfo {
    title: string;
    body: string,
    image: string;
    imageAlt?: string
}

export const passwordInfo = <PasswordInfo[]>[
    {
        title: "Why should it be unique?",
        body: "If you use the same password for both your email account and your bank account login, an attacker only needs to steal one password to get access to both accounts, doubling your exposure. If you've used that same password for 14 different accounts, you're making the attacker's job very, very easy. You can protect yourself by using a generator to create unique passwords that are easy to remember.",
        image: getImagePath() + "password-generator/unique-password.png"
    },
    {
        title: "Why should it be random?",
        body: "Random passwords are hard to guess and harder for computer programs to crack. If there's a discernible pattern, the odds of an attacker using a brute force attack and gaining access to your account goes up exponentially. Random passwords might contain a jumble of unrelated characters, but combining unrelated words also works.",
        image: getImagePath() + "password-generator/random-password.png"
    }
]