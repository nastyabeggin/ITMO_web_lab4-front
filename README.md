# ITMO_web_lab4-front
# ITMO_web_lab4-back

- Уровень back-end основан на Spring.
- Уровень front-end построен на [Angular 2+](https://angular.io/) с использованием обычных полей ввода HTML
- Взаимодействие между уровнями back-end и front-end должно быть организовано посредством REST API.

Приложение по-прежнему должно включать в себя 2 страницы - стартовую и основную страницу приложения. Обе страницы приложения должны быть адаптированы для отображения в 3 режимах:

- "Десктопный" - для устройств, ширина экрана которых равна или превышает 1040 пикселей.
- "Планшетный" - для устройств, ширина экрана которых равна или превышает 720, но меньше 1040 пикселей.
- "Мобильный"- для устройств, ширина экрана которых меньше 720 пикселей.

**Стартовая страница должна содержать следующие элементы:**

- "Шапку", содержащую ФИО студента, номер группы и номер варианта.
- Форму для ввода логина и пароля. Информация о зарегистрированных в системе пользователях должна храниться в отдельной таблице БД (пароль должен храниться в виде хэш-суммы). Доступ неавторизованных пользователей к основной странице приложения должен быть запрещён.

**Основная страница приложения должна содержать следующие элементы:**

- Набор полей ввода для задания координат точки и радиуса области в соответствии с вариантом задания: Checkbox {'-5','-4','-3','-2','-1','0','1','2','3'} для координаты по оси X, Text (-3 ... 3) для координаты по оси Y, и Checkbox {'-5','-4','-3','-2','-1','0','1','2','3'} для задания радиуса области. Если поле ввода допускает ввод заведомо некорректных данных (таких, например, как буквы в координатах точки или отрицательный радиус), то приложение должно осуществлять их валидацию.
- Динамически обновляемую картинку, изображающую область на координатной плоскости в соответствии с номером варианта и точки, координаты которых были заданы пользователем. Клик по картинке должен инициировать сценарий, осуществляющий определение координат новой точки и отправку их на сервер для проверки её попадания в область. Цвет точек должен зависить от факта попадания / непопадания в область. Смена радиуса также должна инициировать перерисовку картинки.
- Таблицу со списком результатов предыдущих проверок.
- Кнопку, по которой аутентифицированный пользователь может закрыть свою сессию и вернуться на стартовую страницу приложения.

**Дополнительные требования к приложению:**
- Все результаты проверки должны сохраняться в базе данных под управлением СУБД Oracle.
- Для доступа к БД необходимо использовать Spring Data.

<img width="245" alt="Screenshot 2023-01-14 at 3 29 52 PM" src="https://user-images.githubusercontent.com/45201186/212471609-b0b92501-f2f8-47e1-857f-bc90d53146e2.png">

## Интерфейс и возможности
![2023-01-14_15-31-08](https://user-images.githubusercontent.com/45201186/212471908-bb6afa22-4a8c-4282-b5a3-3750c97cc067.png)

- Регистрация пользователя
- Валидация логина и пароля 

**Основная версия**
![2023-01-14_15-31-39](https://user-images.githubusercontent.com/45201186/212471705-8b5c173f-7075-4dea-94d0-500d2fbe6b99.png)
- Добавление точек через форму
- Добавление точек через клик на график
- Очищение таблицы
- Валидация данных при вводе 
– Перерисовка картинки при изменении радиуса 
- Выход из аккаунта

<br />**Мобильная версия**<br />
<img src="https://user-images.githubusercontent.com/45201186/212471721-f18aea62-5363-42d6-ae00-6f72f88d1115.png" height="400">

## Для запуска 
Команда `npm i -f` для установки необходимых модулей. Команда `ng serve` для деплоя сервера. Перейти по адресу http://localhost:4200/. 

