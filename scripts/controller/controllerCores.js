class ControllerCores{

    constructor(){

        this._boxImg = document.querySelector("#boxImage");
        this._bodyColor = document.querySelector("#body");
        this._btn1 = document.querySelector("#Controller");
        this._btn2 = document.querySelector("#Controller2");

        this.start();

    }

    start(){

        this.acender();
        this.apagar();

    }

    acender(){

        this._btn1.addEventListener("click",()=>{

            this._bodyColor.style.backgroundColor = "#ffff";
            this._btn1.style.display = "none";
            this._btn2.style.display = "initial";
            this._boxImg.src="/img/acessa.png";

        });

    }

    apagar(){

        this._btn2.addEventListener("click",()=>{

            this._bodyColor.style.backgroundColor = "#000000";
            this._btn1.style.display = "initial";
            this._btn2.style.display = "none";
            this._boxImg.src="/img/apagada.png";

        });

    }

}