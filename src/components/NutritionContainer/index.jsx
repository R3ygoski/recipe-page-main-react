import '../../sass/main.scss'
import './NutritionContainer.scss'

const NutritionContainer = ({classStyle}) => {
    return (
        <div className={classStyle}>
            <h2 className="nutrition__title title-font">Nutrition</h2>
            <p className="nutrition__description">The table below shows nutritional values per serving without the additional fillings.</p>
            <div className="divisory-line-table-first"></div>
            <div className="divisory-line-table-second"></div>
            <div className="divisory-line-table-third"></div>
            <table className="nutrition__table">
                <tbody className="nutrition__table-body">
                    <tr className="nutrition__table-body-rows">
                    <td><span className="nutrient__name"/>Calories</td>
                    <td className="nutrient__value">277kcal</td>
                    </tr>


                    <tr className="nutrition__table-body-rows">
                    <td><span className="nutrient__name"/>Carbs</td>
                    <td className="nutrient__value">0g</td>
                    </tr>


                    <tr className="nutrition__table-body-rows">
                    <td><span className="nutrient__name"/>Protein</td>
                    <td className="nutrient__value">20g</td>
                    </tr>

                    
                    <tr className="nutrition__table-body-rows">
                    <td><span className="nutrient__name"/>Fat</td>
                    <td className="nutrient__value">22g</td>  
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default NutritionContainer