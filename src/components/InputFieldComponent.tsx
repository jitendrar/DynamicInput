import React, { useEffect } from "react";
import { TagComponent } from "./TagComponent";
import { DropdownComponent } from "./DropDownComponent";

type InputFieldProps = {
    options: { value: number, label: string }[],
};
export const InputFieldComponent: React.FC<InputFieldProps> = ({ options }) => {
    const [value, setValue] = React.useState<{ value: number, label: string }[]>([]);
    const [currentWord, setCurrentWord] = React.useState<string>('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value.includes(' ')) {
            const matchedOption = options.find(opt => opt.label === currentWord);
            if (matchedOption) {
                setValue([...value, matchedOption]);
            } else {
                setValue([...value, { value: 0, label: currentWord }]);
            }
            setCurrentWord('');
        } else {
            setCurrentWord(event.target.value);
        }
    };

    const handleRemoveTag = (valueToRemove: number) => {
        setValue(value.filter((opt: any) => opt.value !== valueToRemove));
    };

    const handleAddTag = (option: { value: number, label: string }) => {
        setValue([...value, option]);
        setCurrentWord('');
    };

    const total = value.reduce((sum, item) => {
        const itemValue = item.value;
        return isNaN(itemValue) ? sum : sum + itemValue;
    }, 0);

    return (
        <div>
            <p>Here I implemented SUM functionality for tags we can program any kind of dynamic Equation </p>
            <p>For an example calculation of Intrest Rate or TAX calculation based on value of Tag </p>
            <p>But Due to Time Limitation of Test I only implemented this </p>
            <div className="flex bg-slate-200 text-white justify-center h-screen items-center relative">

                <div className="relative">
                    <span className="text-black text-xl">
                        {total}
                    </span>
                    <div className="flex bg-slate-400 py-3 w-[50rem]">

                        <div className="flex ">
                            {value.map((item, index) => (
                                options.map(opt => opt.label).includes(item.label)
                                    ? <TagComponent value={item.value} label={item.label} onRemove={handleRemoveTag} />
                                    : item.label
                            ))}
                        </div>

                        <input type="text" className="text-black bg-slate-400 w-full" value={currentWord} onChange={handleInputChange} />
                        <DropdownComponent options={options} onAddTag={handleAddTag} />
                    </div>
                </div>
            </div>
        </div >
    );
};
