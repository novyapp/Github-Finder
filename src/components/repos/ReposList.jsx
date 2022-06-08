import React from 'react'

export default function ReposList({repos}) {
  return (
    <div className='rounded-lg shadow-lg car bg-base-100'>
        <div className="card-body">
            <h2 className="text-3xl my-4 font-bold card-title">
                Latest respo
            </h2>
            {repos.map((repo) => (
                <h3>{repo.name}</h3>
            ))}
        </div>
    </div>
  )
}
