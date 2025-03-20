import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { DemoComponents } from "@/components/demo-components"

export default function DemoPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8">Shadcn UI Components</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Button Examples */}
        <Card>
          <CardHeader>
            <CardTitle>Buttons</CardTitle>
            <CardDescription>Various button styles from Shadcn UI</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="flex gap-4">
              <Button>Default</Button>
              <Button variant="secondary">Secondary</Button>
            </div>
            <div className="flex gap-4">
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
            </div>
            <div className="flex gap-4">
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </div>
          </CardContent>
        </Card>
        
        {/* Card Examples */}
        <Card>
          <CardHeader>
            <CardTitle>Cards</CardTitle>
            <CardDescription>Card components for displaying content</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Cards provide a flexible container for displaying content and actions.</p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button>Save</Button>
          </CardFooter>
        </Card>
        
        {/* More Examples */}
        <Card>
          <CardHeader>
            <CardTitle>Building with Shadcn UI</CardTitle>
            <CardDescription>A component library for React</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Shadcn UI provides beautifully designed components that you can copy and paste into your apps.</p>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Learn More</Button>
          </CardFooter>
        </Card>
      </div>
      
      <div className="mt-10">
        <DemoComponents />
      </div>
      
      <div className="mt-8 text-center">
        <Link href="/">
          <Button variant="outline" className="gap-2">
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  )
}