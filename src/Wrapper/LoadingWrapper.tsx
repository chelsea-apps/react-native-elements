import React from 'react'

export type LoadingWrapperProps = {
  loading: boolean
  children: React.ReactNode
  indicator: React.ReactNode
}
const LoadingWrapper = ({
  loading,
  indicator,
  children,
}: LoadingWrapperProps) => {
  if (loading) return <>{indicator}</>

  return <>{children}</>
}

export default LoadingWrapper
