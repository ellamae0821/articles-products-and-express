/*jshint esversion:6*/

class Products {
  constructor(){
    this.id = 0;
    this._collection = [];
  }

  getAllProducts(){
    return this._collection;
  }
/*
  addProduct (newProduct){
    this._collection.push(newProduct);
    newProduct.id = this.id;
    this.id++;
    console.log('_collection :', this._collection);
    return true; // if true = success else...
  }
*/
  addProduct(newProduct){
    if (getDuplicate(newProduct.name)){
      this._collection.push(newProduct);
      newProduct.id = this.id;
      this.id++;
      return true;
    }else{
      return false;
    }
  }


  getDuplicate(productName){
    for (let i=0; i<this._collection.length; i++){
      if (this._collection[i].name === productName) {
        return false;
      }
    }
  }

  getProductId(getId){
    for(let i=0; i<this._collection.length; i++){
      if(this._collection[i].id === getId){
        return products[i].id;
      }
    }
  }

  editProduct(id, property, value){

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