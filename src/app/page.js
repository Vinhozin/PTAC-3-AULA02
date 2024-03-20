import Link from "next/link";
import Image from "next/image";
export default async function Home() {
  const resposta = await fetch("http://localhost:3000/api",{
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
            <p>{campi.nome_campi}</p>
            <img src='{campi.imagem_url}'></img>
          </div>
        )
      }
    </main>
  )
}
