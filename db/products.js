/*jshint esversion:6*/

class Products {
  constructor(){
    this.id = 10001;
    this._collection = [];
  }

  getAllProducts(){
    return this._collection;
  }

  addProduct(newProduct){
    for(var i=0; i<this._collection.length; i++){
      if(this._collection[i].Name === newProduct.Name){
        throw new Error ('Product name already exists');
        }
      }
    this._collection.push(newProduct);
    newProduct.id = this.id;
    this.id++;
    console.log(this._collection);
    return true;
  }




  getProductById(getId){
      for(let i=0; i<this._collection.length; i++){
        if(this._collection[i].id === getId){
          console.log(this._collection[i]);
          return this._collection[i];
      }
    }
  }

  checkId (reqBody){
    if(reqBody.hasOwnProperty('id')){
      return true;
    }else{
      return false;
    }
  }


/*

  removeProductById (id){
    for(let i=0; i<this._collection.length; i++){
      if(this._collection[i].id === id){
        this._collection.splice(this._collection.indexOf(this._collection[i], 1));
        return true;
      }
    }
    return false;
  }
*/



/*  findProduct (reqUrl){
    return this._collection.id === reqUrl;
  }*/
/*
    getProductName(reqUrl){
    for(let i=0; i<this._collection.length; i++){
      if(this._collection[i].id === reqUrl){
        return this.collection[i].getId;
      }
    }
  }
*/
  updateProduct(id, data){
    let selectedProd = this.getAllProducts(id);
    selectedProd.Name = data.Name;
    selectedProd.Price = data.Price;
    selectedProd.Inventory = data.Inventory;
    return selectedProd;
  }


  deleteProduct(getId){
    for(let i=0; i<this._collection.length; i++){
      if(this._collection[i].id === getId){
        return this._collection.splice(i, 1);
      }
    }
  }

}



module.exports = Products;