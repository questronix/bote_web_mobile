

<template>
    <div class="beers">
            <div id="header">
                <a href="#" id="filter" ><i class="material-icons">filter_list</i></a>
                <h1>SHELF</h1>
                <a href="#"><button >CONFIRM</button> </a>
            </div>
                
            <div class="maincontent">
                <div id="beercards">
                <beer-card v-for="(beer, index) in beers" :key="index" :beername="beer.beername" :beerdetails="beer.beerdetails" :img="beer.img" quantity='2'> </beer-card>
                <beer-card v-for="(beer, index) in beers" :key="index" :beername="beer.beername" :beerdetails="beer.beerdetails" :img="beer.img" quantity='2'> </beer-card>
                <beer-card v-for="(beer, index) in beers" :key="index" :beername="beer.beername" :beerdetails="beer.beerdetails" :img="beer.img" quantity='2'> </beer-card>
                <beer-card v-for="(beer, index) in beers" :key="index" :beername="beer.beername" :beerdetails="beer.beerdetails" :img="beer.img" quantity='2'> </beer-card>
                </div>
                <div id="loadmore" v-if="loadmore === false">
                    <a href="#"><button v-on:click="toggleLoadMore">LOAD MORE</button> </a>
                </div>
                <div v-else>
                    <div id="beercards">
                    <beer-card v-for="(beer, index) in beers" :key="index" :beername="beer.beername" :beerdetails="beer.beerdetails" :img="beer.img" quantity='2'> </beer-card>
                    <beer-card v-for="(beer, index) in beers" :key="index" :beername="beer.beername" :beerdetails="beer.beerdetails" :img="beer.img" quantity='2'> </beer-card>
                    <beer-card v-for="(beer, index) in beers" :key="index" :beername="beer.beername" :beerdetails="beer.beerdetails" :img="beer.img" quantity='2'> </beer-card>
                    <beer-card v-for="(beer, index) in beers" :key="index" :beername="beer.beername" :beerdetails="beer.beerdetails" :img="beer.img" quantity='2'> </beer-card>
                    </div>
                    <div id="loadmore">
                        <a href="#"><button v-on:click="toggleLoadMore">SHOW LESS</button> </a>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import Vue from 'vue/dist/vue';
import Api from '../../lib/Api.js';
import '../../css/shelf.css'
import beercard from './beercard.vue';

let shelf = Vue.component('main-content', {
   data: function(){
        return{
            loadmore: false,
            img : 'https://pixel.nymag.com/imgs/daily/grub/2017/best-of-new-york/uws-bar-es.w710.h473.jpg',
            beers: [{beername:"beer ", beerdetails: "mura d2", img:"https://pixel.nymag.com/imgs/daily/grub/2017/best-of-new-york/uws-bar-es.w710.h473.jpg"},
                   {beername: "beer 2", beerdetails: "try mo 2", img:"https://pixel.nymag.com/imgs/daily/grub/2017/best-of-new-york/uws-bar-es.w710.h473.jpg"},
                   {beername: "beer ni Gemma", beerdetails: "beer ito ni gemma", img:"https://pixel.nymag.com/imgs/daily/grub/2017/best-of-new-york/uws-bar-es.w710.h473.jpg"}]
        }
    },
    methods: {
        toggleLoadMore(){
            this.loadmore = !this.loadmore;
        }
    }
});

export default shelf;

</script>