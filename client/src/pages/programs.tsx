import { useLoaderData } from "react-router-dom";

interface ProgramsTypes {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
}

export default function Programs() {
  const programs = useLoaderData() as ProgramsTypes[];

  return (
    <>
      <h1>Programmes</h1>

      {programs.map((program) => (
        <div key={program.id} className="card">
          <img src={program.poster} alt={program.title} />
          <h2>{program.title}</h2>
          <p>{program.synopsis}</p>
          <p>{program.country}</p>
          <p>
            <b>{program.year}</b>
          </p>
        </div>
      ))}
    </>
  );
}
