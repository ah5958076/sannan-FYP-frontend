import React from 'react'

const SuccessToast = () => {
  return (
    <button type="button"  class="fixed right-4 top-4 z-50 rounded-md bg-green-500 px-4 py-2 text-white transition hover:bg-green-600">
        <div class="flex items-center space-x-2">
            <span class="text-3xl"><i class="bx bx-check"></i></span>
            <p class="font-bold">Item Created Successfully!</p>
        </div>
    </button>
  )
}

export default SuccessToast
