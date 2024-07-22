import { useState } from "react"

export default function ReadMore({ text, readMoreColor }) {
    const [isReadMore, setIsReadMore] = useState(true)
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore)
    }

    return (
      <p className="text-sm text-[#969696]">
        {isReadMore && text ? text.slice(0, 100) : text}
        <span
          onClick={toggleReadMore}
          className={`read-or-hide text-[${readMoreColor}]`}
        >
          {isReadMore ? '... Read more' : ' Show less'}
        </span>
      </p>
    )
  }
