import re

patterns = (r'^([а-яё]*[А-ЯЁ][а-яё]*)$', r'^([а-яёa-z]*[А-ЯЁA-Z][а-яёa-z]*)$')

words = ('Мама', 'авТо', 'гриБ', 'Яблоко', 'яБлоко', 'ябЛоко', 'яблОко', 'яблоКо', 'яблокО', 'агент007', 'стриж', 'ГТО', 'Три богатыря', 'ПетР', 'лИст7', 'Спорт', 'Hello', 'hello', 'TeSt', 'findAll', '8helP')

for p in patterns:
    pattern = re.compile(p)

    foundWords = [w for w in words if pattern.search(w)]

    print(foundWords)