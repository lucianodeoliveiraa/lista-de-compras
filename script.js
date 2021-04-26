const botao = document.querySelector("button");
const ul = document.querySelector("#minhaul");
const pegueiinput = document.querySelector("#novo-item");

botao.addEventListener("click",criar);

function criar(){    
    //nova li
    const novali = document.createElement("li");
    const valorli = document.createTextNode(pegueiinput.value);
    novali.appendChild(valorli);
    ul.appendChild(novali)
    //botaodeleta
    var dBtn = document.createElement("button");
    dBtn.setAttribute("id","btn-deleta")
	dBtn.appendChild(document.createTextNode("X"));
	novali.appendChild(dBtn);
    dBtn.addEventListener("click",function(){
        novali.parentNode.removeChild(novali)
    });

    pegueiinput.value = "";
}

