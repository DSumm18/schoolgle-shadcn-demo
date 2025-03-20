import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="text-2xl font-bold text-primary">
              Schoolgle
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link href="/demo">
              <Button>View Demo</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Schoolgle - AI-Powered Tools for <span className="text-blue-500 dark:text-blue-400">Educators</span>
                </h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Schoolgle helps teachers save time, reduce stress, and focus on what matters most—their students and
                  their wellbeing.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/demo">
                  <Button size="lg" className="gap-1">
                    View Shadcn UI Demo
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Schoolgle. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}