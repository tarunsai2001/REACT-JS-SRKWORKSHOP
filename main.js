function loadJs(file,callback){
    var rawdata=new XMLHttpRequest()
    rawdata.overrideMimeType("application/json")
    rawdata.open("GET",file,true)
    rawdata.onreadystatechange=function()
    {
        if(rawdata.readyState===4 && rawdata.status=="200"){
            callback(rawdata.responseText)

        }
    }
    rawdata.send(null)

}
loadJs("css/data.json",function(Text){
    let data=JSON.parse(Text)
    console.log(data)
    basic(data.basics)
    career(data.carrerobjective)
    education(data.Education)
})
var main=document.querySelector('.main')
var left=document.querySelector('.left')
var right=document.querySelector('.right')

function basic(pro)
{
    var image=document.createElement('img')
    image.src="images/profile.png"
    left.appendChild(image)

    var name=document.createElement('h1');
    name.textContent=pro.name;
    left.appendChild(name)

    var age=document.createElement('h2');
    age.textContent=pro.age;
    left.appendChild(age)

    var des=document.createElement('h1');
    des.textContent=pro.designation;
    left.appendChild(des)
}
function career(c)
{
    var h=document.createElement('h1')
    h.textContent="Career objective";
    right.appendChild(h)

    var hr=document.createElement('hr')
    right.appendChild(hr)
    
    var care=document.createElement('h2')
    care.textContent=c.career;
    right.appendChild(care)
}
function education(edu)
{
    var table=document.createElement('table');
    var tr1="<tr><<td>Degree</td><td>Institute</td><td>Year of passing</td></tr>"
    tr2=""
    for(i=0;i<edu.length;i++)
    {
        tr2=tr2+"<tr><td>"+edu[i].institute+"</td><td>"+edu[i].Degree+"</td><td>"+edu[i].Year+"</td></tr>";

        table.innerHTML=tr1+tr2
    }
    right.appendChild(table)
}