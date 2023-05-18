import { useRouter } from "next/router";
import style from "./button.module.scss";

export function BackPreviousURLButton() {
  const router = useRouter();

  return (
    <button
      type="button"
      className={style.cancelBtn}
      onClick={() => router.back()}
    >
      Cancel
    </button>
  );
}
