import ProductForm from './ProductForm'
import {Router} from '@reach/router'
import List from "./ProductList";
import Detail from "./Detail";
import Update from "./Update";
const Main = () => {
    const removeFromDom = (personId) =>{

    }
    return (
        <div>
            <Router>
                <ProductForm path={'/'} />
                <List path={'/list'} removeFromDom={removeFromDom}/>
                <Detail path={'/details/:id'} />
                <Update path={'update/:id'} />
            </Router>
        </div>
    )
}
export default Main;