import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Code2, Globe, Smartphone, Zap, Shield, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      {/* Hero Section */}
      <section className="flex min-h-screen flex-col items-center justify-center px-4 py-20">
        <div className="text-center">
          <h1 className="mb-6 text-6xl font-bold tracking-tight text-zinc-900 dark:text-white md:text-8xl">
            ROOT <span className="green">360</span>
          </h1>
          <p className="mb-8 text-xl text-zinc-600 dark:text-zinc-400 md:text-2xl">
            Complete Software Solutions for Modern Businesses
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="text-lg">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="text-lg">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-4xl font-bold text-zinc-900 dark:text-white">
            Our Services
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <Code2 className="mb-2 h-10 w-10 green" />
                <CardTitle>Custom Development</CardTitle>
                <CardDescription>
                  Tailored software solutions built to your exact specifications
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Globe className="mb-2 h-10 w-10 green" />
                <CardTitle>Web Applications</CardTitle>
                <CardDescription>
                  Modern, responsive web apps that scale with your business
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Smartphone className="mb-2 h-10 w-10 green" />
                <CardTitle>Mobile Solutions</CardTitle>
                <CardDescription>
                  Native and cross-platform mobile applications
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="mb-2 h-10 w-10 green" />
                <CardTitle>Performance Optimization</CardTitle>
                <CardDescription>
                  Lightning-fast applications that deliver exceptional UX
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="mb-2 h-10 w-10 green" />
                <CardTitle>Security First</CardTitle>
                <CardDescription>
                  Enterprise-grade security for your peace of mind
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Users className="mb-2 h-10 w-10 green" />
                <CardTitle>Consulting</CardTitle>
                <CardDescription>
                  Expert guidance for your digital transformation journey
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-4xl rounded-lg bg-blue-600 p-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="mb-8 text-xl text-blue-100">
            Let&apos;s build something amazing together
          </p>
          <Button size="lg" variant="secondary" className="text-lg">
            Contact Us Today
          </Button>
        </div>
      </section>
    </div>
  );
}
