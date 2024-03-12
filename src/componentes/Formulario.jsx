import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

const Formulario = ({seteador}) => {

    const [nombre, setNombre] = useState('')
    const capturaNombre = (e) => setNombre(e.target.value)

    const [email, setEmail] = useState('')
    const capturaEmail = (e) => setEmail(e.target.value)

    const [pass, setPass] = useState('')
    const capturaPass = (e) => setPass(e.target.value)

    const [cpass, setCpass] = useState('')
    const capturaCpass = (e) => setCpass(e.target.value)

   
    const validarForm = (e) =>{
        e.preventDefault()
        console.log(nombre)
        if (nombre.trim() === '' || email.trim() === '' || pass.trim() === '' || cpass.trim() === '') {
            seteador({msg:'Todos los campos son obligatorios', color:'danger'})
            
        }else if (pass != cpass) {
            seteador({msg:'Las contraseñas deben ser igual, reescribir su contraseña', color:'warning'})
        }else{
            seteador({msg:'Su registro fue exitoso', color:'success'})
            setNombre('')
            setEmail('')
            setPass('')
            setCpass('')
        }
        
    }
    

  return (
    <Form onSubmit={validarForm} className='mb-5'>
        <Form.Group className="mb-3" controlId="name">
            <Form.Control 
                type='text' 
                placeholder='Nombre'
                onChange={capturaNombre}
                value={nombre}
            ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control 
                type="email" 
                placeholder="tuemail@email.com"
                onChange={capturaEmail}
                value={email}
            ></Form.Control>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control 
                type="password" 
                placeholder="Password"
                onChange={capturaPass}
                value={pass}
            ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="confirmPassword">
            <Form.Control 
                type="password" 
                placeholder="Confirma tu Password" 
                onChange={capturaCpass}
                value={cpass}
            ></Form.Control>
        </Form.Group>
       <div className='d-grid'>
            <Button variant="primary" type='submit' className='btn btn-success'>
                Registrate
            </Button>
        </div> 
    </Form>
  )
}

export default Formulario