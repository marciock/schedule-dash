const fetchSaveSchedule=(url,params)=>{
    let response=fetch(url,{
        method:'POST',
        headers:{
          'Content-Type':'application/json;charset=utf-8'
        },
        body:JSON.stringify(params)
      });
      
}

const fecthFindSchedule=(url,element)=>{

  let st=fetch(url,{
    method:'GET',
    headers:{
      "Content-Type":"text/plain;charset=UTF-8"
    },
   
  }).then(response=>{
      //console.log(data.json());
      return response.json();

  }).then(dash=>{

    if(dash !== undefined){
   dash.map(f=>{
     console.log(f.title)
 
    const el=document.getElementById(element)
   // if(f.active===true){
    let li=document.createElement('li');
    //console.log(li);
    let myD=new Date();
    let dateE=`${myD.getDate(f.dateend)}/${myD.getMonth(f.dateend)}/${myD.getFullYear(f.dateend)}`;
    let dateA=`${myD.getDate(f.dateactual)}/${myD.getMonth(f.dateactual)}/${myD.getFullYear(f.dateactual)}`;
    
    console.log(dateE)
   let conka =`
     
          <div class="collapsible-header">

          <div class="col s4"><p class="flow-text">${f.title}</p></div>
          <div class="col s2"><p class="flow-text">${dateA}</p></div>
          <div class="col s2"><p class="flow-text">${dateE}</p></div>
          <div class="col s2 center-align"><p class="flow-text">Alta</p></div>
          <div class="col s2 center-align">
          <div class="switch">
            <label><input type="checkbox" checked id="${f._id}" onchange="deActive('${f._id}')"><span class="lever"></span></label>
          </div>
         </div>
          </div>
          <div class="collapsible-body">
          <div> <span class="flow-text" contenteditable="true" id="descript_${f._id}">${f.description}</span></div>

          <div class="right">
            <button  class="waves-effect waves-teal btn-floating btn-small green"  onclick="checkable('descript_${f._id}','${f._id}')" ><i class="material-icons">check</i></button>
            <button  class="waves-effect waves-teal btn-floating btn-small blue"><i class="material-icons">help</i></button>
          </div>
          </div>
      `;
     li.innerHTML=conka;

     el.appendChild(li);
     
     
  //  }

  }).join('')
}
    //return data;
  })
}


const fetchItens=(url,params,element)=>{
  let response=fetch(url,{
    method:'POST',
    headers:{
      'Content-Type':'application/json;charset=utf-8'
    },
    body:JSON.stringify(params)
  });
  //let search= response.json();

   // console.log(response);

    let st=fetch(url,{
      method:'GET',
      headers:{
        "Content-Type":"text/plain;charset=UTF-8"
      },

    }).then(response=>{
        //console.log(data.json());
        return response.json();

    }).then(data=>{
      
      const tBodyd=document.getElementById(element);
      const tr=document.createElement('tr');
     
        tr.innerHTML=`<td >${data.product}</td><td>${data.price}</td>`;
        tBodyd.appendChild(tr);

       
       
      //return data;
    })
}





