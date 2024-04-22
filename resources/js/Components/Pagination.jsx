import { Link } from "@inertiajs/react";

export default function Pagination({ Links }) {
  return (
    <nav className="text-center mt-4">
      {Links.map((Li) => (
        <Link
          preserveScroll
          href={Li.url || ''}
          key={Li.label}
          className={
            "inline-block py-2 px-3 rounded-lg text-gray-200 text-xs " +
            (Li.active ? "bg-gray-950 " : " ") +
            (!Li.url ? "!text-gray-500 cursor-not-allowed " : "hover:bg-gray-950 ")
          }
          dangerouslySetInnerHTML={{ __html: Li.label }}></Link>
      ))}
    </nav>
  )
}
