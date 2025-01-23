import { type FC, type ReactNode, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { type TestInterface, testConstant } from './typescript'

type Props = TestInterface & {
  readonly children: ReactNode
}

export const ProtectedRoute: FC<Props> = ({ children }) => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/login' + testConstant)
  }, [navigate])

  return children
}
