# Notes

- Язык обучения: русский; syntax, methods, library names и professional terms оставлять на English.
- Нужны короткие объяснения с видимым преобразованием «До → Код → После → Зачем → Собеседование».
- Не показывать solution до ответа учащегося.
- Главный приоритет — практический Pandas и умение объяснять выбор операции, а не software engineering.
- Использовать synthetic credit / fintech / portfolio datasets.
- Учащийся оценивает свой уровень как нулевой: не просить сразу писать pipeline; сначала разбирать одну строку и проверять понимание выбором или прогнозом результата.
- Нужен ускоренный режим подготовки за один день: не задерживаться надолго на элементарном Python; цель ближайших часов — быстро пройти `filtering` → `groupby` → `merge` → `dedup` → `vintage`.
- Увеличивать самостоятельность поэтапно: маленький готовый code fragment с построчным объяснением и прогнозом результата/смысла → code с одним пропуском → изменение готового примера → самостоятельные 1–3 строки.
- Для каждого шага использовать реальные небольшие таблицы из credit / risk analytics и пока не требовать сложный Pandas code с нуля.
- Visual interactive learning strongly preferred: основное обучение переносить в короткие HTML lessons; чат использовать для короткого вступления, вопросов, проверки evidence и выбора следующего шага.
- Уровень вести по двум независимым осям: absolute Python syntax beginner; experienced в Risk/Portfolio business concepts и conceptual SQL/table thinking.
- Каждый lesson: одна способность, 10–15 минут, progress/navigation, мгновенный feedback, shared `assets/lesson.css` и `assets/lesson.js`; не добавлять browser Python runner, пока статическая интерактивность достаточна.
