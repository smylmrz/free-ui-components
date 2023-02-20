export const generatePreviewCode = () => {

    const punctuation = (symbol: string) => {
        return `<span class="token punctuation">${symbol}</span>`
    }

    const attributeWithValues = (attr: string, values: string) => {
        return `<span class="token attr-name">${attr}</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>${values}<span class="token punctuation">"</span></span>`
    }

    const opener = () => {
        return punctuation('&lt;')
    }

    const closer = () => {
        return punctuation('&gt;')
    }

    const openTag = (tag: string) => {
        return `<span class="token tag">${opener()}${tag}</span>`
    }

    const closeTag = (tag: string) => {
        return `<span class="token tag"><span class="token punctuation">&lt;/</span>${tag}</span>${closer()}`
    }

    return {
        openTag,
        closeTag,
        opener,
        closer,
        attributeWithValues
    }

}