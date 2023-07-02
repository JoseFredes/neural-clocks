interface Props {
  id: string;
  label: string;
  value: number;
  onChange: (value: number) => void;
}

export const InputField: React.FC<Props> = (props: Props) => {
  const { id, label, value, onChange } = props;
  return (
    <div className="mb-4">
      <label htmlFor={id} className="mr-2">
        {label}:
      </label>
      <input
        id={id}
        type="number"
        min="1"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="rounded-md border border-gray-300 px-2 py-1"
      />
    </div>
  );
};
