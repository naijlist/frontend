<template>
<div class="flex flex-col w-11/12 py-5 text-white  container mt-10 mx-auto  m-auto p-auto">
      <div class="flex overflow-x-scroll  hide-scroll-bar">
        <div class="flex flex-nowrap lg:ml-20 md:ml-20 ml-10 ">
          <div v-for="(item, index) in items" :key="index" class="inline-block px-3">
            <div class="w-20 h-20 max-w-xs overflow-hidden px-2 py-2 rounded-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
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
