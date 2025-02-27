"use client"

import { useFormStatus } from "react-dom"

function AnalyseButton() {

    const { pending } = useFormStatus();

  return (
    <button
    type="submit"
    disabled={pending}
    className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2"
    >

    </button>
  )
}

export default AnalyseButton