import { ReactNode } from "react";
import Header from "../Header/header";
import Footer from "../Footer/footer";

export default function Layout({ children }: { children: ReactNode | ReactNode[]}) {
  return (
    <div>
      <Header/>
      {children}
      <Footer/>
    </div>
  )
}