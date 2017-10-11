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
      if(this._collection[i].name === newProduct.name){
        throw new Error ('Product name already exists');
        }
      }
    this._collection.push(newProduct);
    newProduct.id = this.id;
    this.id++;
    return true;
  }


  getProductName(getId){
    for(let i=0; i<this._collection.length; i++){
      if(this._collection[i].id === getId){
        console.log(this._collection[i].id);
        return this._collection.name;
      }
    }
  }

  temp(x){
    for(let i=0; i<this._collection.length; i++){
      if(x.body.name === this._collection[i].name){
        return this._collection[i];

      }
    }
  }

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