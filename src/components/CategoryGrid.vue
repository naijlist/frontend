<template>
  <v-container class="grey lighten-5">
    <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
    <v-row>
        <v-col cols="12">
            <v-row justify="start">
                <v-col
                    v-for="n in categories"
                    :key="n"
                    cols="4"
                    md="2"
                    sm="4"
                    xs="4"
                    lg="2"
                    xl="2"
                >
                    <v-card
                        class="pa-2 text-center"
                        outlined
                        tile
                        max-height="200px"
                        height="120px"
                        style="cursor:pointer;"
                        >
                            <v-icon size="60">{{n.icon}}</v-icon>
                            <p class="clrchg">{{n.name}}</p>
                    </v-card>
                </v-col>
            </v-row>
        </v-col>
    </v-row>

  </v-container>
</template>

<script>
export default {
    data(){
        return{
            categories: [
                {'name': 'Phones', 'icon': 'fa fa-mobile', 'color': '', 'link': ''},
                {'name': 'Electronics & Appliences', 'icon': 'fa fa-laptop', 'color': '', 'link': ''},
                {'name': 'Cars', 'icon': 'fa fa-car', 'color': '', 'link': ''},
                {'name': 'Bikes', 'icon': 'fa fa-motorcycle', 'color': '', 'link': ''},
                {'name': 'Funitures', 'icon': 'fa fa-wheelchair', 'color': '', 'link': ''},
                {'name': 'Pets', 'icon': 'fa fa-paw', 'color': '', 'link': ''},
                {'name': 'Fashion', 'icon': 'fa fa-asterisk', 'color': '', 'link': ''},
                {'name': 'Kids', 'icon': 'fa fa-gamepad', 'color': '', 'link': ''},
                {'name': 'services', 'icon': 'fa fa-shield', 'color': '', 'link': ''},
                {'name': 'Real Estate', 'icon': 'fa fa-home', 'color': '', 'link': ''},
            ]
        }
    }
}
</script>
<style scoped>
    .focus-layout{
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
}
</style>