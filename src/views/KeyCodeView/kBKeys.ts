export interface KBKey {
    code: string;
    modifier?: string;
    class?: string
}

export const kBKeys = <KBKey[]>[
    {
        code: 'Escape',
        modifier: 'esc',
        class: 'bg-[#55D5B7] text-white'
    },
    {
        code: 'Enter',
        class: 'bg-[#FF6832] text-white px-20 md:px-40'
    },
    {
        code: 'Space',
        class: 'bg-[#FEBE00] w-full md:!w-2/3'
    },
    {
        code: 'ControlLeft',
        modifier: 'CTRL',
        class: 'dark w-32 md:w-60'
    },
    {
        code: 'ControlRight',
        modifier: 'CTRL',
        class: 'dark w-432 md:w-60'
    },
    {
        code: 'AltLeft',
        class: 'dark'
    },
    {
        code: 'AltRight',
        class: 'dark'
    },
    {
        code: 'ShiftLeft',
        class: 'dark w-80 md:w-96'
    },
    {
        code: 'ShiftRight',
        class: 'dark w-80 md:w-96'
    },
    {
        code: 'Tab',
        class: 'dark'
    },
    {
        code: 'End',
        class: 'dark'
    },
    {
        code: 'Home',
        class: 'dark px-5'
    },
    {
        code: 'CapsLock',
        modifier: 'Caps',
        class: 'dark px-10 md:px-20'
    },
    {
        code: 'Backspace',
        class: 'dark w-80 md:w-auto px-20'
    },
    {
        code: 'MetaLeft',
        class: 'dark'
    },
    {
        code: 'MetaRight',
        class: 'dark'
    },
    {
        code: 'Backquote',
        class: 'dark'
    },
    {
        code: 'PageUp',
        modifier: 'pgup',
        class: 'dark px-5 '
    },
    {
        code: 'PageDown',
        modifier: 'pgdn',
        class: 'dark px-5 '
    },
    {
        code: 'Delete',
        modifier: 'del',
        class: 'dark '
    },
    {
        code: 'ArrowUp',
        modifier: '⌃',
        class: 'dark'
    },
    {
        code: 'ArrowDown',
        modifier: '⌃',
        class: 'dark rotate-180'
    },
    {
        code: 'ArrowLeft',
        modifier: '⌃',
        class: 'dark -rotate-90'
    },
    {
        code: 'ArrowRight',
        modifier: '⌃',
        class: 'dark rotate-90'
    },
    {
        code: "Digit0",
        class: "digit"
    },
    {
        code: "Digit1",
        class: "digit"
    },
    {
        code: "Digit2",
        class: "digit"
    },
    {
        code: "Digit3",
        class: "digit"
    },
    {
        code: "Digit4",
        class: "digit"
    },
    {
        code: "Digit5",
        class: "digit"
    },
    {
        code: "Digit6",
        class: "digit"
    },
    {
        code: "Digit7",
        class: "digit"
    },
    {
        code: "Digit8",
        class: "digit"
    },
    {
        code: "Digit9",
        class: "digit"
    },

]
