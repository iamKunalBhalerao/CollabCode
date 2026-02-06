import React from 'react'

export default function EditorLoader() {
  return (
    <>
    <div className="">
        <div className="w-full h-screen bg-gray-100 p-8 space-y-4">
            <div className="h-12 bg-linear-to-r from-gray-200 via-gray-100 to-gray-200 rounded animate-pulse"></div>
            <div className="space-y-3">
                <div className="h-4 bg-linear-to-r from-gray-200 via-gray-100 to-gray-200 rounded animate-pulse w-full"></div>
                <div className="h-4 bg-linear-to-r from-gray-200 via-gray-100 to-gray-200 rounded animate-pulse w-5/6"></div>
                <div className="h-4 bg-linear-to-r from-gray-200 via-gray-100 to-gray-200 rounded animate-pulse w-4/6"></div>
            </div>
            <div className="space-y-3 mt-8">
                <div className="h-4 bg-linear-to-r from-gray-200 via-gray-100 to-gray-200 rounded animate-pulse w-full"></div>
                <div className="h-4 bg-linear-to-r from-gray-200 via-gray-100 to-gray-200 rounded animate-pulse w-5/6"></div>
                <div className="h-4 bg-linear-to-r from-gray-200 via-gray-100 to-gray-200 rounded animate-pulse w-3/6"></div>
            </div>
        </div>
    </div>
    </>
  )
}
