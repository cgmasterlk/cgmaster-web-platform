import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import Link from "next/link";
import { notFound } from "next/navigation";
import CoursePageClient from "./CoursePageClient";

const connectionString = process.env.DATABASE_URL!;
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

export default async function CourseDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  const course = await prisma.course.findUnique({
    where: { id },
    include: { _count: { select: { enrollments: true } } }
  });

  if (!course) notFound();

  return <CoursePageClient course={course} />;
}