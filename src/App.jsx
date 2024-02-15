import IngredientsContainer from './components/IngredientsContainer'
import InstructionsContainer from './components/InstructionsContainer'
import NutritionContainer from './components/NutritionContainer'
import PreparationContainer from './components/PreparationContainer'
import './sass/main.scss'

function App() {

  return (
    <main className="recipe">
      <img className="recipe__image" src="/image/image-omelette.jpeg" alt="Image of a Omelette"/>
      <h1 className="recipe__title title">Simple Omelette Recipe</h1>
      <p className="recipe__description">An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>
      <PreparationContainer classStyle="preparation"/>
      <IngredientsContainer classStyle="ingredients"/>
      <div className="divisory-line"></div>
      <InstructionsContainer classStyle="instructions"/>
      <div className="divisory-line"></div>
      <NutritionContainer classStyle="nutrition"/>
    </main>
  )
}

export default App
