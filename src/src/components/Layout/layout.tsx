import { ReactNode } from "react";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import style from './layout.module.scss'

export default function Layout({ children }: { children: ReactNode | ReactNode[]}) {
  return (
    <div className={style.layout}>
      <Header/>
      {children}
      <Footer/>
    </div>
  )
}