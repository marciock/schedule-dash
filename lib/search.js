const recordSearch=require('./recordsearch');
const search=(args,socket,out)=>{

    const io=socket;

    let rec= recordSearch(args);
  
   io.emit(out,rec);
  


}

module.exports=search;
