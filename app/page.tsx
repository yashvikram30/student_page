"use client"
import Image from "next/image";
import { CustomButton } from "@/components/ui/button";
import { CustomCard, CardContent } from "@/components/ui/card";
import {
  ChevronRight,
  Users,
  Compass,
  BookOpen,
  Coffee,
  Activity,
  Heart,
  Globe,
} from "lucide-react";
import studentsImg from "@/components/images/students.jpg";


export default function StudentLife() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section with Parallax Effect */}
      <section className="relative h-[90vh] overflow-hidden">
        <div className="absolute inset-0 bg-black/60 backdrop-blur-md">
          <Image
            src={studentsImg}
            alt="Campus life"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/10 to-transparent">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.1),_transparent_50%)]" />
        </div>
        <div className="relative h-full">
          <div className="container mx-auto flex h-full items-center px-4">
            <div className="max-w-3xl">
              <h1 className="mb-6 text-5xl font-bold text-black md:text-6xl lg:text-7xl backdrop-blur-sm">
                Discover Your
                <span className="block bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent backdrop-blur-sm">
                  Student Journey
                </span>
              </h1>
              <p className="mb-8 text-xl text-black/90 md:text-2xl backdrop-blur-sm">
                Join a vibrant community where passion meets purpose, and every
                day brings new opportunities for growth.
              </p>
              <div className="flex flex-wrap gap-4">
                <CustomButton
                  size="lg"
                  className="rounded-full bg-primary hover:bg-primary/90 backdrop-blur-sm"
                >
                  Explore Campus Life
                </CustomButton>
                <CustomButton
                  size="lg"
                  variant="outline"
                  className="rounded-full border-white text-black  backdrop-blur-sm hover:bg-white/40"
                  onClick={()=>(window.location.href = "https://www.youtube.com/watch?v=eOnJjASnSY0")}
                >
                  Watch Video
                </CustomButton>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Banner */}
        <div className="absolute bottom-0 left-0 right-0 backdrop-blur-md">
          <div className="container mx-auto grid gap-8 bg-white/10 px-4 py-8 md:grid-cols-4">
            {[
              { number: "500+", label: "Student Organizations" },
              { number: "38", label: "Sports Clubs" },
              { number: "100+", label: "Cultural Events Yearly" },
              { number: "50+", label: "Countries Represented" },
            ].map((stat, index) => (
              <div key={index} className="text-center text-black">
                <div className="text-3xl font-bold md:text-4xl">
                  {stat.number}
                </div>
                <div className="text-sm opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Programs Section */}
      <section className="relative py-24">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
              Life at Campus
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Immerse yourself in a dynamic environment where academic
              excellence meets vibrant student life.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Users,
                title: "Student Communities",
                description:
                  "Join diverse groups and forge lifelong friendships",
              },
              {
                icon: Compass,
                title: "Campus Activities",
                description: "Explore hundreds of events and organizations",
              },
              {
                icon: BookOpen,
                title: "Academic Life",
                description: "Access world-class resources and support",
              },
              {
                icon: Coffee,
                title: "Social Spaces",
                description: "Connect in modern facilities and hangout spots",
              },
              {
                icon: Activity,
                title: "Wellness Programs",
                description: "Balance your academic and personal well-being",
              },
              {
                icon: Globe,
                title: "Global Network",
                description: "Connect with students from around the world",
              },
            ].map((feature, index) => (
              <CustomCard
                key={index}
                className="group relative overflow-hidden border-none bg-gradient-to-br from-white to-slate-50 shadow-md transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <CardContent className="p-6">
                  <div className="mb-4 inline-block rounded-lg bg-primary/10 p-3 text-primary">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                  <div className="mt-4 flex items-center text-primary">
                    <span className="text-sm font-medium">Learn more</span>
                    <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </CustomCard>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Life Showcase */}
      <section className="relative overflow-hidden bg-slate-50 py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-16 lg:grid-cols-2">
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-2xl">
                <Image
                  src="/placeholder.svg?height=800&width=800"
                  alt="Campus activities"
                  width={800}
                  height={800}
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 h-64 w-64 overflow-hidden rounded-2xl">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Student life"
                  width={400}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                Experience the Extraordinary
              </h2>
              <p className="mb-8 text-lg text-muted-foreground">
                Our campus is more than just buildings and classrooms—it&apos;s
                a living, breathing community where every day brings new
                opportunities for growth, discovery, and connection.
              </p>
              <div className="grid gap-6">
                {[
                  {
                    icon: Heart,
                    title: "Wellness & Recreation",
                    description:
                      "State-of-the-art facilities for fitness and relaxation",
                  },
                  {
                    icon: Users,
                    title: "Cultural Programs",
                    description:
                      "Diverse events celebrating our global community",
                  },
                  {
                    icon: Coffee,
                    title: "Social Spaces",
                    description:
                      "Modern venues for collaboration and connection",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-3 text-primary">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold">{item.title}</h3>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-10" />
        <div className="container relative mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to Begin Your Journey?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            Join our vibrant community and discover endless possibilities for growth, learning, and achievement.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <CustomButton size="lg" className="rounded-full">
              Apply Now
            </CustomButton>
            <CustomButton size="lg" variant="outline" className="rounded-full">
              Schedule a Visit
            </CustomButton>
          </div>
        </div>
      </section> */}
    </div>
  );
}
