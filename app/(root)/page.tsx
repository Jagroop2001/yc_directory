import SearchFrom from "@/app/components/SearchFrom";


export default async function Home({ searchParams }: { searchParams: { query: string } }) {
  const query = (await searchParams).query;
  return (
    <>
    <section className="pink_container">
      <h1 className="heading">Pitch your startup,<br/>Connect with Entrepreneurs</h1>
      <p className="sub_heading !max-w-3xl">
        Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.
      </p>
      <SearchFrom query={query} />
    </section>
    </>
  );
}
