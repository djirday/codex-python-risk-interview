# Правила учебного workspace

GitHub repository — источник истины и долговременная память курса. При противоречии между conversation history и файлами repository доверять repository.

## Начало каждого нового Codex Cloud task

До выбора следующего материала обязательно прочитать в этом порядке:

1. `MISSION.md`;
2. `COURSE_STATE.md`;
3. `NOTES.md`;
4. все существующие записи в `learning-records/`;
5. существующие уроки в `lessons/`;
6. существующие материалы в `reference/`;
7. `.agents/skills/teach/SKILL.md`.

Не начинать курс сначала, если существуют learning records или пройденные уроки. Продолжать с checkpoint в `COURSE_STATE.md` и адаптировать сложность по ответам учащегося.

## Правила преподавания и сохранения

- Обучение вести на русском; Python syntax, APIs и профессиональные термины оставлять на English.
- Использовать credit / fintech / portfolio context вместо абстрактных примеров.
- Не раскрывать решение exercise до ответа учащегося.
- После каждого завершённого блока обновлять `COURSE_STATE.md`; learning record создавать только при наличии evidence понимания или заявленного prior knowledge.
- Создавать lessons постепенно, по одному блоку; не генерировать курс заранее.
- Каждый lesson должен ссылаться на high-trust sources и использовать shared assets.
- Перед завершением task проверить diff, tests и сохранить всё значимое в Git/PR workflow.

## FAST TRACK

- Калибровать учащегося как Python syntax beginner + technically experienced analyst с сильными SQL/table и Risk/Portfolio concepts.
- Создавать насыщенные lessons на 25–45 минут: 6–10 связанных concepts и 10–20 коротких interactive checks с immediate JavaScript feedback.
- Не требовать chat-ответ после каждого раздела: один checkpoint только после завершения большого lesson.
- Не выделять variable, basic types, list, dict, indexing, operators, `if`, `for` или function в отдельный lesson без evidence конкретной проблемы.
- После переходного Python Foundations → Pandas Bridge продолжать сразу Pandas, затем Data Access, Portfolio Analytics и Risk Economics + Interview.
- Ускоряться после 3–5 верных ответов; замедляться только на конструкции, где есть evidence ошибки.
- Переиспользовать sources из `RESOURCES.md` и shared assets. Не повторять research, browser rendering или screenshots без необходимости.
