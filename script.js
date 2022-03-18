var select = document.getElementById('select');
var text1 = document.getElementById('text1');
var text2 = document.getElementById('text2');

text1.addEventListener('input',()=>{
    showMe()
});
select.addEventListener('change',()=>{
    showMe()
})

function showMe(){
    if(select.value == 'encode'){
        text2.value =  atob(text1.value);
    }else {
        text2.value =  btoa(text1.value);
    }
}