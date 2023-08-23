<h4>24. Разработайте страницу, отображающую таблицу с данными. Данные необходимо подгружать из этого источника.</h4>

<h5>Требования:
данные должны загружаться при загрузке страницы,
необходимо реализовать сортировку по убыванию и по возрастания для всех колонок,
необходимо реализовать клиентскую пагинацию (50 элементов на странице).</h5>

---

Начну с того, что задание интересное. Обычно использую либы для подобных вещей, поэтому работая с ванильным JS пришлось напрячь мозги.

1. Для начала я создал слайдер/пагинацию, поделил общее количетсво элементов на 50, как было по заданиюЮ
2. Далее отрисовал табличку.
3. Добавил немного функционала слайдеру. При достижении последней страницы, нажимая на кнопку NEXT, открывается первая и так же в обратном направлении.
   Пытался сделать, что бы у меня не было каши в слайдере из 20 чисел и выдавало по 5 страниц. Но не совсем вышло, не допер как дабавлять и удалять ненужные числа. Попытался сделать состояние для слайдера, но у меня все время просто добавлялись новые числа по типу 1,2,3,4,5 -> 1,2,3,4,5,6 -> 1,2,3,4,5,6,7. Казалось бы так же и удалять первое в обратном порядке, но что то не срослось, думаю был близок к решению.
4. Добавил popup меню для выбора фильтра!

<h2><a href="wild-berry1-dnpbuaq66-kiko34rus-mailru.vercel.app">Ccылка на деплой </a></h2>
