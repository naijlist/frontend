<template>
  <div class="flex flex-col px-10 h-full">
    <!-- <TagComponent title="My Ads" :color="`bg-[#CABDFF]`" /> -->

    <!-- <div class="bg-white mx-auto w-[95%] h-full px-10 py-5 my-10 shadow-sm rounded-lg">
      <div class="flex justify-evenly items-center h-[150px]">
        <StatiscticsCard :title="`Products sold`" :icon="`tagFilled`" :count="46" />
        <Separator orientation="vertical" />
        <StatiscticsCard :title="`Total Ads`" :icon="`adsFilled`" :count="46" />
        <Separator orientation="vertical" />
        <StatiscticsCard :title="`Store visits`" :icon="`usersFilled`" :count="46" />
        <Separator orientation="vertical" />
        <StatiscticsCard :title="`Wallet`" :icon="`walletFilled`" :count="46" />
      </div>
    </div> -->
    <!-- <div class="flex items-center gap-2 my-5">
      <Button class="bg-[#DADADA] px-1 py-1 rounded-md"><IconComponent icon="list" /></Button>
      <Button><IconComponent icon="grid" /></Button>
    </div> -->
    <div class="flex flex-col gap-5 justify-center items-center h-full">
      <span class="text-5xl text-textColor">You dont have ads yet</span>
      <router-link
        to="/create-advert"
        class="bg-primary flex items-center gap-3 px-5 py-1 text-white rounded-lg"
      >
        <IconComponent icon="plus" /> Create new ads
      </router-link>
      <CreateAdsDialog />
    </div>
  </div>
</template>

<script setup lang="ts">
import StatiscticsCard from '@/components/Dashboard/StatiscticsCard.vue'
import { Separator } from '@/components/ui/separator'
import TagComponent from '@/components/Shared/TagComponent.vue'
import CreateAdsDialog from './components/CreateAdsDialog.vue'
</script>
