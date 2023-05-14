import { ReactElement } from "react"

export default function UserHome() {
  return (
    <>
      <main></main>
    </>
  )
}

UserHome.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>
}