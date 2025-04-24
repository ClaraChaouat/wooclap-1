export default function SpeakerNotes({ value, onChange }) {
  return (
    <div className="bg-white">
      <textarea
        placeholder="Click here to add speaker notes"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-12 w-full rounded border-0 p-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring focus:ring-blue-300"
      />
    </div>
  );
}
