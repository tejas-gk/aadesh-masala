/* eslint-disable react/prop-types */
export default function TagButton({ tag, selectedTag, onClick }) {
    return (
        <button
            onClick={() => onClick(tag)}
            className={`px-4 py-2  text-sm  uppercase font-bold ${
                selectedTag === tag ? "underline underline-offset-3 decoration-2 decoration-red-500 text-red-500" : ""
            }`}
        >
            {tag}
        </button>
    );
}