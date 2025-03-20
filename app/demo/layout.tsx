import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative min-h-screen">
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-primary font-semibold">
              Schoolgle
            </Link>
            <span className="text-muted-foreground">|</span>
            <h1 className="text-xl font-bold">Shadcn UI Demo</h1>
          </div>
          <ThemeToggle />
        </div>
      </header>
      <main>{children}</main>
    </div>
  )
}