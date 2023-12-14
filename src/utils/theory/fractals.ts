import { TheoryPart } from "../../types";

export const fractals_parts: TheoryPart[] = [
  {
    htmlContent: `
    <p>Фрактальні структури - самоподібні структури, тобто ті, що складаються з частин, які в якомусь сенсі подібні до цілого.</p>
      <p>Класифікація фракталів:</p>
      <ul>
        <li>Геометричні (конструктивні);</li>
        <li>Алгебраїчні (рекурентні, динамічні);</li>
        <li>Стохастичні (випадкові)</li>
        <li>IFS-фрактали</li>
      </ul>
      <p>Властивості фракталів:</p>
      <ul>
        <li>Масштабна інваріантність - незмінність якої-небудь величини по відношенню до деяких перетворень.</li>
        <li>Рекурсивність та ітераційність - властивості, які часто згадуються в контексті програмування, тобто фрактали можна створити ітеративно циклами або рекурсією.</li>
      </ul>
      <p>Класифікація фракталів за рівнем самоподібності:</p>
      <ul>
        <li>фрактали точної самоподібності;</li>
        <li>фрактали з майже самоподібністю;</li>
        <li>фрактали з статистичною самоподібністю.</li>
      </ul>
      <p>Фракталами точної самоподібності є геометричні фрактали, до фракталів з майже самоподібністю належать алгебраїчні фрактали. Статистична самоподібність використовує випадкові величини (стохастичні фрактали).</p>
      <p>Побудова геометричних фракталів відбувається за чітко визначеним алгоритмом, як ось цей “Н-фрактал”:</p>
    `
  }, 
  {
    image: '/theory/fractal-1.png'
  },
  {
    text: `Алгебраїчні фрактали будуються за допомогою математичних виразів та функцій, які рекурсивно застосовуються для генерації складного зображення, наприклад ця “множина Мандельброта”:
    `
  },
  {
    image: '/theory/fractal-2.png'
  },
  {
    text: `Стохастичні фрактали будуються за допомогою випадкових процесів або елементів та математичних виразів, наприклад ця “плазма”:
    `
  },
  {
    image: '/theory/fractal-3.png'
  },
  {
    text: `IFS (Iterated Function System) фрактали - це клас фракталів, які будуються за допомогою повторюваних систем функцій. Ці фрактали широко використовуються у комп'ютерній графіці та художньому дизайні для створення складних та цікавих візуальних образів.  IFS фрактали можуть включати як алгебраїчні, так і геометричні, і навіть стохастичні елементи в їх конструкції.
    `
  }
  
]