<script setup lang="ts">
import { computed, h, ref } from 'vue'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { toast } from '@/components/ui/toast'

import IconComponent from '@/components/Icons/IconComponent.vue'
import { useRouter, useRoute } from 'vue-router'
import OtpView from './OtpView.vue'
import { useResetPasswordStore } from '@/stores/resetPasswordStore'
import { usePUT } from '@/hooks/usePUT'

const router = useRouter()

const resetPasswordStore = useResetPasswordStore()
const { mutate, isPending } = usePUT('auth/reset-password')

const showPassword = ref<boolean>(false)
const showConfirmPassword = ref<boolean>(false)
const changePassword = computed(() => resetPasswordStore.resetter?.changePassword)

const toggleShowPassword = () => {
  showPassword.value = !showPassword.value
}

const toggleShowConfirmPassword = () => {
  showConfirmPassword.value = !showConfirmPassword.value
}

const formSchema = toTypedSchema(
  z
    .object({
      newPassword: z
        .string({ required_error: 'New Password field is required' })
        .min(6, { message: 'Password must be atleast 6 characters' })
        .max(250),
      confirmPassword: z
        .string({ required_error: 'Confirm Password field is required' })
        .min(6, { message: 'Password must be atleast 6 characters' })
        .max(250)
    })
    .refine(
      (values) => {
        return values.newPassword === values.confirmPassword
      },
      {
        message: 'Passwords must match!',
        path: ['confirmPassword']
      }
    )
)

const { handleSubmit } = useForm({
  validationSchema: formSchema
})

console.log(resetPasswordStore.resetter)

