export function apiSend(){
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
        accesorios para telefonos. solo respondes con las categorias en un array`
      },
      {
        "role": "user",
        "content": `${this.userProblem}`
      }
    ]
  }),

  headers: {
  
    "Content-Type": "application/json",
    "Authorization": "Bearer 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"
  }
}
}