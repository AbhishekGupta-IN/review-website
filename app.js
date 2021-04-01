var postBtn = document.querySelector("#btn-post");
var inputText = document.querySelector("#txt-input");

const blackStr = "&#9733";
const whiteStr = "&#9734";
let review_id = 1;

function rateit(num) {
    console.log(num);
    for(let i = 1; i <= num; i++){
        var str_id = "star" + i;
        document.getElementById(str_id).innerHTML = blackStr;
    }
    for(let i=num+1; i<=4; i++){
        var str_id = "star" + i;
        document.getElementById(str_id).innerHTML = whiteStr;
    }
}

postBtn.addEventListener("click", function post() {
    var input = inputText.value;
    let container_div = document.createElement("div");
    let output_div = document.createElement("span");
    output_div.innerText = input;
    
    let star_copy = document.getElementById("rate").cloneNode(true);
    star_copy.setAttribute('id', 'review' + review_id);
    review_id++;
    for(let star_span of star_copy.childNodes){
        // console.log(star_span.childNodes);
        let children = star_span.childNodes;
        if (children.length > 1) {
            console.log(children);
            children[1].disabled = true;
        }
        // star_span.getElementsByTagName("button")[0].disabled = true;
    }

    output_div.classList.add('output-div');
    star_copy.classList.add('output-star');

    container_div.appendChild(output_div);
    container_div.appendChild(star_copy);

    document.getElementById("reviews").appendChild(container_div);

    inputText.value = "";
    rateit(0);
})