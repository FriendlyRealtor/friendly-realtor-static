import styles from "../styles/styles";
import { Inter } from 'next/font/google'
import {  Navbar, Hero, Footer, Business } from "../components";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
				<div className={`bg-secondary w-full overflow-hidden`}>
					<div className={`${styles.paddingX} ${styles.flexCenter}`}>
						<div className={`${styles.boxWidth}`}>
							<Navbar />
						</div>
					</div>

					<div className={`bg-secondary ${styles.flexStart}`}>
						<div className={`${styles.boxWidth}`}>
							<Hero />
						</div>
					</div>
				<div className={`bg-secondary ${styles.paddingX} ${styles.flexCenter}`}>
					<Business />
				</div>
			</div>
			<Footer />
	</main>
  )
}
