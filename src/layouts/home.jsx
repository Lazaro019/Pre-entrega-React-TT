import Footer from "../components/Footer"
import Header from "../components/Header"
import Main from "../components/Main"
import Nav from "../components/Nav"
import ProductosContainer from "../components/ProductosContainer"



function Home({ functionCarrito }) {

    return(
        <div>
            <div>    
                <Header/>
                <Main/>
            </div>
            <section>
                <ProductosContainer functionCarrito={functionCarrito}/>
            </section>
                <Footer/>

        </div>
    )
}

export default Home