import '../../sass/main.scss'
import './PreparationContainer.scss'

const PreparationContainer = ({classStyle}) => {
    return (
        <div className={classStyle}>
            <h3 className="preparation__title">Preparation time</h3>
            <ul className="preparation__list">
                <li className="preparation__list-item"><span className="span__bold span_margin">Total:</span>Approximately 10 minutes</li>
                <li className="preparation__list-item"><span className="span__bold span_margin">Preparation:</span>5 minutes</li>
                <li className="preparation__list-item"><span className="span__bold span_margin">Cooking:</span>5 minutes</li>
            </ul>
        </div>
    )
}

export default PreparationContainer