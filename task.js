// Дожидаемся загрузки контента страницы
document.addEventListener('DOMContentLoaded', () => {
    // Получаем элемент книги по его ID
    const book = document.getElementById('book');
    
    // Получаем все элементы управления размером шрифта
    const fontSizeControls = document.querySelectorAll('.book__control_font-size .font-size');
    
    // Получаем все элементы управления цветом текста
    const colorControls = document.querySelectorAll('.book__control_color .color');
    
    // Получаем все элементы управления цветом фона
    const backgroundControls = document.querySelectorAll('.book__control_background .color');

    // Функция для удаления активного класса у всех элементов в NodeList
    function removeActiveClass(elements) {
        elements.forEach(element => element.classList.remove('font-size_active', 'color_active'));
    }

    // Функция для обработки изменений размера шрифта
    function handleFontSizeChange(event) {
        event.preventDefault();  // Предотвращаем стандартное действие ссылки
        const size = event.target.getAttribute('data-size');  // Получаем размер шрифта из атрибута

        // Удаляем активный класс у всех элементов управления размером шрифта
        removeActiveClass(fontSizeControls);

        // Добавляем активный класс на выбранный элемент
        event.target.classList.add('font-size_active');

        // Удаляем существующие классы размера шрифта у элемента книги
        book.classList.remove('book_fs-big', 'book_fs-small');

        // Добавляем новый класс размера шрифта, если он указан
        if (size) {
            book.classList.add(`book_fs-${size}`);
        }
    }

    // Функция для обработки изменений цвета текста
    function handleColorChange(event) {
        event.preventDefault();  // Предотвращаем стандартное действие ссылки
        const color = event.target.getAttribute('data-text-color');  // Получаем цвет текста из атрибута

        // Удаляем активный класс у всех элементов управления цветом текста
        removeActiveClass(colorControls);

        // Добавляем активный класс на выбранный элемент
        event.target.classList.add('color_active');

        // Удаляем существующие классы цвета текста у элемента книги
        book.classList.remove('book_color-black', 'book_color-gray', 'book_color-whitesmoke');

        // Добавляем новый класс цвета текста, если он указан
        if (color) {
            book.classList.add(`book_color-${color}`);
        }
    }

    // Функция для обработки изменений цвета фона
    function handleBackgroundChange(event) {
        event.preventDefault();  // Предотвращаем стандартное действие ссылки
        const bgColor = event.target.getAttribute('data-bg-color');  // Получаем цвет фона из атрибута

        // Удаляем активный класс у всех элементов управления цветом фона
        removeActiveClass(backgroundControls);

        // Добавляем активный класс на выбранный элемент
        event.target.classList.add('color_active');

        // Удаляем существующие классы цвета фона у элемента книги
        book.classList.remove('book_bg-black', 'book_bg-gray', 'book_bg-white');

        // Добавляем новый класс цвета фона, если он указан
        if (bgColor) {
            book.classList.add(`book_bg-${bgColor}`);
        }
    }

    // Привязываем обработчики событий к элементам управления размером шрифта
    fontSizeControls.forEach(control => control.addEventListener('click', handleFontSizeChange));
    
    // Привязываем обработчики событий к элементам управления цветом текста
    colorControls.forEach(control => control.addEventListener('click', handleColorChange));
    
    // Привязываем обработчики событий к элементам управления цветом фона
    backgroundControls.forEach(control => control.addEventListener('click', handleBackgroundChange));
});
