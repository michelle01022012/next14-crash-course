import React from "react"

function Rootlayout({ children }) {
    return (
        <div>
            <h1 className="font-bold text-4xl">Posts</h1>
              {children}
        </div>
    )
}

export default Rootlayout