export default function SearchInput({ placeHolder }) {
  return (
    <div className="relative w-full h-12 mt-6">
      <label className="absolute left-[14px] top-[12px]" htmlFor="search-input">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.3">
            <circle
              cx="11.0647"
              cy="11.0647"
              r="6.31471"
              stroke="#0F0D23"
              strokeWidth="1.5"
            />
            <path
              d="M16.0924 15.8442L19 18.6467"
              stroke="#0F0D23"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </g>
        </svg>
      </label>
      <input
        type="text"
        className="w-full h-full text-[#C4C4C4] rounded-[14px] text-[14px] px-12"
        placeholder={placeHolder}
        aria-label="Search"
      />
    </div>
  )
}
