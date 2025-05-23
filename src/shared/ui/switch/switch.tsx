import React from 'react';
import cls from "./switch.module.sass";

interface SwitchProps {
    disabled?: boolean;
    activeSwitch: boolean;
    onChangeSwitch: (value: boolean) => void;
}

export const Switch = React.memo(({
                                      disabled = false,
                                      activeSwitch,
                                      onChangeSwitch,
                                  }: SwitchProps) => {
    return (
        <>
            <div className={cls.mainBody}>
                <button
                    type="button"
                    disabled={disabled}
                    className={`${cls.mainSwitchBox}  
            ${disabled
                        ? cls.disabled
                        : cls.notDisabled
                    }
            ${!activeSwitch
                        ? cls.switchOn
                        : cls.switchOff
                    }`}
                    onClick={() => onChangeSwitch(!activeSwitch)}
                >
                    {!activeSwitch ? (
                        <span className={cls.mainSwitchBox__onSwitch}></span>
                    ) : (
                        <span className={cls.mainSwitchBox__offSwitch}></span>
                    )}
                </button>
            </div>
        </>
    );
});