// array [id produit+qté produit+couleur produit]
/*id  produit.color+ quantite 
let idProduit = ['','']; 
let quantiteProduit = ['',''];
let colorProduit = ['','']; 

// utiliser localStorage pour pouvoir accèder à l'array depuis la page panier 


//var cart = localStorage.getItem('produit'); 
console.log(localStorage); 

localStorage.setItem("", ""); */ 

//let stockageInfoProduits = JSON.stringify(panierProduct); 
//window.localStorage.setItem('infoProduit', stockageInfoProduits);
//console.log(window.localStorage.getItem('infoProduit')); 
//});


//---------------------------------------

//----- Récupération des données du local storage

    //prendre la key dans le localStorage et la mettre dans une variable 

//let stockageInfoProduits = JSON.parse(window.localStorage.getItem('infoProduit'));
    
//convertir la chaine de caractère en objet javascript
//let panierProduct = JSON.parse(/*data*/stockageInfoProduits);


// Déclaration des éléments 
//const cartItems = document.getElementById('cart__items').setAttribute('value', panierProduct.quantitePanierProduits);  //.value = panierProduct.id;
 
/*let stockageInfoProduit = JSON.parse(window.localStorage.getItem('infoProduit'));*/ 
let stockageInfoProduit = JSON.parse(window.localStorage.getItem('infoProduit'));

console.log(stockageInfoProduit.length)
for ( let i in stockageInfoProduit) {


/*const i= stockageInfoProduit.value*/ 
   
    //Declare elements
    const cartItems= document.getElementById('cart__items')
    const newArticle = document.createElement("article")
    const divNewArticleImage = document.createElement("div")
    const newImage = document.createElement("img")
    const divNewArticleContent = document.createElement("div")  
    const divNewArticleContentTitlePrice = document.createElement("div")
    const nameTitlePrice =document.createElement("h2")
    const priceTitlePrice = document.createElement("p")
    const divNewArticleContentSettings = document.createElement("div")
    const divNewArticleContentSettingsQuantity = document.createElement("div")
    const quantiteSettingsQuantity = document.createElement("p")
    const inputsettingsQuantity = document.createElement("input")
    const divNewArticleContentSettingsDelete = document.createElement("div")
    const deleteItem = document.createElement("p")

        //Link 
        cartItems.appendChild(newArticle)
        newArticle.appendChild(divNewArticleImage)
        divNewArticleImage.appendChild(newImage)    
        newArticle.appendChild(divNewArticleContent)    
        divNewArticleContent.appendChild(divNewArticleContentTitlePrice)
        divNewArticleContentTitlePrice.appendChild(nameTitlePrice)
        divNewArticleContentTitlePrice.appendChild(priceTitlePrice)
        divNewArticleContent.appendChild(divNewArticleContentSettings)
        divNewArticleContentSettings.appendChild(divNewArticleContentSettingsQuantity)
        divNewArticleContentSettingsQuantity.appendChild(quantiteSettingsQuantity)
        divNewArticleContentSettingsQuantity.appendChild(inputsettingsQuantity)
        divNewArticleContentSettings.appendChild(divNewArticleContentSettingsDelete)
        divNewArticleContentSettingsDelete.appendChild(deleteItem)
          
                      // nameTitlePrice.textContent= 'h2'
                      // priceTitlePrice.textContent='p'
                    //quantiteSettingsQuantity.textContent='qté'
                     //inputsettingsQuantity.textContent='input'
                     //deleteItem.textContent='delete'
    console.log(stockageInfoProduit);
/*if (stockageInfoProduit!=null){
}*/ 

stockageInfoProduit.pop();


/*if (!'infoProduit'){
    console.log("it's empty"); 
 }

    for (let i=0; i<stockageInfoProduit.length ; i++){
const panierCart = stockageInfoProduit[i]; 
}
*/ 

/*for (var index=0; index<count ; index++){
    nameTitlePrice[index]= object1
    
    var object1 = JSON.parse(localStorage.getItem('infoProduit'))[0]; 
}*/
}
//console.log(object1)
var object2 = JSON.parse(localStorage.getItem('infoProduit'))[1]; 
console.log(object2)
/*function getLocalStorageItem('infoProduit', value){
    if (stockageInfoProduit.nameTitlePrice){
 nameTitlePrice = JSON.stringify(value)
    }
}*/ 