"use client";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@repo/ui/components/ui/avatar";

const team = [
  {
    name: "Dr. Jane Smith",
    role: "Clinical Psychologist",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Dr. John Doe",
    role: "Therapist",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Sarah Johnson",
    role: "Counselor",
    image: "/placeholder.svg?height=100&width=100",
  },
];

export default function Aboutus() {
  return (
    <section id="about" className="py-20 bg-blue-100/90">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-pink-400">
          We Are Here To Support.
        </h2>
        <p className="text-center mb-12 max-w-2xl mx-auto">
          At MindWell Consultancy, we are dedicated to providing high-quality
          mental health support. Our team of experienced professionals is
          committed to helping you achieve emotional well-being and personal
          growth.
        </p>
        <div className="flex justify-center space-x-8">
          {team.map((member, index) => (
            <div key={index} className="text-center">
              <Avatar className="w-24 h-24 mx-auto mb-4 hover:scale-110 transition-all duration-300 hover:shadow-md">
                <AvatarImage
                  src={member.image}
                  alt={member.name}
                  className=""
                />
                <AvatarFallback className="">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <h3 className="font-semibold">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
