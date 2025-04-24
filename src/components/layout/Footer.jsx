export default function Footer() {
  return (
    <div className="flex items-center justify-between border bg-white px-6 py-4 pt-4 shadow">
      <button className="text-sm text-gray-500 hover:underline">Discard</button>
      <button className="rounded-2xl bg-[#146aff] px-5 py-2 text-sm text-white hover:bg-blue-700">
        Save
      </button>
    </div>
  );
}
