import { useRouter } from 'next/router'
import { paths } from '../../constants/paths'
import useTokenCheck from '../../hooks/auth/useTokenCheck'

type ValueOf<T> = T[keyof T]

type Props = {
  path?: ValueOf<typeof paths>
  children: JSX.Element
}

export const RequireNoAuth = ({ path = '/', children: element }: Props): JSX.Element => {
  const router = useRouter()
  const { isAuthority } = useTokenCheck()

  if (typeof window !== 'undefined' && isAuthority === true) {
    void router.replace(path)
  }

  return isAuthority ?? false ? <div>x</div> : element
}
