import { useUser } from "@auth0/nextjs-auth0";
import { useRouter } from "next/router";

export default function useNavigate() {
  const router = useRouter();
  const { user } = useUser();

  const authNavigate = (path?: string) => {
    router.push(`/${user?.nickname}/${path ? path : ''}`)
  }

  return {
    authNavigate
  }
}