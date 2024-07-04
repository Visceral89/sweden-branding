import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
	return (
		<>
			<main className={styles.main}>
				<h1>
					Grid Example: Lorem, ipsum dolor sit amet consectetur adipisicing
					elit.
				</h1>
			</main>
			<p className={styles.paragraph1}>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum quasi
				placeat dignissimos vitae voluptate quos incidunt id voluptas, itaque
				earum nobis repudiandae natus cumque suscipit maiores asperiores
				exercitationem voluptatibus? Perspiciatis?
			</p>
			<p className={styles.paragraph2}>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum quasi
				placeat dignissimos vitae voluptate quos incidunt id voluptas, itaque
				earum nobis repudiandae natus cumque suscipit maiores asperiores
				exercitationem voluptatibus? Perspiciatis?
			</p>
		</>
	);
}
