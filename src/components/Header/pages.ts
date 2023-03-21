export interface Page {
    label: string;
    to: string;
    subpages: Page[]
}

export const pages = <Page[]>[
    {
        label: "Components",
        to: "/components",
    },
    {
        label: "Generators",
        to: "/password-generator",
        subpages: [
            {
                label: "Password Generator",
                to: "/password-generator",
            },
            {
                label: "QR Code Generator",
                to: "/qr-code-generator",
            },
            {
                label: "Sentence Generator",
                to: "/sentence-generator",
            }
        ]
    },
    {
        label: "JSON Formatter",
        to: "/json-formatter",
    },
    // {
    //     label: "Fake APIs",
    //     to: "/fake-api",
    // },
]