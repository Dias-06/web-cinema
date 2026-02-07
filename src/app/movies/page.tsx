'use client'
import { useSearchParams } from 'next/navigation'
import React from 'react'

const movies = () => {
  const sp = useSearchParams()
  const p = new URLSearchParams(sp.toString())
  console.log(p)
  return (
    <div>movies</div>
  )
}

export default movies