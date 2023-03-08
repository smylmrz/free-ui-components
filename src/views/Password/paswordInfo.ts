export interface PasswordInfo {
    title: string;
    body: string
}

export const passwordInfo = <PasswordInfo[]>[
    {
        title: "Make them unique and random",
        body: "81% of data breaches are caused by reused or weak passwords, so random, unique passwords are your best defense against online threats."
    },
    {
        title: "The keyword in unique",
        body: "Using the same password multiple times will increase the chance of it being exposed. You can protect yourself by using a generator to create unique and random passwords."
    },
    {
        title: "Randomness makes it even stronger",
        body: "Random passwords are hard to guess and harder for computer programs to crack. If there's a pattern, the odds of an attacker using a brute force attack and cracking it goes up exponentially."
    }
]