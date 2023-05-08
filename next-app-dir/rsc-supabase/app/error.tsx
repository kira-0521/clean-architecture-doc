"use client"

const error = ({ error }: { error: Error }) => {
  return (
    <div>
      <p className="my-6 text-center text-red-500">{JSON.stringify(error)}</p>
    </div>
  )
}

export default error
