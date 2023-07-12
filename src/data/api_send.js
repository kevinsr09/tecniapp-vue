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
          'reparacion de computadores': '0010', 
          'reparacion de telefonos': '0020',
          'reparacion de televisores': '0040',
          'reparacion de neveras': '0050', 
          'reparacion de lavadoras': '0060', 
          'reparacion de estufas': '0080',
          'accesorios para telefonos': '1010',
        }
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