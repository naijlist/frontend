<script setup lang="ts">
import { CreditCard, LogOut, Settings, User, UserPlus, LogIn } from 'lucide-vue-next'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import Icon from '../Icons/IconComponent.vue'

import { useAuthStore } from '../../stores/auth.store'

defineProps<{
  isLoggedIn: boolean
}>()

const authStore = useAuthStore()
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button class="bg-[#000000] rounded-md px-3 py-2 text-white">
        <span class="lg:flex items-center gap-3 hidden">
          <Icon icon="user" /> {{ isLoggedIn ? '' : 'Account' }}</span
        >
        <span>
          <svg
            class="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"
            />
          </svg>
        </span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent class="w-56">
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuSeparator />

      <template v-if="isLoggedIn">
        <DropdownMenuGroup>
          <DropdownMenuItem class="cursor-pointer">
            <router-link to="/dashboard" class="flex w-full">
              <CreditCard class="mr-2 h-4 w-4" />Dasboard</router-link
            >
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <User class="mr-2 h-4 w-4" />
            <span>Profile</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Settings class="mr-2 h-4 w-4" />
            <span>Settings</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem @click="authStore.logout()">
            <LogOut class="mr-2 h-4 w-4" /> <span>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </template>

      <template v-else>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <router-link to="/login" class="w-full flex items-center">
              <LogIn class="mr-2 h-4 w-4" /> <span>Sign in</span>
            </router-link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <router-link to="/register" class="w-full flex items-center">
              <UserPlus class="mr-2 h-4 w-4" />
              <span>Sign up</span>
            </router-link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </template>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
