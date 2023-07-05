let message = "ayer cayo un rayo muy duro y no volvio a prender el portatil de mi hijo y mi lavadora",
arrayOpciones="";

const persona =   {
  "model": "gpt-3.5-turbo",
  "messages": [
    {
      "role": "system",
      "content": `clasifica el problema del usuario en las siguientes categorias: reparacion de televisores, reparacion de neveras, reparacion de estufas, reparacion de lavadoras, reparacion de computadores, reparacion de telefonos, accesorios para telefonos. solo respondes con las categorias en un array`
    },
    {
      "role": "user",
      "content": `${message}`
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
   console.log(JSON.parse(data.choices[0].message.content))
  })},1000);
}

respuesta