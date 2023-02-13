import { useRouter } from 'next/router'
import useTokenCheck from '../../hooks/auth/useTokenCheck'

type Props = {
  children: JSX.Element
}
export const RequireAuth = ({ children }: Props): JSX.Element => {
  const router = useRouter()
  const { isAuthority } = useTokenCheck()

  if (typeof window !== 'undefined' && isAuthority === false) {
    // ssr을 하는 next.js특성상, router.push가 서버에서 작동하지 않도록 조건 추가.
    // 처음에 isAuthority= undefined라서 false로 지정을 해야 작동함.
    void router.replace('/auth/login')
  }

  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  return isAuthority ? (
    children
  ) : (
    //    <button onClick={() => router.push('/auth/login')}>로그인해 주세요</button>
    <div></div>
  )
}
