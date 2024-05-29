import Container from "@/components/shared/Container";

export default function Home() {
  return (
    <Container>
      <div className="flex justify-center items-center h-[80vh] text-red-600 font-bold">
        <h1 className="text-5xl text-center">
          Please Click on the Blog Button to See All Blogs.
        </h1>
      </div>
    </Container>
  );
}
