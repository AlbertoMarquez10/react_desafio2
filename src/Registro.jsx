import 'bootstrap/dist/css/bootstrap.min.css'
import './registro.css'
import Formulario from './componentes/Formulario'
import SocialButton from './componentes/SocialButton'
import Alert from './componentes/Alert'
import Face from './assets/img/facebook.png'
import Linked from './assets/img/linkedin.png'
import Git from './assets/img/code.png'
import { useState } from 'react'

const Registro = () =>{
  const [alerta, setAlerta] = useState({msg:'', color:''})

  return (
    <>
      <div className='conteiner'>
        <SocialButton 
          face = { Face }
          linked = { Linked }
          git = { Git }
        />
        <Formulario seteador = { setAlerta }/>
        {alerta.msg !== '' && <Alert alertaf = {alerta}/>}
        
      </div>

    </>
  )
}

export default Registro
