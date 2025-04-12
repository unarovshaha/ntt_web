// import {
//     $getSelection,
//     $isRangeSelection,
//     COMMAND_PRIORITY_LOW,
//     createCommand,
//     DecoratorNode,
//     ElementNode, TextNode
// } from "lexical";
// import {useLexicalComposerContext} from "@lexical/react/LexicalComposerContext";
//
//
//
// export class ChangeToInput extends ElementNode {
//
//     constructor(key) {
//         super(key);
//     }
//
//
//
//     static getType() {
//         return "input"
//     }
//
//     static clone(node) {
//         return new ChangeToInput(node?.__key)
//     }
//
//     createDOM() {
//         const span = document.createElement("span")
//         span.className = "input"
//         return span
//     }
//
//     updateDOM() {
//         return false;
//     }
//
//
//     // decorate(editor, config) {
//     //     return <span className={"input"}></span>
//     // }
//
//
//
// }
//
//
// const Highlight = ({children}) => {
//     return (
//         <span style={{color: "red"}}>
//             {children}
//         </span>
//     )
// }
//
//
// export function $createInputNode() {
//     return new ChangeToInput()
// }
//
// function $IsInputNode(node) {
//     return node instanceof ChangeToInput
// }
//
//
//
//
//
// export const INSERT_INPUT_COMMAND = createCommand("insertInput")
//
import {
    $isTextNode,
    TextNode,
} from 'lexical';

export class ExtendedTextNode extends TextNode {
    constructor(text, key) {
        super(text, key);

    }

    static getType() {
        return 'extended-text';
    }

    static clone(node) {
        return new ExtendedTextNode(node.__text, node.__key);
    }

    static importDOM() {
        const importers = TextNode.importDOM();

        return {
            ...importers,
            code: () => ({
                conversion: patchStyleConversion(importers?.code),
                priority: 1
            }),
            em: () => ({
                conversion: patchStyleConversion(importers?.em),
                priority: 1
            }),
            span: () => ({
                conversion: patchStyleConversion(importers?.span),
                priority: 1
            }),
            strong: () => ({
                conversion: patchStyleConversion(importers?.strong),
                priority: 1
            }),
            sub: () => ({
                conversion: patchStyleConversion(importers?.sub),
                priority: 1
            }),
            sup: () => ({
                conversion: patchStyleConversion(importers?.sup),
                priority: 1
            }),
        };
    }

    static importJSON(serializedNode) {
        return TextNode.importJSON(serializedNode);
    }

    isSimpleText() {
        return (
            (this.__type === 'text' || this.__type === 'extended-text') &&
            this.__mode === 0
        );
    }

    exportDOM(editor) {
        console.log(editor)
        const {element} = super.exportDOM(editor);

        console.log(element)
        // if (element.getAttribute("input"))
        //***do whatever magic you want in here***

        return {
            element,
        };
    }

    exportJSON() {
        return {
            ...super.exportJSON(),
            type: 'extended-text',
            version: 1
        }
    }
}

export function $createExtendedTextNode(text, input) {
    return new ExtendedTextNode(text,input);
}

export function $isExtendedTextNode(node) {
    return node instanceof ExtendedTextNode;
}

function patchStyleConversion(originalDOMConverter) {
    return (node) => {
        const original = originalDOMConverter?.(node);
        if (!original) {
            return null;
        }
        const originalOutput = original.conversion(node);

        if (!originalOutput) {
            return originalOutput;
        }

        const backgroundColor = node.style.backgroundColor;
        const color = node.style.color;
        const fontFamily = node.style.fontFamily;
        const fontWeight = node.style.fontWeight;
        const fontSize = node.style.fontSize;
        const textDecoration = node.style.textDecoration;


        return {
            ...originalOutput,
            forChild: (lexicalNode, parent) => {
                const originalForChild = originalOutput?.forChild ?? ((x) => x);
                const result = originalForChild(lexicalNode, parent);
                if ($isTextNode(result)) {
                    const style = [
                        backgroundColor ? `background-color: ${backgroundColor}` : null,
                        color ? `color: ${color}` : null,
                        fontFamily ? `font-family: ${fontFamily}` : null,
                        fontWeight ? `font-weight: ${fontWeight}` : null,
                        fontSize ? `font-size: ${fontSize}` : null,
                        textDecoration ? `text-decoration: ${textDecoration}` : null,
                    ]
                        .filter((value) => value != null)
                        .join('; ');
                    if (style.length) {

                        return result.setStyle(style);
                    }
                }
                return result;
            }
        };
    };
}