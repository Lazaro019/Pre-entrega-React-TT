import { Helmet } from "react-helmet"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Main from "../components/Main"

<Helmet>
  <title>Inicio | Juegos x Diversion</title>
  <meta name="description" content="Inicio de Juegos x Diversion, donde encontraras los mejores juegos" />
  <meta name="robots" content="index, follow" />
</Helmet>

function Home() {
    

    return(
        <div>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    )
}

export default Home