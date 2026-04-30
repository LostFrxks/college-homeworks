export default function SearchInput({ value, onChange }) {
  return (
    <input
      className="search-input"
      type="text"
      value={value}
      placeholder="Search by user name..."
      onChange={(event) => onChange(event.target.value)}
    />
  )
}
