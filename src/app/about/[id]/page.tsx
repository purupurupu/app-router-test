interface AboutWithIdProps {
  params: {
    id: number;
  };
}

export default function AboutWithId({ params }: AboutWithIdProps) {
  return (
    <div>
      <h1>This is the about page with ID : {params.id}</h1>
    </div>
  );
}
