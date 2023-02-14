import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  const goProfile = (id: string) => {
    // 이메일을 뗀 부분을 id로 넘기기
    // ex ohjaehokor@naver.com -> ohjaehokor
    void router.push(`/users/${id}`);
  };

  return (
    <>
      <button
        type='button'
        onClick={() => {
          goProfile('ohjaehokor');
        }}
      >
        마이페이지
      </button>
    </>
  );
}
