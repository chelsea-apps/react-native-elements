import React from 'react'

export type LoadingWrapperProps = {
  /** Loading state */
  loading: boolean
  /** Page elements */
  children: React.ReactNode
  /** Loading indicator component (usually a GIF) */
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
