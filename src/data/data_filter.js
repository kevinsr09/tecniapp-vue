import { data } from './data'
import { categories } from './categories'
const categorias = categories()

export function dataFilter(category='all'){
  
  const datos = data()
  
  if(category == 'all'){
    
    const categoriasValues = Object.values(categorias)
    const categoriasKeys = Object.keys(categorias)
    const categoriasLength = Object.keys(categorias).length
    
    for(let i = 0; i < datos.length; i++){
      
      for(let j = 0; j < categoriasLength; j++){
        
        if(datos[i].categoria == categoriasKeys[j]){
          datos[i].categoria = categoriasValues[j]
        }
      }
    }
    return datos
    
  }else{
    return datos.filter(tec => tec.categoria == category).filter(tec => tec.categoria = categorias[category])
  }
}