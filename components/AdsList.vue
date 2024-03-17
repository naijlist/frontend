<template>
  <div class="items-center justify-center w-11/12 container mx-auto">
    <h1 class="px-1 pt-10 pb-5 lg:text-2xl text-base sm:text-3xl">
      {{ title }}
    </h1>
    <!-- Grid start-->
    <div
      class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-14"
    >
      <!--Card-->
      <div
        v-for="(ads, index) in adverts"
        :key="index"
        class="card rounded-lg bg-gray-100 lg:bg-bgColor lg:hover:bg-gray-100 duration-500 transition ease-in cursor-pointer"
      >
        <div class="pt-0 px-0 rounded-md flex flex-col">
          <!--Image start-->
          <router-link :to="`/ads-details/${index}`">
            <div class="rounded-md overflow-hidden">
              <img :src="`/${ads?.img}`" alt="" />
            </div>
          </router-link>
          <!--Image end-->
          <div class="flex justify-end -mt-5 px-2">
            <img
              src="/icons/heart-add.svg"
              class="bg-white rounded-full items-center px-1 py-1"
              alt=""
            />
          </div>
          <div class="flex justify-between items-center -mt-2 lg:mt-0">
            <router-link :to="`/ads-details/${index}`">
              <div class="pl-4">
                <span
                  class="bg-white rounded-full text-xs lg:text-sm px-2 py-1 font-semibold font-josefineSans text-[#6C6C6E] shadow-xl"
                  >Laptop</span
                >
                <h5
                  class="lg:text-base font-medium text-xs -mt-3 py-4 font-nunito"
                >
                  {{ ads.name }}
                </h5>
                <p
                  class="lg:text-base text-xs -mt-4 sm:-mt-3 sm:pr-4 py-1 font-josefineSans font-light text-dashboardPreNursery"
                >
                  <b>NGN {{ ads.price }}</b>
                </p>
                <span class="flex gap-2 items-center sm:pr-4 py-2">
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.50008 7.99992C8.86675 7.99992 9.18075 7.86925 9.44208 7.60792C9.70297 7.34703 9.83341 7.03325 9.83341 6.66658C9.83341 6.29992 9.70297 5.98592 9.44208 5.72459C9.18075 5.4637 8.86675 5.33325 8.50008 5.33325C8.13341 5.33325 7.81964 5.4637 7.55875 5.72459C7.29741 5.98592 7.16675 6.29992 7.16675 6.66658C7.16675 7.03325 7.29741 7.34703 7.55875 7.60792C7.81964 7.86925 8.13341 7.99992 8.50008 7.99992ZM8.50008 12.8999C9.85563 11.6555 10.8612 10.5248 11.5167 9.50792C12.1723 8.49147 12.5001 7.58881 12.5001 6.79992C12.5001 5.58881 12.1139 4.59703 11.3414 3.82459C10.5694 3.05259 9.6223 2.66659 8.50008 2.66659C7.37786 2.66659 6.43052 3.05259 5.65808 3.82459C4.88608 4.59703 4.50008 5.58881 4.50008 6.79992C4.50008 7.58881 4.82786 8.49147 5.48341 9.50792C6.13897 10.5248 7.14452 11.6555 8.50008 12.8999ZM8.50008 14.6666C6.71119 13.1444 5.37519 11.7304 4.49208 10.4246C3.60853 9.11925 3.16675 7.91103 3.16675 6.79992C3.16675 5.13325 3.70297 3.80547 4.77541 2.81659C5.84741 1.8277 7.08897 1.33325 8.50008 1.33325C9.91119 1.33325 11.1527 1.8277 12.2247 2.81659C13.2972 3.80547 13.8334 5.13325 13.8334 6.79992C13.8334 7.91103 13.3919 9.11925 12.5087 10.4246C11.6252 11.7304 10.289 13.1444 8.50008 14.6666Z"
                      fill="black"
                    />
                  </svg>
                  <h5 class="lg:text-base text-xs text-slate-400 font-nunito">
                    {{ ads.location }}
                  </h5>
                </span>
              </div>
            </router-link>
            <!-- <router-link to="/"> <button>View</button> </router-link> -->
          </div>
          <!-- <p class=" text-slate-500 text-sm mt-5 px-4 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p> -->
        </div>
      </div>
      <!--Card end-->
    </div>
    <!-- Grid end-->
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
});

const title = computed(() => props?.title);
const adverts = [
  {
    img: "speaker.svg",
    name: "2 Sonic vib. mega speaker c12",
    price: "₦76,000",
    location: "Gwarimpa, Abuja",
  },
  {
    img: "laptop.svg",
    name: "Hp 16gb ram 256gb core i7",
    price: "₦176,000",
    location: "Lokogoma, Abuja",
  },
  {
    img: "car.svg",
    name: "mini car 2016",
    price: "₦500,000",
    location: "wuse 2, Abuja",
  },
  {
    img: "macbook2020.svg",
    name: "Mac book pro 2020",
    price: "400,000",
    location: "Gwarimpa, Abuja",
  },
  {
    img: "macbook2019.svg",
    name: "Mac book laptop 2019",
    price: "350,000",
    location: "Gwarimpa, Abuja",
  },
  {
    img: "small_speaker.svg",
    name: "JBL Speaker",
    price: "160,000",
    location: "Gwarimpa, Abuja",
  },
];
</script>

<style scoped></style>
