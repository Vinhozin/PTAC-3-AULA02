import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";
import { images } from "../../../next.config";
export default function Footer(){
    
return(
    <footer className={styles.rodape}>

        <h1>Todos direitos reservados ©</h1>
        <a href="https://ead.ifms.edu.br/"/>
        <Image 
        width={50}
        height={50}
        src="https://ead.ifms.edu.br/theme/moove/pix/moodle-logo-white.png"
        />
    </footer>
);
}