import Link from "next/link";
import Image from "next/image";
export default async function Home() {
  const resposta = await fetch("https://back-end-ifms-pablos-projects-2b28625d.vercel.app/campi",{
    next: {
      revalidate: 1
    }
  });
  const campus = await resposta.json();
  return (
    <main>
      <h1>Home</h1>
      {
        campus.map((campi) =>
          <div>
            {campi.id}
            <p>{campi.nome_campus}</p>
          </div>
        )
      }
    </main>
  )
}
