export default async function CarDetailsPage({ params }) {
  // Fetch car details
  const { id } = await params;

  return <div>CarPage:{id}</div>;
}
