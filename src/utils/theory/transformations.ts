import { TheoryPart } from "../../types";

export const transformations_parts: TheoryPart[] = [
  {
    htmlContent: `
      <p>Афінне перетворення — відображення площини або простору в собі, при якому паралельні прямі переходять у паралельні прямі, пересічні — в пересічні, мимобіжні — в мимобіжні.</p>

      <p>Властивості:</p>
      <ul>
        <li>n-вимірний об’єкт відображається в n-вимірний, точка – в точку, лінія – в лінію, поверхня – в поверхню;</li>
        <li>зберігається паралельність ліній і площин;</li>
        <li>зберігаються пропорції паралельних об’єктів (довжин відрізків на паралельних прямих і площ на паралельних площинах).</li>
      </ul>
      
      <p>Афінні перетворення використовуються в комп’ютерній графіці для руху зображень:</p>
      <ul>
        <li>переміщення/зсув;</li>
        <li>масштабування (збільшення/зменшення);</li>
        <li>поворот на кут</li>
      </ul>
      
      <p>Ці перетворення можна проводити як відносно системи координат, так і відносно самого об'єкту зображення.</p>
      
      <p>Афінні перетворення в комп’ютерній графіці часто трактуються як матричні вирази:</p>
      
      <p>Матриця перенесення (translation) точки на вектор (m, n):</p>
    `
  },
  {
    image: '/theory/transformations-1.png'
  },
  {
    text: 'Матриця розтягу(стиску) відносно початку координат:'
  },
  {
    image: '/theory/transformations-2.png'
  },
  {
    text: 'Матриця повороту точки відносно початку координат у додатному напрямку:'
  },
  {
    image: '/theory/transformations-3.png'
  },
  {
    text: `
    Складним вважається перетворення, яке містить ланцюжок базових перетворень (не менше двох). Майже всі афінні перетворення залежать від порядку їх виконання перетворення повороту (не комутативні). Наприклад: поворот і стиск, поворот і перенесення, і тд і тп.
`
  }
]