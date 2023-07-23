export function apiSend(msg){
  return {
  method:'POST',
  body: JSON.stringify({
    "model": "gpt-3.5-turbo",
    "messages": [
      {
        "role": "system",
        "content": `clasifica el problema del usuario y me respondes solo con el codigo de la categoria:
        {
          '0010': 'reparacion de computadores', 
          '0020': 'reparacion de telefonos' ,
          '0030': 'reparacion de tablets',
          '0040': 'reparacion de software de telefonos', 
          '0050': 'reparacion de software de computadoras', 
          '0070': 'reparacion de display de telefonos' ,
        } 

        En cualquier otro caso responde con 'all'
        `
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