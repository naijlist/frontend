<template>
  <section
    class="flex w-full bg-primary px-[150px] py-10 sm:pt-10 mt-20 sm:mt-20"
  >
    <!-- Search input -->
    <div class="w-1/2 px-10 flex flex-col gap-5 justify-center">
      <h1
        class="text text-white text-semibold text-3xl font-bold sm:text-5xl pb-4 font-nunito"
      >
        Google of classified ads
      </h1>
      <p
        class="text-white sm:text-base text-sm text-semibold font-nunito w-[50rem]"
      >
        Buy and sell anything, from used cars to mobile phones and computers. Or
        explore properties, job opportunities, and more. Your one-stop shop for
        all your needs
      </p>
      <!-- <div class="flex gap-1 items-center py-5">
        <svg
          width="25"
          height="24"
          viewBox="0 0 17 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.50008 7.99992C8.86675 7.99992 9.18075 7.86925 9.44208 7.60792C9.70297 7.34703 9.83341 7.03325 9.83341 6.66658C9.83341 6.29992 9.70297 5.98592 9.44208 5.72459C9.18075 5.4637 8.86675 5.33325 8.50008 5.33325C8.13341 5.33325 7.81964 5.4637 7.55875 5.72459C7.29741 5.98592 7.16675 6.29992 7.16675 6.66658C7.16675 7.03325 7.29741 7.34703 7.55875 7.60792C7.81964 7.86925 8.13341 7.99992 8.50008 7.99992ZM8.50008 12.8999C9.85563 11.6555 10.8612 10.5248 11.5167 9.50792C12.1723 8.49147 12.5001 7.58881 12.5001 6.79992C12.5001 5.58881 12.1139 4.59703 11.3414 3.82459C10.5694 3.05259 9.6223 2.66659 8.50008 2.66659C7.37786 2.66659 6.43052 3.05259 5.65808 3.82459C4.88608 4.59703 4.50008 5.58881 4.50008 6.79992C4.50008 7.58881 4.82786 8.49147 5.48341 9.50792C6.13897 10.5248 7.14452 11.6555 8.50008 12.8999ZM8.50008 14.6666C6.71119 13.1444 5.37519 11.7304 4.49208 10.4246C3.60853 9.11925 3.16675 7.91103 3.16675 6.79992C3.16675 5.13325 3.70297 3.80547 4.77541 2.81659C5.84741 1.8277 7.08897 1.33325 8.50008 1.33325C9.91119 1.33325 11.1527 1.8277 12.2247 2.81659C13.2972 3.80547 13.8334 5.13325 13.8334 6.79992C13.8334 7.91103 13.3919 9.11925 12.5087 10.4246C11.6252 11.7304 10.289 13.1444 8.50008 14.6666Z"
            fill="white"
          />
        </svg>
        <div
          class="bg-black hover:bg-gray-800 transition ease-in duration-500 px-2 rounded-md"
        >
          <select
            class="py-2 text-white text-sm bg-black hover:bg-gray-800 duration-500 transition ease-in focus:outline-none"
          >
            <option>Abuja</option>
            <option>Kaduna</option>
            <option>Lagos</option>
          </select>
        </div>
      </div> -->
      <div>
        <form class="flex" @submit="searchAds">
          <div class="flex bg-white w-full py-[1px] pl-5 rounded-2xl">
            <input
              v-model="query"
              class="flex-1 py-3 px-2 rounded-tl-md rounded-bl-md focus:outline-none text-textColor font-josefineSans"
              type="text"
              placeholder="Search for products  e.g phones, cars"
            />
            <button
              class="flex gap-2 bg-black text-white justify-center items-center jus rounded-2xl px-5 font-light text-sm"
            >
              <span>Search</span>
              <svg
                width="22"
                height="22"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.8933 16.5331C18.6919 16.2689 19.6067 16.4545 20.242 17.0898L23.3773 20.2252C24.2747 21.1226 24.2747 22.5776 23.3773 23.475C22.4799 24.3723 21.025 24.3723 20.1275 23.475L16.9921 20.3396C16.3568 19.7043 16.1713 18.7895 16.4355 17.991L14.3018 15.8572L15.7596 14.3994L17.8933 16.5331Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.62964 9.97424C1.62964 5.41971 5.32181 1.72754 9.87634 1.72754C14.4309 1.72754 18.123 5.41971 18.123 9.97424C18.123 14.5288 14.4309 18.2209 9.87634 18.2209C5.32181 18.2209 1.62964 14.5288 1.62964 9.97424ZM9.87634 3.78921C6.46044 3.78921 3.69131 6.55834 3.69131 9.97424C3.69131 13.3901 6.46044 16.1593 9.87634 16.1593C13.2922 16.1593 16.0614 13.3901 16.0614 9.97424C16.0614 6.55834 13.2922 3.78921 9.87634 3.78921Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
    <div class="w-1/2 flex justify-center">
      <img src="/hero_side_image.svg" alt="" class="aspect-auto" />
    </div>
  </section>
</template>

<script setup>
const query = ref();
const router = useRouter();
const searchAds = (e) => {
  e.preventDefault();
  console.log(query);
  router.push({ path: `/search/${query.value}` });
};
</script>

<style scoped>
.hero--container {
  height: 330px;
  background: #5534a5;
  background-image: url("../../public/bg001.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: left, right;
}
@media (max-width: 480px) {
  .hero--container {
    background-image: none;
  }
}
</style>
