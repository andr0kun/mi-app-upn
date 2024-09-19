import React, { useReducer, useState } from 'react';
import './App.css';

const formReducer = (state, event) => {
 return {
   ...state,
   [event.name]: event.value
 }
}

function App() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [formData2, setFormData2] = useReducer(formReducer, {});
  const [formData3, setFormData3] = useReducer(formReducer, {});
  const [formData4, setFormData4] = useReducer(formReducer, {});
  const [formData5, setFormData5] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
    }, 7000);
  }

  const handleChange = event => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  }

  const handleChange2 = event => {
    setFormData2({
      name: event.target.name,
      value: event.target.value,
    });
  }
  const handleChange3= event => {
    const value = event.target.value;
    if (/^\d{0,9}$/.test(value)) { // Solo permite hasta 9 dígitos
      setFormData3({
        name: event.target.name,
        value: value,
      });
    }
  }
  const handleChange4 = event => {
    setFormData4({
      name: event.target.name,
      value: event.target.value,
    });
    
  }
  const handleChange5 = event => {
    setFormData5({
      name: event.target.name,
      value: event.target.value,
    });
    
  }
  return(
    <div className="estilo">
      <h1>Usando formularios y eventos en React y NodeJS por David Avila</h1>
      {submitting &&
       <div>
         Se subio la información correctamente:
         <ul>
           {Object.entries(formData).map(([name, value]) => (
             <li key={name}><strong>Nombres</strong>: {value.toString()}</li>
           ))}
         </ul>
         <ul>
           {Object.entries(formData2).map(([name, value]) => (
             <li key={name}><strong>Apellidos</strong>: {value.toString()}</li>
           ))}
         </ul>
         <ul>
           {Object.entries(formData5).map(([name, value]) => (
             <li key={name}><strong>Fecha de Nacimiento</strong>: {new Date(value).toLocaleDateString()}</li>
           ))}
         </ul>
         <ul>
            {Object.entries(formData3).map(([name, value]) => (
             <li key={name}><strong>Telefono</strong>: {value.toString()}</li>
           ))}
         </ul>
         <ul>
            {Object.entries(formData4).map(([name, value]) => (
             <li key={name}><strong>Direccion</strong>: {value.toString()}</li>
           ))}
         </ul>
       </div>
      }
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Nombres</p>
            <input name="name" onChange={handleChange}/>
          </label>
          <label>
            <p>Apellidos</p>
            <input name="ape" onChange={handleChange2}/>
          </label>
          <label>
            <p>Fecha de Nacimiento</p>
            <input name="date" type="date" onChange={handleChange5}/>
          </label>
          <label>
          <p>Telefono</p>
          <input name="phone" type= "tel" placeholder= "Ingrese un número válido" onChange={handleChange3}/>
          </label>
          <label>
          <p>Direccion</p>
          <input name="avenue" onChange={handleChange4}/>
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}



export default App;