import style from "./footer.module.scss";
import { mrsSaintDelafield } from "@/utility/font";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <h2 className={`${mrsSaintDelafield.className} ${style.title}`}>
          Tech Itokawa
        </h2>
      </div>
    </footer>
  );
}
