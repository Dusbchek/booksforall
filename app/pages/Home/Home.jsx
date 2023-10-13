import {NavBar} from "../../components/navBar/navBar"
import {BookBar} from "../../components/booksBar/booksBar"
import {Banner} from "../../components/Banner/carrusel"



export function Index(){
    

return(
    <div>

<Banner/>
<BookBar nombre="React" categ="React" num={8}/>
<BookBar nombre="Horror" categ="Horror" num={8}/>
<BookBar nombre="Drama" categ="Drama" num={8}/>

</div>
)

}