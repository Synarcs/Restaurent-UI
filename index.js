const value =document.querySelector('.colomn');
console.log(value);

value_1=document.createElement('button');
value_1.className='vedang';

console.log(value_1);

value.appendChild(value_1);
const change = document.querySelector('.vedang');
change.style.height = '2em';
change.style.width = '2em';
change.style.display = 'none';


change.addEventListener('mouseover',value_change);

function value_change(e){
    console.log(e.target);
}

const id = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const name_1 = {name:'vedang',srname:'parasnis'};
        const json = JSON.stringify(name_1);
        resolve(json);
    },1443);
});

async function name(params) {
    const id_det = await id;
    console.log(id_det)
}
name();
   function weather(){
        const result=fetch
        ('http://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/2487956/');
    }
async function weather_json(){
    try{
        const id = await fetch('http://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/2487956/');
        const string = await id.json();
        return string;    
    }
    catch(err){
        console.log(err);
    }
}
    weather();
    weather_json().then(data=>console.log(data));
