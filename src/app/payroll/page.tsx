import PayrollServices from "@/components/payroll/payroll"
import Footer from "@/ui/footer"
import Header from "@/ui/header"
import React from "react"

export default function Home() {
  return (
    <>
    <Header />
   <PayrollServices/>
      <Footer />
    </>
  )
}
