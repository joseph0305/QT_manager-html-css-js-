   
let bible_arr = [];
// get bible 
const getBible = async () => {
    const json = await (
        await fetch(`https://yesu.io/bible?lang=kor&doc=ge&start=1:1&end=1:10`)
    ).json();
    return json;
}

// test
//let BibleArray = await getBible();

// .then
function ShowBibleWords(){
    getBible().then(data =>{ console.log(data); ShowWords_slide1(data);}).catch(err => console.log("err",err));
}
// promiss 로 뜨는 오류 
//https://okky.kr/article/704616

// 성경구절 보여주기
function ShowWords_slide1(data){
    const Slide1 = document.querySelector(".Bible_content");
    
    let a = data.map((item)=>formHTML(item)).join('')
    console.log(a);
    Slide1.innerHTML = a;
}

function formHTML(item){
    
    return `
    <div>${item.message}</div>
    `;
} 

ShowBibleWords();


// dropdown init
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, {alignment: 'right'});
});


var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

const Editor = toastui.Editor;

// toast UI 에디터 : markdown 시작
/*     const editor = new Editor({
    el: document.querySelector('#editor'),
    height: '500px',
    initialEditType: 'markdown',
    previewStyle: 'vertical'
}); */
// toast UI 에디터 : 평범 에디터 시작
const editor = new toastui.Editor({
    el: document.querySelector('#editor'),
    height: '90%',
    //initialValue: content,
    initialEditType: 'wysiwyg'
  });


let btn = document.querySelector("#init_side");
btn.addEventListener("click", ()=>{const a = editor.getMarkdown(); console.log("a",a);})

// tab js
let tabs = document.querySelectorAll(".tab");
let content = document.querySelectorAll(".items");

tabs.forEach( (tab, index) => {
    tab.addEventListener("click", () => {
        content.forEach((con) =>{
            con.classList.remove("is-active");
        });
        tabs.forEach( (tab) => {
            tab.classList.remove("is-active");
        });

        content[index].classList.add("is-active");
        tabs[index].classList.add("is-active");
    })
}
);