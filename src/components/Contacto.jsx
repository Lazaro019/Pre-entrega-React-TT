import { Helmet } from "react-helmet";

<Helmet>
  <title>Contacto | Juegox x Diversion</title>
  <meta name="description" content="Seccion de Contacto" />
  <meta name="robots" content="index, follow" />
</Helmet>

function Contacto () {

    return(
        <div>
          <form action="" method="post">
            <fieldset>
               <legend>Datos personales</legend>
               <p>
               <label for="nombre">Nombre
               <input name="nombre" id="nombre" type="text" required/>
               </label>
               <label for="apellido">Apellido
                <input name="apellido" id="apellido" type="text" required/>
               </label> 
               </p>
               <p>
                <label for="telefono">Numero de telefono
                    <input name="telefono" id="telefono" type="text" required/>
                </label>
                <label for="correo">Correo electronico
                    <input name="Correo" id="correo" type="email" required/>
                </label>
               </p>
            </fieldset>
            <fieldset>
                <legend>Comentarios</legend>
                <label for="comentario">
                    <textarea name="comentario" id="comentario" rows="8" cols="50"></textarea>
                </label>
                <button>Enviar</button>
            </fieldset>
        </form>
        </div>
    )
}

export default Contacto;