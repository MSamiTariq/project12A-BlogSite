import React, { ReactNode } from "react"
import Header from "./Header"

type LayoutProps = {
  children: ReactNode
}

export default ({ children }: LayoutProps) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}