const onSubmit = handleSubmit((values: any) => {
  console.log(values)
  const resetValues: any = {
    otp: resetPasswordStore.resetter?.otp?.toString(),
    newPassword: values.newPassword
  }

  mutate(resetValues, {
    onSuccess: () => {
      const resetter = resetPasswordStore.resetter
      resetPasswordStore.setResetter({ ...resetter, changePassword: true })
    },
    onError: (error: any) => {
      console.log(error)
    }
  })
})
const handleRedirectToLogin = () => {
  resetPasswordStore.setResetter({})
  router.push('/login')
}
</script>
<template>
  <div
    class="flex flex-col gap-7 justify-center items-center h-screen font-plusJakarta w-[320px] mx-auto"
  >
    <div class="flex flex-col gap-5 items-center w-full">
      <template v-if="!changePassword">
        <IconComponent icon="setPasswordPageIcon" />
        <h2 class="font-semibold text-[1.5rem]">Set New Password</h2>
        <span class="text-sm text-textColor font-medium tracking-wide"
          >Must be at least 8 characters long</span
        >
      </template>
      <template v-else>
        <IconComponent icon="successPasswordChange" />
        <h2 class="font-semibold text-[1.5rem]">All Done!</h2>
        <span class="text-sm text-textColor font-medium tracking-wide"
          >You have successfully reset your password</span
        >
        <Button
          @click="handleRedirectToLogin"
          class="bg-black text-white w-full text-center rounded-lg"
        >
          Login
        </Button>
      </template>
    </div>
    <template v-if="!changePassword">
      <div v-if="!changePassword" class="w-full flex flex-col items-center">
        <form class="w-full space-y-6" @submit="onSubmit">
          <FormField v-slot="{ componentField }" name="newPassword">
            <FormItem>
              <FormLabel class="text-textColor text-xs">New Password</FormLabel>
              <FormControl>
                <div class="flex items-center border px-2">
                  <Input
                    :type="showPassword ? 'text' : 'password'"
                    placeholder="Password"
                    class="border-0"
                    v-bind="componentField"
                  />
                  <span v-if="showPassword" @click="toggleShowPassword" class="cursor-pointer">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22 8C22 8 18 14 12 14C6 14 2 8 2 8"
                        stroke="black"
                        stroke-width="1.5"
                      />
                      <path
                        d="M15 13.5L16.5 16"
                        stroke="black"
                        stroke-width="1.5"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M20 11L22 13"
                        stroke="black"
                        stroke-width="1.5"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M2 13L4 11"
                        stroke="black"
                        stroke-width="1.5"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9 13.5L7.5 16"
                        stroke="black"
                        stroke-width="1.5"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                  <span v-else @click="toggleShowPassword" class="cursor-pointer">
                    <svg
                      width="23"
                      height="23"
                      viewBox="0 0 23 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.9811 10.808C20.252 11.1879 20.3874 11.3779 20.3874 11.6591C20.3874 11.9402 20.252 12.1302 19.9811 12.5101C18.7637 14.2172 15.6547 17.8971 11.4759 17.8971C7.29715 17.8971 4.18821 14.2172 2.97085 12.5101C2.69992 12.1302 2.56445 11.9402 2.56445 11.6591C2.56445 11.3779 2.69992 11.1879 2.97085 10.808C4.18821 9.10096 7.29715 5.42102 11.4759 5.42102C15.6547 5.42102 18.7637 9.10096 19.9811 10.808Z"
                        stroke="black"
                        stroke-width="1.33672"
                      />
                      <path
                        d="M14.1496 11.659C14.1496 10.1825 12.9527 8.9856 11.4762 8.9856C9.99964 8.9856 8.80273 10.1825 8.80273 11.659C8.80273 13.1356 9.99964 14.3325 11.4762 14.3325C12.9527 14.3325 14.1496 13.1356 14.1496 11.659Z"
                        stroke="black"
                        stroke-width="1.33672"
                      />
                    </svg>
                  </span>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          <FormField v-slot="{ componentField }" name="confirmPassword">
            <FormItem>
              <FormLabel class="text-textColor text-xs">Confirm password</FormLabel>
              <FormControl>
                <div class="flex items-center border px-2">
                  <Input
                    :type="showConfirmPassword ? 'text' : 'password'"
                    placeholder="Password"
                    class="border-0"
                    v-bind="componentField"
                  />
                  <span
                    v-if="showConfirmPassword"
                    @click="toggleShowConfirmPassword"
                    class="cursor-pointer"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22 8C22 8 18 14 12 14C6 14 2 8 2 8"
                        stroke="black"
                        stroke-width="1.5"
                      />
                      <path
                        d="M15 13.5L16.5 16"
                        stroke="black"
                        stroke-width="1.5"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M20 11L22 13"
                        stroke="black"
                        stroke-width="1.5"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M2 13L4 11"
                        stroke="black"
                        stroke-width="1.5"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9 13.5L7.5 16"
                        stroke="black"
                        stroke-width="1.5"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                  <span v-else @click="toggleShowConfirmPassword" class="cursor-pointer">
                    <svg
                      width="23"
                      height="23"
                      viewBox="0 0 23 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.9811 10.808C20.252 11.1879 20.3874 11.3779 20.3874 11.6591C20.3874 11.9402 20.252 12.1302 19.9811 12.5101C18.7637 14.2172 15.6547 17.8971 11.4759 17.8971C7.29715 17.8971 4.18821 14.2172 2.97085 12.5101C2.69992 12.1302 2.56445 11.9402 2.56445 11.6591C2.56445 11.3779 2.69992 11.1879 2.97085 10.808C4.18821 9.10096 7.29715 5.42102 11.4759 5.42102C15.6547 5.42102 18.7637 9.10096 19.9811 10.808Z"
                        stroke="black"
                        stroke-width="1.33672"
                      />
                      <path
                        d="M14.1496 11.659C14.1496 10.1825 12.9527 8.9856 11.4762 8.9856C9.99964 8.9856 8.80273 10.1825 8.80273 11.659C8.80273 13.1356 9.99964 14.3325 11.4762 14.3325C12.9527 14.3325 14.1496 13.1356 14.1496 11.659Z"
                        stroke="black"
                        stroke-width="1.33672"
                      />
                    </svg>
                  </span>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          <Button type="submit" class="w-full bg-black text-white">
            <span v-if="isPending">
              <svg
                aria-hidden="true"
                class="w-6 h-6 text-gray-200 animate-spin dark:text-primary fill-primary"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            </span>
            <span v-else>Reset Password</span>
          </Button>
        </form>
        <router-link to="/login" class="flex gap-4 my-5 items-center text-xs text-textColor"
          ><IconComponent icon="arrowBack" /> Back to login</router-link
        >
      </div>
    </template>
  </div>
</template>
