import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
	<section id="product" className={layout.sectionReverse}>
		<div className={layout.sectionImgReverse}>
			<img
				src={bill}
				alt="billing"
				className="w-[100%] h-[100%] relative z-[5]"
			/>

			<div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient"></div>
			<div className="absolute z-0 -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient"></div>
		</div>

		<div className={layout.sectionInfo}>
			<h2 className={styles.heading2}>
				Easily control your <br className="hidden sm:block" /> billing &
				invoicing.
			</h2>

			<p className={`${styles.paragraph} max-w-[470px] mt-5`}>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique,
				unde libero excepturi modi molestias accusantium dolore ex impedit
				ratione nobis repudiandae quia qui magni a, consequuntur, minima
				reprehenderit? Accusantium, fugiat.
			</p>

			<div className="flex flex-row flex-wrap mt-6 sm:mt-10">
				<img
					src={apple}
					alt="apple_store"
					className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
				/>

				<img
					src={google}
					alt="google_play"
					className="w-[128px] h-[42px] object-contain cursor-pointer"
				/>
			</div>
		</div>
	</section>
);

export default Billing;
