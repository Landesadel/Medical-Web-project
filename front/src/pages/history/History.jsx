import React from 'react';
import styles from './History.module.scss';

const History = () => {
	return (
		<div className={`${styles.history} container`}>
			<h1 className="page-title">История общества</h1>
			<p className={styles.text}>Симуляционное обучение – относительно новое и быстро развивающееся направление медицинского образования для Республики
				Беларусь.</p>
			<p className={styles.text}> В современных условиях подготовки медицинских работников назрела необходимость формирования специалистов, обладающих знаниями, которые
				позволят гибко перестраивать свою профессиональную деятельность в соответствии с основными требованиями и направлениями развития
				здравоохранения. Профессионализм специалиста определяется способностью к профессиональной деятельности, к решению ежедневных задач и проблем,
				возникающих при выполнении своих обязанностей.
			</p>
			<p className={styles.text}>Все это требует дополнительного и непрерывного обучения специалистов на рабочем месте, что позволяет учреждению здравоохранения
				успешно решать проблемы, связанные с появлением новых направлений деятельности, и поддерживать конкурентоспособности.</p>
			<p className={styles.text}>Внедрение симуляционного тренинга на современных тренажерных комплексах нового поколения позволяет получить бесценный клинический
				опыт в виртуальной среде без риска для пациента, объективно оценить достигнутый уровень мастерства, обсудить достигнутые результаты с
				коллегами. При работе на тренажерах снижен стресс при проведении первых самостоятельных манипуляций, имеется возможность многократных
				повторов, отработки алгоритмов оказания помощи при жизнеугрожающих состояниях. При этом допустим неблагоприятный исход выполнения
				реанимации, что позволяет медработникам в полную силу почувствовать меру своей ответственности за жизнь и здоровье пациентов.</p>
			<p className={styles.text}>Симуляционное обучение – это искусство имитировать реальность и один из эффективных способов научиться управлять ошибками. Кроме
				профессиональных медицинских, развивается и нетехнические навыки (когнитивные и социальные). Это умение планировать, оценивать ситуацию,
				взвешивать риски и осложнения, принимать решение. Развиваются также коммуникативные качества, особенно у молодых специалистов; умение
				получать информацию, распределять обязанности, управлять стрессом. Появляется возможность проявить лидерские качества, что важно для
				формирования резерва кадров.</p>
			<p className={styles.text}>Первые лаборатории практического обучения с использованием симуляционных методик появились в Республике Беларусь начиная с 2013 г.
				в Гродненском ГМУ.</p>
			<div className={styles.row}>
				<figure>
					<p className={styles.imageWrapper}><img src={"imagesTest/history/history1.jpg"} width="150" alt=""/></p>
				<figcaption className={styles.caption}>Открытие симуляционного центра ГродГМУ (2013 год)</figcaption>
				</figure>
				<figure>
					<p className={styles.imageWrapper}><img src={"imagesTest/history/history2.jpg"} width="150" alt=""/></p>
					<figcaption className={styles.caption}>Симуляционный тренинг в ВГМУ</figcaption>
				</figure>
			</div>
			<p className={styles.text}>Далее присоединяются БГМУ, Витебский ГМУ и Гомельский ГМУ. Элементы симуляционного обучения внедряются в некоторых образовательных центрах РНПЦ.</p>
			<div className={styles.row}>
				<figure>
					<p className={styles.imageWrapper}><img src={"imagesTest/history/history3.jpg"} alt=""/></p>
					<figcaption className={styles.caption}>Симуляционный центр БГМУ</figcaption>
				</figure>
				<figure>
					<p className={styles.imageWrapper}><img src={"imagesTest/history/history4.png"} alt=""/></p>
					<figcaption className={styles.caption}>Симуляционный центр ГомГМУ</figcaption>
				</figure>
			</div>	
			<p className={styles.text}>С 2016 г. вопросам симуляционного обучения значительное внимание уделяет Министерство здравоохранения Республики Беларусь. Проводится ряд научно-практических мероприятий с международным участием, обсуждается необходимость разработки нормативно-правовой базы по данной тематике, внедряется объективный структурированный клинический экзамен (ОСКЭ) на SIM-станциях различного медицинского профиля.</p>
			<p className={styles.text}>Объективный структурированный клинический экзамен (ОСКЭ) – наиболее надежный и валидный инструмент аттестации специалистов, средство оценки, основанное на принципах объективности и стандартизации, позволяющее обученным экзаменаторам оценить знания экзаменуемого по стандартизированным шкалам. Цель такого экзамена – не только выявление творческих возможностей аттестуемого по дифференциальной диагностике и постановке диагноза, но и демонстрация универсальных, основных принципов работы у постели пациента, имеющих прикладное значение.
			</p>
			<p className={styles.text}>В Республике Беларусь реализуется проект «Модернизация системы здравоохранения Республики Беларусь» (далее – Проект), в рамках Соглашения о займе между Республикой Беларусь и Международным банком реконструкции и развития от 25 ноября 2016 г. (соглашение ратифицировано и вступило в силу 19 мая 2017 г.) и распоряжения Президента Республики Беларусь № 135рп от 21.08.2017.</p>
			<p className={styles.text}>Цель проекта: Содействие в повышении отдельных аспектов качества медицинской помощи в Республике Беларусь.</p>
			<p className={styles.text}>Одним из компонентов проекта является Компонент 2 «Повышение уровня клинических компетенции работников здравоохранения по ведению неинфекционных заболеваний».</p>
			<p className={styles.text}>Основная цель компонента: повышение эффективности приобретения практических навыков специалистами с высшим и средним специальным медицинским образованием путем внедрения симуляционных технологий.</p>
			<p className={styles.text}>Достижение цели планируется обеспечить посредством создания условий для проведения симуляционного обучения различной степени реалистичности, в том числе с использованием симуляционного оборудования и медицинских изделий для отработки практических навыков.</p>
			<p className={styles.text}>Предполагается создание республиканского симуляционного центра, модернизация существующих и организация новых лабораторий по формированию практических навыков в медицинских университетах и медицинских колледжах.</p>
			<p className={styles.text}>В рамках реализации Компонента 2 проекта «Модернизация системы здравоохранения Республики Беларусь» необходимо выполнить следующие мероприятия:</p>
			<ol>
				<li>Пересмотр учебных программ и разработка единых требований для подготовки. Переподготовки, повышения квалификации совершенствования клинической компетенции специалистов с высшим и средним специальным медицинским образованием с использованием симуляционных технологий;</li>
				<li>Ремонт/модернизация лабораторий по отработке навыков в медицинских университетах и медицинских колледжах;</li>
				<li>Закупка оборудования для оснащения республиканского симуляционного центра и лабораторий по отработке навыков;</li>
				<li>Приобретение и установка программного обеспечения для проведения обучения;</li>
				<li>Разработка и проведение технической оценки и опросов о степени удовлетворенности слушателей качеством обучения;</li>
				<li>Проведение обучающих мероприятий.</li>
			</ol>
			<p className={styles.text}>Получение практического опыта всегда труднодостижимо, а главное, сопряжено с риском для здоровья реального пациента.</p>
			<p className={styles.text}>Именно для решения этих проблем медицинского образования и нужны симуляционные технологии: чтобы без вреда для здоровья пациента можно было отработать все алгоритмы, практические навыки, научить медицинский персонал действовать в экстренных ситуациях. Это важно в том числе для освоения развивающихся в настоящее время малоинвазивных методов лечения, эффективного использования медицинского оборудования. А приходить к пациенту медицинский работник должен с уже отработанными практическими навыками: когда поставлена рука, выработаны алгоритмы, определенные умения.</p>
			<p className={styles.text}>У студентов, получающих медицинское образование, просто не хватает времени и возможностей на прохождение полноценной практики в лечебном учреждении. То есть с теорией-то все в порядке, а с практикой – увы, нет.</p>
			<p className={styles.text}>Для этого и должны создаваться симуляционные центры, учебные кабинеты, в которых при обучении профессиональное действие может быть неоднократно повторено для выработки уверенности выполнения и ликвидации ошибок. Для этого могут использоваться игровые методы обучения, а также специальные тренажеры, симуляторы и фантомы. В результате выигрывают и преподаватель, и обучаемый, поскольку преподаватель может не только объяснять, но и практически показывать материал, а курсант сможет гармонично связать теоретические знания с практическими навыками.</p>
			<p className={styles.text}>Сегодня уже доказано, что студенты, прошедшие тренинги с использованием симуляции, показывают более высокие знания, умения и навыки в сравнении со студентами, обучавшимися в традиционном формате. Медработники и преподаватели медицинских вузов всего мира признают, что обучение на базе моделирования тех или иных ситуаций (то есть с использованием симуляции) в итоге значительно способствует повышению уровня медицинского обслуживания, повышает производительность и качество работы специалистов и, что особенно важно, безопасность пациентов.</p>
			<p className={styles.text}>Поэтому обучение в симуляционных центрах – это не только наиболее эффективный способ получения практических навыков студентами медицинских учреждений образования, но и возможность повышения уровня квалификации работников здравоохранения. Нам просто необходимы подобные центры, и следует стремиться к тому, чтобы их количество росло.</p>
			<p className={styles.text}>Реализация компетентного подхода в системах современного образования в Республике Беларусь предполагает ориентацию образовательных программ профессиональной подготовки специалистов не только на усвоение теории, но и на приобретение практического опыта, который может быть сформирован прежде всего в процессе практико-ориентированного обучения будущих специалистов в учреждениях образования или в системе повышения квалификации и переподготовке кадров.</p>
			<p className={styles.text}>В концептуальных подходах к развитию системы образования Республики Беларусь до 2020 г. и на перспективу до 2030 г. отмечается, что одной из основных задач в сфере высшего образования является «повышение качества и эффективности практико-ориентированной подготовки специалистов, углубление связей с организациями-заказчиками кадров».</p>
			<p className={styles.text}>В системе дополнительного образования взрослых обеспечение практико-ориентированного подхода при реализации образовательных программ повышения квалификации и переподготовки кадров также выдвигается в разряд основных задач. Механизм решения данной задачи – увеличение практической составляющей при реализации образовательных программ дополнительного образования взрослых.</p>
			<p className={styles.text}>Одной из эффективных систем практико-ориентированного обучения, на необходимость реализации которого указывается в нормативных документах Министерства образования Республики Беларусь, является симуляционное обучение, как образовательная технология, получающая в современных условиях все более широкое развитие и распространение.</p>
			<p className={styles.text}>Предпосылкой развития симуляционного обучения является стремительное внедрение в практику разнообразных виртуальных технологий, позволяющих имитировать реальную ситуацию с большой степенью достоверности.</p>
			<p className={styles.text}>Симуляционное обучение широко используется в подготовке медицинских кадров в зарубежной практике, где создана и действует система данного обучения. Все больший размах оно приобретает в учреждениях медицинского образования Республики Беларусь.</p>
			<figure>
					<p className={styles.imageWrapper}><img src={"imagesTest/history/history5.jpg"} alt=""/></p>
					<figcaption className={styles.caption}>Симуляционное обучение в медицине РБ</figcaption>
			</figure>
			<p className={styles.text}>В Республике Беларусь в настоящее время проводится активная работа по созданию профессионального сообщества симуляционного обучения в медицине подобно Европейскому (SESAM) и российскому (РОСОМЕД) и анализ сложившейся ситуации в этой сфере демонстрирует готовность образовательной, медицинской и симуляционной платформ к объединению всех заинтересованных.</p>
			<p className={styles.text}>21 октября 2022 года в рамках Международного конгресса «Инновационная кардиология» проведен круглый стол «Организационные вопросы медицинского симуляционного обучения в Республике Беларусь», на котором были обсуждены вопросы состояния, проблем и перспектив использования симуляционных технологий в медицинском образовании. Представители симуляционно-аттестационных центров медицинских университетов, лабораторий практического обучения медицинских колледжей Республики Беларусь, представители Белорусской медицинской академии последипломного образования и ГУ «Республиканский клинический медицинский центр» Управления делами Президента Республики Беларусь инициировали создание профессионального сообщества симуляционного медицинского обучения в Республике Беларусь. Эта инициатива была поддержала представителями Министерства здравоохранения Республики Беларусь и членами правления Российского общества симуляционного обучения в медицине (РОСОМЕД). Начато формирование пакета документов для регистрации общественного объединения в Министерстве юстиции Республики Беларусь.</p>
			<div className={styles.row}>
				<figure>
					<p className={styles.imageWrapper}><img src={"imagesTest/history/history6.jpg"} alt=""/></p>
					<figcaption className={styles.caption}>Круглый стол «Организационные вопросы медицинского симуляционного обучения в Республике Беларусь» 21 октября 2022 года г. Минск</figcaption>
				</figure>
				<figure>
					<p className={styles.imageWrapper}><img src={"imagesTest/history/history7.jpg"} alt=""/></p>
					<figcaption className={styles.caption}>Выставка симуляционного оборудования. Международный конгресс «Инновационная кардиология», октябрь 2022 года, г. Минск</figcaption>
				</figure>
				<figure>
					<p className={styles.imageWrapper}><img src={"imagesTest/history/history8.jpg"} alt=""/></p>
					<figcaption className={styles.caption}>Международный конгресс «Инновационная кардиология», октябрь 2022 года, г.&nbsp;Минск</figcaption>
				</figure>
			</div>
			<p className={styles.text}>11 ноября 2022 года состоялось инициативное собрание по организации общества медицинского симуляционного обучения в Республике Беларусь, на котором рассмотрели:</p>
			<ul>
				<li>Утверждение названия Общественного объединения</li>
				<li>Утверждение Устава Общественного объединения</li>
				<li>Избрание членов Правления Общественного объединения</li>
				<li>Избрание Ревизионной комиссии Общественного объединения</li>
				<li>Определение направлений работы Общественного объединения и лиц, курирующих эти направления</li>
			</ul>
			<p className={styles.text}>По результатам голосования, принято название Общественное объединение «Белорусское общество симуляционного обучения в медицине» (БОСОМ). Председателем общественного объединения БОСОМ избран Слободин Юрий Валерьевич –заместитель главного врача по хирургии ГУ «Республиканский клинический медицинский центр» Управления делами Президента Республики Беларусь, к.м.н.. Сформирован пакет документов для регистрации общественного объединения в Министерстве юстиции в установленном порядке.</p>
			<figure>
					<p className={styles.imageWrapper}><img src={"imagesTest/history/history9.jpg"} alt=""/></p>
					<figcaption className={styles.caption}>Инициативное собрание по организации БОСОМ</figcaption>
				</figure>
		</div>
	);
};
export default History;
