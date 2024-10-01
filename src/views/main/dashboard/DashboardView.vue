<script setup lang="ts">
import TagComponent from '@/components/Shared/TagComponent.vue'
import StatiscticsCard from '@/components/Dashboard/StatiscticsCard.vue'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'

import IconComponent from '@/components/Icons/IconComponent.vue'
import ChartComponent from '@/components/Dashboard/ChartComponent.vue'
import TableComponent from '@/components/Dashboard/TableComponent.vue'
</script>
<template>
  <div class="flex flex-col px-10">
    <TagComponent title="Overview" :color="`bg-[#CABDFF]`" />

    <div class="bg-white mx-auto w-[95%] h-full px-10 py-5 my-10 shadow-sm rounded-lg">
      <div class="flex justify-evenly items-center h-[150px]">
        <StatiscticsCard
          :title="`Products sold`"
          :icon="`tagFilled`"
          :count="46"
          :duration="`+12 this week`"
        />
        <Separator orientation="vertical" />
        <StatiscticsCard
          :title="`Total Ads`"
          :icon="`adsFilled`"
          :count="46"
          :duration="`+12 this week`"
        />
        <Separator orientation="vertical" />
        <StatiscticsCard
          :title="`Store visits`"
          :icon="`usersFilled`"
          :count="46"
          :duration="`+12 this week`"
        />
        <Separator orientation="vertical" />
        <StatiscticsCard
          :title="`Wallet`"
          :icon="`walletFilled`"
          :count="46"
          :duration="`+12 this week`"
        />
      </div>
    </div>

    <div
      class="bg-gradient-to-r from-primary from-40% via-[#91B3FA] to-[#BDD0FB] h-[230px] rounded-lg flex justify-end items-center"
    >
      <div class="flex">
        <img src="@/assets/dashboard_shop.svg" class="h-[250px] mx-10" alt="" />
        <span class="my-5 mx-5"><IconComponent :icon="`cancel`" /></span>
      </div>
    </div>

    <div class="flex justify-between gap-10 my-10">
      <div class="w-full bg-white rounded-lg p-5 h-fit">
        <ChartComponent />
      </div>
      <div class="w-full bg-white rounded-lg p-5 h-fit">
        <TableComponent />
      </div>
    </div>
  </div>
</template>
