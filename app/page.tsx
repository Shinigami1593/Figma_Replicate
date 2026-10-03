// import CourseHighlights from "@/src/components/home/CourseHighlights";
import Hero from "@/src/components/home/Hero";
import ImageDragStrip from "@/src/components/home/ImageDragStrip";
import PartnersRow from "@/src/components/home/PartnersRow";

export default function Home() {
  return (
    <main>
      <Hero />
      <ImageDragStrip />
      <PartnersRow />
      {/* <CourseHighlights /> */}
    </main>
  );
}