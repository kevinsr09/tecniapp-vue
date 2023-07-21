
export function dataFilter(data, category, categories){
  
  if(category == 'all'){
   
    const categoriesValues = Object.values(categories)
    const categoriesKeys = Object.keys(categories)
    const categoriesLength = Object.keys(categories).length

    for(let i = 0; i < data.length; i++){
    
      for(let j = 0; j < categoriesLength; j++){
      
        if(data[i].categoria == categoriesKeys[j]){
          data[i].categoria = categoriesValues[j]
        }
      }
      return data
    }
  }else{
    return data.filter(tec => tec.categoria == category).filter(tec => tec.categoria = categories[category])
  }
}