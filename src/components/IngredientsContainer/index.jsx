import '../../sass/main.scss'
import './IngredientsContainer.scss'

const IngredientsContainer = ({classStyle}) => {
    return (
        <div className={classStyle}>
            <h2 className="ingredients__title title-font">Ingredients</h2>
            <ul className="ingredients__list">
                <li className="ingredients__list-item"><span className="span_margin"/>2-3 large eggs</li>
                <li className="ingredients__list-item"><span className="span_margin"/>Salt, to taste</li>
                <li className="ingredients__list-item"><span className="span_margin"/>Pepper, to taste</li>
                <li className="ingredients__list-item"><span className="span_margin"/>1 tablespoon of butter or oil</li>
                <li className="ingredients__list-item"><span className="span_margin"/>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
            </ul>
        </div>
    )
}

export default IngredientsContainer