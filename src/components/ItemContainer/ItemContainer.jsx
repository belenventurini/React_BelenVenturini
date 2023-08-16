import '../../components/ItemContainer/Container.scss'


// eslint-disable-next-line react/prop-types
const ItemContainer = ({greeting}) =>{
    return (
        <div className='boxInicio'> {greeting} </div>
    )
}

export default ItemContainer ;