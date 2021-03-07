import { React } from "react";
import mountain from "../../images/mesto-russia.png";
import fractal from "../../images/lotos-ci.png";
import kristaps from "../../images/kristaps-ungurs.jpg";
import parker from "../../images/parker-coffman.jpg";
import philipp from "../../images/philipp-deiss.jpg";

function Portfolio() {
	return (
		<main className="main">
			<section className="section">
				<div className="box">
					<h2 data-jarallax-element="0 -200" className="box__title">
						Место Россия
					</h2>
					<div className="box__container">
						<div className="box__container-images jarallax">
							<img
								className="box__container-image jarallax-img"
								src={mountain}
								alt="Горы"
							/>
						</div>
						<div
							className="box__container-content"
							data-jarallax-element="-200 0"
						>
							<p>
								Рассмотрение исторических фактов в указанном аспекте показывает,
								что географическая среда, определяющая естественную обстановку,
								играла колоссальную роль в ходе исторического развития народов
								лесостепной зоны
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className="section">
				<div className="box">
					<h2 data-jarallax-element="0 200" className="box__title">
						Лотос Ци
					</h2>
					<div className="box__container">
						<div className="box__container-images jarallax">
							<img
								className="box__container-image jarallax-img"
								src={fractal}
								alt="Горы"
							/>
						</div>
						<div
							className="box__container-content"
							data-jarallax-element="-200 0"
						>
							<p>
								Дикие татары Южной Сибири промышляли охотой и рыбной ловлей, они
								не знали даже ханской власти и управлялись старейшинами,
								подчиняясь им добровольно. Их постоянно подстерегали голод и
								нужда, но они соболезновали черным татарам,
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className="section">
				<div className="box">
					<h2 data-jarallax-element="0 -200" className="box__title">
						Путешествия по России
					</h2>
					<div className="box__container">
						<div className="box__container-images jarallax">
							<img
								className="box__container-image jarallax-img"
								src={kristaps}
								alt="Горы"
							/>
						</div>
						<div
							className="box__container-content"
							data-jarallax-element="-200 0"
						>
							<p>
								Мы уже видели, что основатель династии Ли Цун-сюй заплатил
								жизнью за пристрастие к китайскому театру (актеры становились
								фаворитами императора и получали государственные должности) и
								доверие к евнухам-чиновникам.¶
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className="section">
				<div className="box">
					<h2 data-jarallax-element="0 200" className="box__title">
						Научиться учиться
					</h2>
					<div className="box__container">
						<div className="box__container-images jarallax">
							<img
								className="box__container-image jarallax-img"
								src={parker}
								alt="Горы"
							/>
						</div>
						<div
							className="box__container-content"
							data-jarallax-element="-200 0"
						>
							<p>
								То, что в спектре расплываются и исчезают фраунгоферовы линии,
								указывает, по-моему, на изменение в космосе - и притом на весьма
								своеобразное изменение. Свет планет является, как известно,
								отражением солнечного света. Свет
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className="section">
				<div className="box">
					<h2 data-jarallax-element="0 -200" className="box__title">
						Список дел
					</h2>
					<div className="box__container">
						<div className="box__container-images jarallax">
							<img
								className="box__container-image jarallax-img"
								src={philipp}
								alt="Горы"
							/>
						</div>
						<div
							className="box__container-content"
							data-jarallax-element="-200 0"
						>
							<p>
								Таким образом, все гугеноты, за исключением нескольких угрюмых и
								недоверчивых личностей, совершенно успокоились: смерть королевы
								Наваррской объяснили воспалением легких, и просторные залы Лувра
								заполнили мужественные гугеноты,
							</p>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}

export default Portfolio;
