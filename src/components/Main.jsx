import "../styles/Main.css";


function Main() {  
    return (  
        <main style={{ padding: "20px", color: "black" }}>  
            <h1>Encontrá los mejores juegos para tu consola facil y accesible</h1  >
            <h2>Juegos Destacados</h2>
            <div className="imagen-conteiner">
                <img style={{borderRadius: "10px"}} src="https://m.media-amazon.com/images/M/MV5BNjJiNTFhY2QtNzZkYi00MDNiLWEzNGEtNWE1NzBkOWIxNmY5XkEyXkFqcGc@._V1_.jpg" width="125" alt="125" />
                <img style={{borderRadius: "10px"}} src="https://juegosdigitalesargentina.com/files/images/productos/1618882391-marvels-spider-man-game-of-the-year-edition-ps5.jpg" width="125" alt="125" />
                <img style={{borderRadius: "10px"}} src="https://images.g2a.com/470x276/1x1x0/halo-the-master-chief-collection-xbox-live-key-global-i10000008375001/d23dc8ef828e4b4385e30dd7" width="125" alt="125" />
                <img style={{borderRadius: "10px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpnc2zcaj1gA7r8fe94FKPW6etdJppPUUyqw&s" width="125" alt="125" />
            </div>
        </main>  
    );  
}  
export default Main; 