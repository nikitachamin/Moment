const products = [];

// Цикл для создания объектов продукта
for (let i = 1; i <= 964; i++) {
    const product = {
        img: `Комплекс (${i})`,            // Имя изображения
        price: "Обратитесь для расчета",   // Цена
        size: "Индивидуально",              // Размер
        article: `Артикул ${i}`            // Артикул
    };
    products.push(product);  // Добавляем объект в массив
}

// Теперь массив products содержит 964 объекта продуктов
console.log(products);  // Выводим массив в консоль

// Если нужно вывести в элемент HTML, можно использовать следующий код:
document.getElementById('output').innerText = JSON.stringify(products, null, 2); // Вывод в формате JSON для удобного чтения