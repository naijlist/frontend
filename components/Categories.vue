<template>
  <section
    class="flex flex-col w-full lg:w-[90%] py-2 lg:py-5 text-white container mt-10 mx-auto m-auto p-auto bg-white px-5 rounded-xl"
  >
    <div class="flex justify-between text-textColor mb-5 text-sm lg:text-base">
      <span>Categories</span>
      <span class="flex items-center"
        >see all
        <button>
          <svg
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.75004 5L11.25 9.5L6.75 14"
              stroke="#575757"
              stroke-width="2"
              stroke-miterlimit="16"
            />
          </svg></button
      ></span>
    </div>
    <div class="flex overflow-x-scroll hide-scroll-bar">
      <div class="flex gap-3 flex-nowrap">
        <div
          v-for="(category, index) in categories"
          :key="`${index + 1}: ${category?.title}`"
          class="inline-block px-3"
        >
          <router-link :to="`/categories/${category.title}`">
            <div
              class="w-20 h-20 max-w-xs overflow-hidden px-2 py-2 rounded-md hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer"
            >
              <img :src="`/icons/${category.icon}`" :alt="category.title" />
            </div>
            <div class="w-20 mt-2">
              <p class="text-black text-center break-words text-xs">
                {{ category.title }}
              </p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  categories: Object,
});

// const categories = computed(()=>props?.categories)

const categories = [
  {
    title: "phones",
    icon: "phone.png",
  },
  {
    title: "laptops",
    icon: "laptop.png",
  },
  {
    title: "gadgets",
    icon: "gadget.png",
  },
  {
    title: "properties",
    icon: "house.png",
  },
  {
    title: "fashion",
    icon: "fashion-design.png",
  },
  {
    title: "funiture",
    icon: "furnitures.png",
  },
  {
    title: "pets",
    icon: "pets.png",
  },
  {
    title: "cars",
    icon: "car.png",
  },
  {
    title: "bike",
    icon: "bike.png",
  },
  {
    title: "job",
    icon: "job-seeker.png",
  },
  {
    title: "jewerries",
    icon: "jewellery.png",
  },
  {
    title: "Health beauty ",
    icon: "shampoo.png",
  },
  {
    title: "Sport outdoor",
    icon: "sport.png",
  },
  {
    title: "Food",
    icon: "wheat-sack.png",
  },
];
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
