# План интенсивного дня: Foundations + 8 адаптивных блоков

| Block | Фокус | Проверяемый результат |
|---|---|---|
| 0 | Python Foundations (5 × 10–15 минут) | Прочитать assignment/`print`, различить basic types, понять `list`/`dict`, `if`, `for` и простую function. |
| 1 | Pandas mental model / inspection / filtering | Различить `DataFrame` и `Series`, выбрать columns, построить boolean mask и затем отфильтровать risk records. |
| 2 | Pandas filtering / cleaning | Исправить dtypes/datetime, обработать missing values и составные conditions. |
| 3 | `groupby` / aggregation | Построить named aggregations и различить `agg`, `transform`, `apply`. |
| 4 | `merge` / dedup / dates | Найти latest record, безопасно объединить таблицы и диагностировать merge explosion. |
| 5 | Parquet / DuckDB | Объяснить CSV vs Parquet и SQL-query по Parquet без полной загрузки в Pandas. |
| 6 | SQL Server / pyodbc | Разделить роли pyodbc/DuckDB/Pandas и показать parameterized query → DataFrame. |
| 7 | Portfolio metrics / Bad Rate / Vintage | Рассчитать metrics и vintage matrix без maturity/leakage ошибок. |
| 8 | EV / economics / mock interview | Сравнить strategies по economics и пройти вопросы по одному с feedback 0–5. |

## Progression внутри новой конструкции

1. Понять готовый code.
2. Заполнить один пропуск.
3. Изменить готовый пример.
4. Самостоятельно написать 1–3 строки.

Block 0 ограничен пятью lessons: чтение Python → types → `list`/`dict` → conditions → loop/function. После него курс сразу переходит к Pandas, а затем к filtering → `groupby` → `merge` → dedup/dates → Parquet/DuckDB → pyodbc → risk metrics/vintage → EV и mock interview.

Порядок и глубина меняются по evidence в exercises. Каждый lesson — отдельный интерактивный HTML-файл на 10–15 минут. Новый lesson создаётся только после завершения текущего шага.
