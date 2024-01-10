export const InputLabel = ({ name, mt, value }) => {
  return (
    <>
      <label className="block leading-6 text-gray-900 font-medium">{name}</label>
      <div className={`${mt}`}>
        <input
          className="block w-full rounded-md border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset text-sm leading-6"
          placeholder={`Escribe tu ${name.toLowerCase()}...`}
          value={value}
        />
      </div>
    </>
  );
};
