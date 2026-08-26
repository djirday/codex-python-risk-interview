# Подтверждено чтение составного filter и missing result

Учащийся правильно определил, что conditions `dpd >= 30` и `segment == "prime"` одновременно выполняются только для L005. Он также правильно объяснил, что missing `limit` приводит к `utilization = NaN`. Это evidence понимания `.loc` с boolean AND, vectorized division и распространения missing input в derived metric; Lesson 0005 завершён.

Формулировка downstream data-quality risk пока требует закрепления: `NaN` означает неизвестный ratio, а не 100% risk. Если такую row молча исключить из aggregation/reporting, portfolio utilization может быть biased; missing limit нужно посчитать, исследовать и обработать по документированному business rule.

Учащийся явно сообщил о высокой cognitive cost прокрутки между вопросом, исходной table и formula. Все следующие exercises должны быть self-contained и повторять рядом минимальное «Дано».
