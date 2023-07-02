/**
 * The `InputField` component is a reusable input field component in TypeScript React that takes in an
 * id, label, value, and onChange function as props.
 * @param {Props} props - The `props` parameter in the `InputField` component is an object that
 * contains the following properties:
 * @returns The `InputField` component is returning a JSX element, which is a div containing a label
 * and an input element. The label displays the `label` prop followed by a colon, and the input element
 * has the following attributes: id, type, min, value, onChange, and className.
 */
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
