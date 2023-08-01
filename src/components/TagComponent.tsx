type TagProps = {
    value: number,
    label: string,
    onRemove: (value: number) => void,
}

export const TagComponent: React.FC<TagProps> = ({ value, label, onRemove }) => {
    return (
        <div className="bg-blue-300 text-black flex justify-center items-center gap-2">
            {label}
            <button className="px-1 text-white bg-slate-800" onClick={() => onRemove(value)}>x</button>
        </div>
    );
};
