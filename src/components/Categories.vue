<template>
 <!-- component -->
<div class="flex flex-col w-11/12 py-5 text-white  container mt-10 mx-auto  m-auto p-auto">
<!-- <h1 class="flex py-5 lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-bold text-4xl text-gray-800">
  Example
</h1> -->
      <div class="flex overflow-x-scroll  hide-scroll-bar">
        <div class="flex flex-nowrap lg:ml-20 md:ml-20 ml-10 ">
          <div v-for="(item, index) in items" :key="index" class="inline-block px-3">
            <div class="w-20 h-20 max-w-xs overflow-hidden px-2 py-2 rounded-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <img :src="require(`../assets/icons/${item.icon}`)"  :alt="item.title"/>
            </div>
            <div class="w-20  mt-2">
              <p class="text-black text-center break-words text-xs">{{item.title}}</p>
            </div>
          </div>
        </div>
      </div>
</div>
</template>

<script>
export default {
  name: "autoscroll",
  components: {
  },
  data() {
    return {
      options: {
        responsive: [
          { end: 576, size: 1 },
          { start: 576, end: 768, size: 2 },
          { start: 768, end: 992, size: 3 },
          { size: 5 },
        ],
        autoscroll: {
          enabled: false,
          interval: 5000, // in milliseconds
          repeat: false, // used to tell if after reaching the end of the list should the list return to beginning again
        },
        list: {
          // 1200 because @media (min-width: 1200px) and therefore I want to switch to windowed mode
          windowed: 1200,
          // Because: #app {padding: 80px 24px;}
          padding: 24,
        },
      },
      items: [
        {title: 'phones', icon: 'phone.png'},
        {title: 'laptops', icon: 'laptop.png'},
        {title: 'gadgets', icon: 'gadget.png'},
        {title: 'properties', icon: 'house.png'},
        {title: 'fashion', icon: 'fashion-design.png'},
        {title: 'funiture', icon: 'furnitures.png'},
        {title: 'pets', icon: 'pets.png'},
        {title: 'cars', icon: 'car.png'},
        {title: 'bike', icon: 'bike.png'},
        {title: 'job', icon: 'job-seeker.png'},
        {title: 'jewerries', icon: 'jewellery.png'},
        {title: 'Health beauty ', icon: 'shampoo.png'},
        {title: 'Sport outdoor', icon: 'sport.png'},
        {title: 'Food', icon: 'wheat-sack.png'},
        
        ]
    };
  },
};
</script>

<style>
.hide-scroll-bar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.hide-scroll-bar::-webkit-scrollbar {
  display: none;
}
</style>
