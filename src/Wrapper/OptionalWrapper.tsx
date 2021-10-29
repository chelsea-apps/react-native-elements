import React from 'react'

type OptionalWrapperProps<T> = {
  data: T | null
  children: React.ReactNode
  elseComponent?: React.ReactNode
}

/**
 * Returns the JSX component if data passed in is not null.
 * @param data - The data to to check against.
 * @returns Either the children or null.
 */
const OptionalWrapper = <T extends unknown>({
  data,
  children,
  elseComponent,
}: OptionalWrapperProps<T>) => {
  return <>{data ? children : elseComponent || <></>}</>
}

export default OptionalWrapper
