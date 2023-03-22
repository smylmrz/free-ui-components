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
        class: 'bg-[#FF6832] px-20 md:px-40 text-white'
    },
    {
        code: 'Space',
        class: 'bg-[#FEBE00] w-full md:!w-2/3'
    },
    {
        code: 'ControlLeft',
        modifier: 'CTRL',
        class: 'bg-[#838A8C] text-white w-32 md:w-60'
    },
    {
        code: 'ControlRight',
        modifier: 'CTRL',
        class: 'bg-[#838A8C] text-white w-432 md:w-60'
    },
    {
        code: 'AltLeft',
        class: 'bg-[#838A8C] text-white'
    },
    {
        code: 'AltRight',
        class: 'bg-[#838A8C] text-white'
    },
    {
        code: 'ShiftLeft',
        class: 'bg-[#838A8C] text-white w-80 md:w-96'
    },
    {
        code: 'ShiftRight',
        class: 'bg-[#838A8C] text-white w-80 md:w-96'
    },
    {
        code: 'Tab',
        class: 'bg-[#838A8C] text-white'
    },
    {
        code: 'End',
        class: 'bg-[#838A8C] text-white'
    },
    {
        code: 'Home',
        class: 'bg-[#838A8C] text-white'
    },
    {
        code: 'CapsLock',
        modifier: 'Caps',
        class: 'bg-[#838A8C] text-white'
    },
    {
        code: 'Backspace',
        class: 'bg-[#838A8C] text-white w-80 md:w-auto px-20'
    },
    {
        code: 'MetaLeft',
        class: 'bg-[#838A8C] text-white'
    },
    {
        code: 'MetaRight',
        class: 'bg-[#838A8C] text-white'
    },
    {
        code: 'Backquote',
        class: 'bg-[#838A8C] text-white'
    },
    {
        code: 'PageUp',
        modifier: 'pgup',
        class: 'bg-[#838A8C] text-white'
    },
    {
        code: 'PageDown',
        modifier: 'pgdn',
        class: 'bg-[#838A8C] text-white'
    },
    {
        code: 'Delete',
        modifier: 'del',
        class: 'bg-[#838A8C] text-white'
    },
    {
        code: 'ArrowUp',
        modifier: '⌃',
        class: 'bg-[#838A8C] text-white'
    },
    {
        code: 'ArrowDown',
        modifier: '⌃',
        class: 'bg-[#838A8C] text-white rotate-180'
    },
    {
        code: 'ArrowLeft',
        modifier: '⌃',
        class: 'bg-[#838A8C] text-white -rotate-90'
    },
    {
        code: 'ArrowRight',
        modifier: '⌃',
        class: 'bg-[#838A8C] text-white rotate-90'
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
