import { useEffect } from "react";
import ImageSlider from "../components/Slider";

function About() {
  useEffect(() => {
    document.title = "О компании";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Подробнее о нашей компании.");
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = "Подробнее о нашей компании.";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <>
     
      <div className="about-wrapper">
        <h2 className="about__title">О компании</h2>
        <p className="about__text">
          Наша компания более 16 лет занимается изготовлением и установкой
          памятников из натурального камня. Мы глубоко осознаём значимость
          памяти о близких и подходим к своей работе с особым уважением, тактом
          и ответственностью. Благодаря собственному производству, оснащённому
          современными технологиями, мы обеспечиваем высокий уровень качества на
          каждом этапе — от проектирования до монтажа. Используем только
          проверенные материалы, чтобы создать долговечные и достойные
          памятники, которые сохранят память на поколения вперёд. Мы ценим
          доверие наших клиентов и стремимся не просто выполнить заказ, а помочь
          увековечить светлую память о родных людях. Каждый проект для нас — это
          не просто работа, а часть большой миссии по сохранению семейных
          историй и традиций.
        </p>
      </div>
      <ImageSlider />
    </>
  );
}

export default About;
