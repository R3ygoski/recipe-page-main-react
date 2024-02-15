import '../../sass/main.scss'
import './InstructionsContainer.scss'

const InstructionsContainer = ({classStyle}) => {
    return (
        <div className={classStyle}>
            <h2 className="instructions__title title-font">Instructions</h2>
            <ol className="instructions__list">
            <li className="instructions__list-item">
                <p><span className="span__bold">Beat the eggs:</span>In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.</p>
                </li>
            <li className="instructions__list-item">
                <p><span className="span__bold">Heat the pan:</span>Place a non-stick frying pan over medium heat and add butter or oil.</p>
                </li>
            <li className="instructions__list-item">
                <p><span className="span__bold">Cook the omelette:</span>Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.</p>
                </li>
            <li className="instructions__list-item">
                <p><span className="span__bold">Add fillings (optional):</span>When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.</p>
                </li>
            <li className="instructions__list-item">
                <p><span className="span__bold">Fold and serve:</span> As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.</p>
                </li>
            <li className="instructions__list-item">
                <p><span className="span__bold">Enjoy:</span>Serve hot, with additional salt and pepper if needed.</p>
                </li>
            </ol>
        </div>
    )
}

export default InstructionsContainer