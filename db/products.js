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
    return true;
  }


  getProductbyId(getId){
    for(let i=0; i<this._collection.length; i++){
      if(this._collection[i].id === getId){
        console.log(this._collection[i]);
        return this._collection;
      }
    }
  }
/*
  temp(x){
    for(let i=0; i<this._collection.length; i++){
      if(x.body.name === this._collection[i].name){
        return this._collection[i];

      }
    }
  }*/
/*
  app.put('/buzzword', (req, res) => {
  for (let i=0; i< buzzWordsArray.length; i++){
    if(req.body.buzzWord === buzzWordsArray[i].buzzWord){
      console.log('buzzWordsArray[i]: ',buzzWordsArray[i].buzzWord);
      buzzWordsArray[i].heard = req.body.heard;
      totalScore += buzzWordsArray[i].points;
      res.send( `Yeay! Word has been heard \n Total Score: ${totalScore}` );*/

  checkId (reqBody){
    if(reqBody.hasOwnProperty('id')){
      return true;
    }else{
      return false;
    }
  }



  removeProductById (id){
    for(let i=0; i<this._collection.length; i++){
      if(this._collection[i].id === id){
        this._collection.splice(this._collection.indexOf(this._collection[i], 1));
        return true;
      }
    }
    return false;
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