<template>
    <v-container>
        <v-row justify="center">
                <v-col cols="4" md="2" sm="3" xs="4" v-for="n in categories" :key="n.item">
                <center>
                    <v-hover v-slot:default="{ hover }">
                    <v-card flat tile class="pa-2" 
                    :elevation="hover ? 12 : 0"
                    :class="{ 'on-hover': hover }">
                    <v-img :src="require(`@/assets/imgs/${n.img}`)" width="90"/>
                    <div class="subtitle pt-2" >{{n.name}}</div>
                    </v-card>
                    </v-hover>
                </center>
            </v-col>
            <!-- <v-col cols="6" md="2">
                <v-img src="../../public/images/gadget.png" width="90"></v-img>
            </v-col> -->
        </v-row>
    </v-container>
</template>

<script>
export default {
    data(){
        return{
            dir: '../../public/images/',
            ransparent: 'rgba(255, 255, 255, 0)',
            categories: [
                {'name': 'Phones', 'img': 'smartphone.png', 'color': 'deep-orange', 'link': ''},
                {'name': 'Electronics', 'img': 'gadget.png', 'color': 'indigo', 'link': ''},
                {'name': 'Properties', 'img': 'house.png', 'color': 'indigo', 'link': ''},
                {'name': 'Jobs', 'img': 'job.png', 'color': 'indigo', 'link': ''},
                {'name': 'Funiture', 'img': 'sofa.png', 'color': 'indigo', 'link': ''},
                {'name': 'Cars', 'img': 'car.png', 'color': 'indigo', 'link': ''},
                {'name': 'Bikes', 'img': 'bike.png', 'color': 'indigo', 'link': ''},
                {'name': 'Pet', 'img': 'pet.png', 'color': 'indigo', 'link': ''},
                {'name': 'Fashion', 'img': 'dress.png', 'color': 'indigo', 'link': ''},

            ]
        }
    }
}
</script>
<style scoped>
    /* .focus-layout{
        margin: 5px;
        padding: 20px 0;
        transition: 0.5s all;
        -webkit-transition: 0.5s all;
        -moz-transition: 0.5s all;
        -o-transition: 0.5s all;
        -ms-transition: 0.5s all;
        text-align: center;
    }
    .focus-layout {
    background: #FBFBFB;
    transition: 0.5s all;
    -webkit-transition: 0.5s all;
    -moz-transition: 0.5s all;
    -o-transition: 0.5s all;
    -ms-transition: 0.5s all;
}
.focus-layout:hover {
    background-color: #01a185;
    transition:0.5s all;
	-webkit-transition:0.5s all;
	-moz-transition:0.5s all;
	-o-transition:0.5s all;
	-ms-transition:0.5s all;
}
.icons {
    text-align: center;
    transition: 0.5s all;
    -webkit-transition: 0.5s all;
    -moz-transition: 0.5s all;
    -o-transition: 0.5s all;
    -ms-transition: 0.5s all;
}
.icons i{
    font-size: 40px;
    color: #fff;
    background: #dd0908;
    border-radius: 50%;
    width: 90px;
    height: 90px;
    line-height: 95px;
    transition: 0.5s all;
    -webkit-transition: 0.5s all;
    -moz-transition: 0.5s all;
    -o-transition: 0.5s all;
    -ms-transition: 0.5s all;
}
.focus-layout:hover div.focus-image i{
	background:#FBFBFB;
	color:#000;
    transition:0.5s all;
	-webkit-transition:0.5s all;
	-moz-transition:0.5s all;
	-o-transition:0.5s all;
	-ms-transition:0.5s all;
}
.focus-layout h4 {
    margin: 0 0 0 0;
    color: #4C4C4C;
    font-size: 18px;
    text-align: center;
    height: 35px;
    margin-top: 20px;
}
.focus-layout:hover h4.clrchg {
    color: #fff;
} */
.v-card {
  transition: opacity .5s ease-in-out;
  cursor: pointer;

}

.v-card:not(.on-hover) {
  /* opacity: 0.6; */
  background: transparent;
 }
</style>