export default function Input({ type='text', holder, name, id, value,change, label }) {
  return (
    <div className="ring p-2 flex gap-4 hover:ring-green-700 bg-gray-100 dark:text-gray-800 my-2">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        placeholder={holder}
        name={name}
        id={name || id}
        value={value}
        onChange={change}
        required
        className="grow outline-0 placeholder-gray-400 "
      />
    </div>
  );
}
