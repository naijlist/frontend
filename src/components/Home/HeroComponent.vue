<template>
  <div
    class="bg-primary w-screen flex sm:flex-row flex-col items-center text-white font-nunito sm:py-5 py-10"
  >
    <div class="w-full flex flex-col justify-between px-[50px]">
      <h1 class="font-bold lg:text-[50px] xl:text[60px] md:text-[40px]">
        Google of Classified Ads
      </h1>
      <h4
        class="font-light xl:text-base lg:text-[14px] md:text-[12px] text-[10px] xl:w-[45rem] lg:w-[40rem]"
      >
        Buy and sell anything, from used cars to mobile phones and computers. Or explore properties,
        job opportunities, and more. Your one-stop shop for all your needs
      </h4>
      <form
        class="bg-white rounded-2xl text-textColor flex py-[2px] w-full font-josefineSans pl-0 mt-10"
      >
        <input
          type="text"
          class="focus:outline-none w-full rounded-2xl px-5"
          placeholder="Search for products  e.g phones, cars"
        />
        <button class="bg-black text-white flex items-center gap-2 py-[10px] px-6 rounded-2xl">
          Search
          <span
            ><svg
              width="26"
              height="26"
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
          </span>
        </button>
      </form>
    </div>
    <div class="w-full py-10 sm:flex hidden justify-center">
      <img src="@/assets/hero_img.svg" alt="" class="aspect-auto" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
