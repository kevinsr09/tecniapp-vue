export function apiSend(msg){
  return {
  method:'POST',
  body: JSON.stringify({
    "model": "gpt-3.5-turbo",
    "messages": [
      {
        "role": "system",
        "content": `clasifica el problema del usuario en las siguientes categorias: 
        reparacion de televisores, reparacion de neveras, reparacion de estufas, 
        reparacion de lavadoras, reparacion de computadores, reparacion de telefonos, 
        accesorios para telefonos. solo respondes con la categoria`
      },
      {
        "role": "user",
        "content": `${msg}`
      }
    ]
  }),

  headers: {
  
    "Content-Type": "application/json",
    "Authorization": "Bearer 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"
  }
}
}