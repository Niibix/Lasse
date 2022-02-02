import React from 'react';

export default function ShoppinList(props) {
function onListItemClick(element) {
  //console.log(element);
 //console.log('Click') ;
 props.itemClickedEvent(element);
}


  return (
  
  <div>

        <ul> 
        
            {
                props.listItems.map((item, index) => {
            
                  return <li onClick={() => onListItemClick(item)} key ={index} className={item.isChecked ? "isChecked" : null }>
                        { item.qty } { item.name }</li> 
                 
                 
                  /*
                  if(item.isChecked){
                    return <li key ={index} className="isChecked">{ item.qty } { item.name }</li> 
                  } else{
                    return <li key ={index}>{ item.qty } { item.name }</li> 
                  }
                  */

                  // JSX:n sisällä kun halutaan kutsua propsista tässä tapauksessa taulukosta tiettyä 
                  //kohtaa tulee se laittaa aaltosulkuihin. Tässä tapauksessa kutsu tapahtuu {item.(mitä taulukosta halutaan tuoda esim nimi)}
                  // Eli muuttuja item joka viittaa taulukkoon ja esim name kenttä joten {item.name} tulostaa kutsuttavan propsin taulukosta nimet

                  // isChecked on luokka joka annetaan jotta CSS tiedotossa voidaan tehdä tekstin yli viivaus kun se halutaan tehdä
                  // If lauseella on tehty komento jos App.js tiedotossa shoppingListItems taulukon sisällä olevissa olioissa
                  //isChecked on true teksti yliviivataan ja jos taas false ajetaan else vaihtoeto jossa isChecked luokkaa ei ole joten teksti jää yliviivaamatta.
                  //Yllä mainittu tapa on kommenttien sisällä sillä lopullinen versio tehtiin ternary operaatiolla. 
                  // Linkki: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator 
                  


                  // Selitys tälle -> onClick={() => test(item): on luotu funktio jonka sisällä kutsutaan onListItemClicked funktiota item parametrilla. 
                  //
                })



            }
        </ul>

        <div>{ props.descriptionFieldValue }</div>
 
  </div>)
  
  ;
}
