import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function index() {
  const router = useRouter()

  useEffect(() => {
    router.push('/delivery')
  }, [])

  return <div></div>
}
