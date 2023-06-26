let message = "ayer el niño abrio la nevera y movio una perilla que tiene la nevera y ahora no prende",
arrayOpciones="";

const persona =   {
  "model": "gpt-3.5-turbo",
  "messages": [
    {
      "role": "system",
      "content": "You are a helpful assistant."
    },
    {
      "role": "user",
      "content": `clasifica el siguiente problema: '${message}' en las siguientes categorias: ['reparacion de televisores', 'reparacion de neveras', 'reparacion de estufas', 'reparacion de lavadoras', 'reparacion de computadores', 'reparacion de telefonos', 'accesorios para telefonos']. solo me respondes con las categorias separadas por '-'`
    }
  ]
}

const opciones = {
  method:'POST',
  body: JSON.stringify(persona),
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer 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"
  }
}

function respuesta(){
  setTimeout(()=>{ fetch('https://api.openai.com/v1/chat/completions', opciones).then(res => res.json()).then(data => {
   console.log(data.choices[0].message.content.split("-"))
  })},1000);
}

respuesta()