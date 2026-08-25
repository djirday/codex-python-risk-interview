# FAST TRACK: интенсивный маршрут

| Этап | Длительность | Связанные concepts | Проверяемый результат |
|---|---:|---|---|
| Python Foundations → Pandas Bridge | 30–45 мин | variables/types, nested `list`/`dict`, operators, `if`, `for`, function, import, list of dicts → `DataFrame` | Прочитать компактный Python code и объяснить превращение records в table. |
| Pandas Core I | 30–45 мин | `DataFrame`/`Series`, `head`, `shape`, `columns`, `dtypes`, selection, mask/filter, `loc`, multiple conditions, `isin`, missing values | Inspect и отфильтровать единую credit portfolio table. |
| Pandas Core II | 35–45 мин | `sort_values`, dates, `drop_duplicates`, latest record, `groupby`, `agg`, `transform`, `merge`, cardinality, `validate`, `indicator` | Безопасно получить latest snapshot, metrics и joins без merge explosion. |
| Data Access | 30–45 мин | CSV, Parquet, PyArrow, DuckDB over one/many Parquet files, SQL vs Pandas, pyodbc/SQL Server | Выбрать инструмент и объяснить путь data source → analysis. |
| Portfolio Analytics | 35–45 мин | DPD, FPD, Bad Rate, maturity, segmentation, cohorts/vintage/MOB, `pivot_table`, roll/cure, collections | Рассчитать и интерпретировать portfolio metrics без leakage. |
| Risk Economics + Interview | 35–45 мин | Approval, Bad Rate, EL, EV, contribution/surplus, cutoff, Direct Debit, PTP/collections, live coding | Защитить assumptions и business conclusion на interview. |

## Педагогический цикл

1. Внутри HTML: короткий example → ответ учащегося → immediate feedback → короткое объяснение → следующий вопрос.
2. В одном lesson — 6–10 concepts и 10–20 varied checks; не дробить знакомую основу на микро-lessons.
3. После 3–5 уверенных ответов ускоряться. Ошибка замедляет только конкретную конструкцию, а не весь маршрут.
4. Один chat checkpoint после большого lesson; тогда один раз обновляются `COURSE_STATE.md` и learning records.
5. Главная цель — рабочая карта Python/Pandas и чтение analytical code; детали возвращаются по evidence.

Следующий lesson создаётся после checkpoint текущего большого lesson. Общий Python после bridge не продолжается: следующий этап — Pandas Core I.
