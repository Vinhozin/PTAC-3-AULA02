import Link from "next/link";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

export default function NotFound() {
    return (
        <>
            <h2>Página não encontrada</h2>
            <Link href="/">Retornar para a página inicial</Link>
        </>
    );
}
