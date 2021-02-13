import ProductForm from './ProductForm'
import {Router} from '@reach/router'
import List from "./ProductList";
import Detail from "./Detail";
const Main = () => {
    return (
        <div>
            <Router>
                <ProductForm path={'/'} />
                <List path={'/list'} />
                <Detail path={'/details/:id'}/>
            </Router>
        </div>
    )
}
export default Main;