<template>
    <div>
        <template v-if="isShow">
            <div class="navbar">
                <ul id="nav" class="topnav">
                        <span>THIS INTERIOR</span>
                        <li><a href="">Home</a></li>
                        <li><a href="">Collection</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Contact</a></li>
                        <li class="responsive"><a href="javascript:void(0);" v-on:click="isShow= false">=</a></li>
                </ul>
            </div>

            <div class="main">
                <div>
                    <p class="main-title">Modern interior</p>
                    <p class="sub-title">
                        A full-Service residential & commercial interior design and staging company offering professional organizing & eco-services
                    </p>

                    <button>Read more <i class="fa fa-long-arrow-right" aria-hidden="true" style="color:white !important"></i></button>
                </div>
                <div class="sub-main">
                    <div>
                            <img class="main-image" src="./../assets/photo1.png">
                    </div>

                    <div class="profile">
                        <div class="sub-item">
                            <img class="profile-image" src="./../assets/photo2.png" height="72px">
                            <div>
                                <p style="color: #FFFFFF;">Aliza Webber</p>
                                <p style="color: #828282;">Interior designer</p>
                            </div>
                        </div>

                        <div style="font-family: Lora;
                                    font-style: normal;
                                    font-weight: bold;
                                    font-size: 24px;
                                    line-height: 31px;
                                    margin-left: 2%">
                            <p>Designed in 2020 by</p>
                            <p>Aliza Webber</p>
                        </div>
                    </div>
                </div>
            </div>
        </template>

        <template v-else>
            <span class="x-icon" v-on:click="isShow = true">X</span>
            <ul class="phone-nav">
                <li><a href="">Home</a></li>
                <li><a href="">Collection</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </template>
    </div>
</template>

<script>
export default {
    data(){
        return{
            isShow : true
        }
    },
    methods : {
        show(){
                var x = document.getElementById("nav");
                if (x.className === "topnav") {
                    x.className += " responsive-nav";
                } else {
                    x.className = "topnav";
                }
        }
    }
}
</script>

<style>
.navbar ul{
    display: flex;
    justify-content: flex-end;
}
.navbar ul li{
    display: inline;
    margin-left: 8%;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
}
.navbar ul li a{
    color: white;
    text-decoration: none;
}
span{
    position: absolute;
    left: 2.5%;
    color: white;
    padding: .8%;
    border: 1px solid white;
}
.main{
    margin-top: 5%;
    display: grid;
    grid-template-columns: 40% auto;
    position: relative;
}
.main-title{
    font-family: Lora;
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 61px;
}
button{
    background: #181719;
    color: white;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    border: none;
    padding: 0;
    margin: 0;
}
.profile-image{
    border-radius: 50%;
    margin-right: 10%;
}
.sub-item{
    display: flex;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;

}
.profile{
    position: absolute;
    z-index: 1;
    background: #181719;
    bottom: -10%;
    right: 1%;
    padding: 1% 15% 1% 1%;

}
.sub-main{
        margin-left: 20%;
}
.main-image{
    height: inherit;
    max-height: 100%;
    max-width: 100%;
}

.phone-nav{
    display: flex;
    flex-direction: column;
    color: white;
    list-style-type: none;
    margin: 0 auto;
    justify-content: center;
    align-content: center;
    align-items: center;
    height: 100vh;
}
.phone-nav ul{
    display: block;
}

.phone-nav a{
    color: white;
    text-decoration: none;
}
.responsive{
    visibility: hidden;
}

@media screen  and (max-width: 1000px){
    .sub-main{
        height: auto;
        max-width: 100%;
    }
    .profile{
        max-width: 30%;
        max-height: 50%;
    }
    .profile-image{
        height: auto;
        max-height: 50px;
    }
    .profile p{
        font-size: 10px;
    }
}


@media screen  and (max-width: 700px){
    .main{
        grid-template-columns: auto;
    }
    .sub-main{
        margin: 0;
        margin-top: 10%;
    }

    .profile{
        max-width: 80%;
        max-height: 50%;
        width: 80%;
    }
    .sub-item{
        padding: 2%;
    }
    .sub-item p{
        margin: 0 !important;
    }
    .sub-item img{
        margin-right: 5%;
    }
    .topnav :not(:first-child){
        display: none;
    }
    .topnav :last-child{
        display: block;
    }

    ul li{
        margin-top: 20%;
    }
    a{
        font-family: Montserrat;
    }
    .responsive{
        visibility: visible;
        margin: 0;
    }
    .x-icon{
        display: flex;
        width: 90vw;
        justify-content: flex-end;
        align-items: flex-end;
        border: none !important;
    }
}
</style>
