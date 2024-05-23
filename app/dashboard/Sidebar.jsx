"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'


export default function Sidebar() {

    const path = usePathname()

    const links = [
      {
        name:"Dashboard",
        href:"/dashboard"
      },
      {
        name:"Cards",
        href:"/dashboard/card"
      },
      {
        name:"Invoices",
        href:"/dashboard/invoices"
      }
    ]
    return (
      <>
        <div className="w-56 h-screen bg-slate-800 text-warning-300 py-10 pl-2 mr-8 flex flex-col gap-3">
          {links.map(link => {
            return (
              <Link
                href={link.href}
                key={link.name}
                className={`
                ${path === link.href ? 'bg-sky-100 text-slate-800' : ''}
                `}
                >
                  {link.name}
              </Link>
            )
          })}
        </div>
      </>
  )
}
