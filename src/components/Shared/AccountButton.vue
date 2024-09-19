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
      <Button class="flex gap-3 bg-[#000000] rounded-md px-3 py-2 text-white">
        <Icon icon="user" /> {{ isLoggedIn ? '' : 'Account' }}
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
