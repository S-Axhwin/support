import { Button } from "@repo/ui/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@repo/ui/components/ui/avatar";
import { Calendar } from "lucide-react";

const doctors = [
  {
    name: "Dr. Emily Johnson",
    image: "/placeholder.svg?height=150&width=150",
    specialization: "Clinical Psychologist",
    description:
      "Specializes in cognitive behavioral therapy with 10+ years of experience in treating anxiety and depression.",
  },
  {
    name: "Dr. Michael Chen",
    image: "/placeholder.svg?height=150&width=150",
    specialization: "Psychiatrist",
    description:
      "Expert in mood disorders and psychopharmacology, with a focus on personalized treatment plans.",
  },
  {
    name: "Dr. Sarah Patel",
    image: "/placeholder.svg?height=150&width=150",
    specialization: "Child Psychologist",
    description:
      "Dedicated to helping children and adolescents with a wide range of emotional and behavioral issues.",
  },
  {
    name: "Dr. David Rodriguez",
    image: "/placeholder.svg?height=150&width=150",
    specialization: "Couples Therapist",
    description:
      "Experienced in helping couples improve communication and resolve conflicts in their relationships.",
  },
  {
    name: "Dr. Lisa Thompson",
    image: "/placeholder.svg?height=150&width=150",
    specialization: "Trauma Specialist",
    description:
      "Focuses on helping individuals recover from traumatic experiences using evidence-based therapies.",
  },
  {
    name: "Dr. James Wilson",
    image: "/placeholder.svg?height=150&width=150",
    specialization: "Addiction Counselor",
    description:
      "Specializes in treating substance abuse and behavioral addictions with a compassionate approach.",
  },
];

export default function DoctorList() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Expert Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <Card key={index} className="flex flex-col h-full">
              <CardHeader className="text-center">
                <Avatar className="w-32 h-32 mx-auto mb-4">
                  <AvatarImage src={doctor.image} alt={doctor.name} />
                  <AvatarFallback>
                    {doctor.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <CardTitle>{doctor.name}</CardTitle>
                <CardDescription>{doctor.specialization}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-center text-muted-foreground">
                  {doctor.description}
                </p>
              </CardContent>
              <CardFooter className="justify-center">
                <Button variant="outline">
                  <Calendar className="mr-2 h-4 w-4" />
                  Book Appointment
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
