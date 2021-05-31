const { Router, json } = require("express");
const fetch = require("node-fetch");

const router = Router();

router.get('/items',(req,res)=>{
  let jsonRes=new Object();
  let mainCategory;
  console.log(req.query.q)
  jsonRes.author = { name: "Daniel", lastname: "Bernal"}
  console.log(req.params)
  fetch('https://api.mercadolibre.com/sites/MLA/search?q='+req.query.q)
  .then((res)=> res.json())
  .then((res)=> {
    let item =new Object();

    let array = res.results.map(
      (x)=>{
        let item =new Object();
        item.id = x['id'];
        item.title = x['title'];
        item.price = x['price'];
        item.picture = x['thumbnail'];
        item.location = x["address"]["state_name"];
        item.free_shipping  =x['shipping']['free_shipping'];
        item.idcategory  =x['category_id'];
        return item;
        }
      );
      let arrayCategoryes =  res.results.map((x)=>x['category_id']);
      let specimens = Array.from(new Set(arrayCategoryes)); 

      specimens = specimens.map((countSpec, i) =>{
        const actualSpecLength = arrayCategoryes.filter(x => x === countSpec).length;
        let auxobj={};
        auxobj.category =countSpec
        auxobj.count = actualSpecLength;
        return auxobj
      });

      mainCategory=specimens.reduce((v, x)=>{return ( v.count < x.count )? x:v;  })

    jsonRes.items= array;

  }).catch(function (x) {
    console.log(x);
  }).then(()=> {
    fetch('https://api.mercadolibre.com/categories/'+mainCategory.category)
    .then((res)=> res.json())
    .then((json)=>{
      
      jsonRes.categories =json['path_from_root'].map((x)=>{
        return x.name;
      });
      
     }).then(
       ()=>{
        res.json(jsonRes);
       }
     ).catch( (err)=> {
      console.log("error");
      console.log(err);
    });
  });
});
const getPricebyformat = (price)=>{
  const objPrice = { 
    currency: '$',
    amount: "",
    decimal: ""
    };

  if(price != undefined){
    const auxArray =price.toString().split(".");
    objPrice.amount = (auxArray[0])?auxArray[0]:"";
    objPrice.decimal = (auxArray[1])?auxArray[1]:"";
  }
  return objPrice;
}

router.get('/items/:id',(req,res)=>{
  const id = req.params.id;
  let jsonRes=new Object();
  jsonRes.author = { name: "Daniel", lastname: "Bernal"}
  if(id){
    fetch('https://api.mercadolibre.com/items/'+id)
    .then((res)=> res.json())
    .then(  
    (json)=>{
      let item =new Object();
        let  priceobj = getPricebyformat(json['price']);
        item.id = json['id'];
        item.title = json['title'];
        item.price = priceobj; 
        item.condition =  json['condition'];
        item.free_shipping =json['shipping']["free_shipping"]; 
        item.sold_quantity = json['sold_quantity'];
        item.idcategory = json['category_id'];
        item.picture = json['thumbnail']; 
        jsonRes.item = item;
    }
    ).then(()=>{
      fetch('https://api.mercadolibre.com/items/'+jsonRes.item.id+"/description")
      .then((res)=> res.json())
      .then((json)=>{
        jsonRes.item.description = json['plain_text'];
      }).catch(function (x) {
        console.log("error");
        console.log(x);
      }).then(()=> {
        fetch('https://api.mercadolibre.com/categories/'+jsonRes.item.idcategory)
        .then((res)=> res.json())
        .then((json)=>{  
          jsonRes.categories =  json['path_from_root'].map((x)=>{
            return x.name;
          });
          
          }).catch(function (x) {
            console.log("error");
            console.log(x);
          })     
        .then((x)=>{
          res.json(jsonRes);
        }).catch( (err)=> {
          console.log("error");
          console.log(err);
        });
      });
    });
  }  
});


module.exports = router;