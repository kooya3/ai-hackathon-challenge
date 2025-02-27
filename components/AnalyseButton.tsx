"use client"

import { useFormStatus } from "react-dom"

function AnalyseButton() {

    const { pending } = useFormStatus();

  return (
    <button
    type="submit"
    disabled={pending}
    className="px-6 py-2"
    >

    </button>
  )
}

export default AnalyseButton