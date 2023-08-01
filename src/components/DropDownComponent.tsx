type DropdownProps = {
    options: { value: number, label: string }[],
    onAddTag: (option: { value: number, label: string }) => void,
}

export const DropdownComponent: React.FC<DropdownProps> = ({ options, onAddTag }) => {
    const handleOptionClick = (option: { value: number, label: string }) => {
        onAddTag(option);
    };

    return (
        <div className="top-16 w-[50rem] bg-slate-500 absolute" >
            {options.map(option => <div onClick={() => handleOptionClick(option)}>{option.label}</div>)}
        </div >
    );
};
