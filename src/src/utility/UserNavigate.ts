import { useUser } from "@auth0/nextjs-auth0";
import { useRouter } from "next/router";

export default function Navigate(path?: string): void {
  const { user } = useUser();
  const router = useRouter();

  router.push(`/${user?.nickname}/${path ? path : ""}`);
}
