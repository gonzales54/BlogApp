import { ReactNode } from "react";
import Footer from "../Footer/footer";
import Header from "../Header/header";
import style from "./layout.module.scss";

export default function Layout({
  children,
}: {
  children: ReactNode | ReactNode[];
}) {
  return (
    <div className={style.layout}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
