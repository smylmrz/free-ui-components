export interface QRCodeType {
    name: string;
    title: string;
    subtitle?: string;
    starter?: string;
    placeholder?: string
}

export const availableTypes = <QRCodeType[]>[
    {
        name: "website",
        title: "Website URL",
        subtitle: "Link to any website",
        starter: "https://",
        placeholder: "Website URL"
    },
    {
        name: "text",
        title: "Text",
        subtitle: "Display a short text"
    }
]