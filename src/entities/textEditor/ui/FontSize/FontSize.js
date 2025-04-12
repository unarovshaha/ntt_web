import * as React from 'react';


import {$patchStyleText} from '@lexical/selection';
import {$getSelection} from 'lexical';

import './fontSize.css';

const MIN_ALLOWED_FONT_SIZE = 8;
const MAX_ALLOWED_FONT_SIZE = 72;
const DEFAULT_FONT_SIZE = 15;



export default function FontSize({selectionFontSize, disabled, editor,}) {
    const [inputValue, setInputValue] = React.useState(selectionFontSize);
    /**
     * Calculates the new font size based on the update type.
     * @param currentFontSize - The current font size
     * @param updateType - The type of change, either increment or decrement
     * @returns the next font size
     * */
    const calculateNextFontSize = (currentFontSize, updateType) => {
        if (!updateType) {
            return currentFontSize;
        }

        let updatedFontSize = currentFontSize;
        switch (updateType) {
            case 2:
                switch (true) {
                    case currentFontSize > MAX_ALLOWED_FONT_SIZE:
                        updatedFontSize = MAX_ALLOWED_FONT_SIZE;
                        break;
                    case currentFontSize >= 48:
                        updatedFontSize -= 12;
                        break;
                    case currentFontSize >= 24:
                        updatedFontSize -= 4;
                        break;
                    case currentFontSize >= 14:
                        updatedFontSize -= 2;
                        break;
                    case currentFontSize >= 9:
                        updatedFontSize -= 1;
                        break;
                    default:
                        updatedFontSize = MIN_ALLOWED_FONT_SIZE;
                        break;
                }
                break;

            case 1:
                switch (true) {
                    case currentFontSize < MIN_ALLOWED_FONT_SIZE:
                        updatedFontSize = MIN_ALLOWED_FONT_SIZE;
                        break;
                    case currentFontSize < 12:
                        updatedFontSize += 1;
                        break;
                    case currentFontSize < 20:
                        updatedFontSize += 2;
                        break;
                    case currentFontSize < 36:
                        updatedFontSize += 4;
                        break;
                    case currentFontSize <= 60:
                        updatedFontSize += 12;
                        break;
                    default:
                        updatedFontSize = MAX_ALLOWED_FONT_SIZE;
                        break;
                }
                break;

            default:
                break;
        }
        return updatedFontSize;
    };
    /**
     * Patches the selection with the updated font size.
     */

    const updateFontSizeInSelection = React.useCallback(
        (newFontSize, updateType) => {
            const getNextFontSize = (prevFontSize) => {
                if (!prevFontSize) {
                    prevFontSize = `${DEFAULT_FONT_SIZE}px`;
                }
                prevFontSize = prevFontSize.slice(0, -2);
                const nextFontSize = calculateNextFontSize(
                    Number(prevFontSize),
                    updateType,
                );
                return `${nextFontSize}px`;
            };

            editor.update(() => {
                if (editor.isEditable()) {
                    const selection = $getSelection();
                    if (selection !== null) {
                        $patchStyleText(selection, {
                            'font-size': newFontSize || getNextFontSize,
                        });
                    }
                }
            });
        },
        [editor],
    );

    const handleKeyPress = (e) => {
        const inputValueNumber = Number(inputValue);

        if (['e', 'E', '+', '-'].includes(e.key) || isNaN(inputValueNumber)) {
            e.preventDefault();
            setInputValue('');
            return;
        }

        if (e.key === 'Enter') {
            e.preventDefault();

            let updatedFontSize = inputValueNumber;
            if (inputValueNumber > MAX_ALLOWED_FONT_SIZE) {
                updatedFontSize = MAX_ALLOWED_FONT_SIZE;
            } else if (inputValueNumber < MIN_ALLOWED_FONT_SIZE) {
                updatedFontSize = MIN_ALLOWED_FONT_SIZE;
            }
            setInputValue(String(updatedFontSize));
            updateFontSizeInSelection(String(updatedFontSize) + 'px', null);
        }
    };

    const handleButtonClick = (updateType) => {
        if (inputValue !== '') {
            const nextFontSize = calculateNextFontSize(
                Number(inputValue),
                updateType,
            );
            updateFontSizeInSelection(String(nextFontSize) + 'px', null);
        } else {
            updateFontSizeInSelection(null, updateType);
        }
    };

    React.useEffect(() => {
        setInputValue(selectionFontSize);
    }, [selectionFontSize]);

    return (
        <>
            <button
                type="button"
                disabled={
                    disabled ||
                    (selectionFontSize !== '' &&
                        Number(inputValue) <= MIN_ALLOWED_FONT_SIZE)
                }
                onClick={() => handleButtonClick(2)}
                className="toolbar-item font-decrement">
                <i className="format minus-icon" />
            </button>

            <input
                type="number"
                value={inputValue}
                disabled={disabled}
                className="toolbar-item font-size-input"
                min={MIN_ALLOWED_FONT_SIZE}
                max={MAX_ALLOWED_FONT_SIZE}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
            />

            <button
                type="button"
                disabled={
                    disabled ||
                    (selectionFontSize !== '' &&
                        Number(inputValue) >= MAX_ALLOWED_FONT_SIZE)
                }
                onClick={() => handleButtonClick(1)}
                className="toolbar-item font-increment">
                <i className="format add-icon" />
            </button>
        </>
    );
}
