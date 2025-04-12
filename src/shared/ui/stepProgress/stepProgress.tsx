import React from "react";
import cls from './stepProgress.module.sass'
interface StepProgressProps {
    currentStep: number;
    totalSteps: number;
}

export const StepProgress: React.FC<StepProgressProps> = ({ currentStep, totalSteps }) => {
    const progressPercent = ((currentStep - 1) / (totalSteps - 1)) * 100;

    return (
        <div className={cls.progressContainer}>
            <div className={cls.progressThumb}>
                <div className={cls.progressBar}>
                    <div className={cls.progressFill} style={{ width: `${progressPercent}%` }} />
                    {[...Array(totalSteps)].map((_, index) => (
                        <div
                            key={index}
                            className={`${cls.step} ${index < currentStep ? cls.active : ""}`}
                        />
                    ))}
                </div>
            </div>

        </div>
    );
};


