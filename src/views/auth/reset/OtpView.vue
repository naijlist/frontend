<script setup lang="ts">
import { Button } from '@/components/ui/button'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { PinInput, PinInputGroup, PinInputInput } from '@/components/ui/pin-input'
import { toast } from '@/components/ui/toast'
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { h } from 'vue'
import * as z from 'zod'

const formSchema = toTypedSchema(
  z.object({
    pin: z.array(z.coerce.string()).length(6, { message: 'Invalid input' })
  })
)

import { usePOST } from '@/hooks/usePOST'
import IconComponent from '@/components/Icons/IconComponent.vue'
import { useRouter } from 'vue-router'
import { useResetPasswordStore } from '@/stores/resetPasswordStore'
import { ref } from 'vue'
import PinInputSeparator from '@/components/ui/pin-input/PinInputSeparator.vue'
import Separator from '@/components/ui/separator/Separator.vue'

const resetPasswordStore = useResetPasswordStore()
const router = useRouter()
const { mutate, isPending } = usePOST('auth/validate-otp')
const resetter = resetPasswordStore.resetter
const value = ref<string[]>([])
// TODO: consume the check OTP
// if the otp is correct redirect to set password page with otp in pinia store
const { handleSubmit, setFieldValue } = useForm({
  validationSchema: formSchema,
  initialValues: {
    pin: []
  }
})

const handleComplete = (e: string[]) => console.log(e.join(''))

const onSubmit = handleSubmit(({ pin }) => {
  const otpObj: any = {
    otp: pin.join('').toString()
  }
  mutate(otpObj, {
    onSuccess: (returnedData: any) => {
      console.log(returnedData)
      if (returnedData.redirect) {
        resetPasswordStore.setResetter({ ...resetter, otp: returnedData.otp })
        router.push('/set-new-password')
      }
    },
    onError: (error: any) => {
      console.log(error)
    }
  })
})
console.log(resetter, 'jjjjj')
</script>

<template>
  <div
    class="flex flex-col gap-7 justify-center items-center h-screen font-plusJakarta w-[350px] mx-auto"
  >
    <div class="flex flex-col gap-3 items-center w-full">
      <IconComponent icon="resetPasswordPageIcon" />
      <h2 class="font-semibold text-[1.5rem]">Reset Password?</h2>
      <span class="text-sm text-textColor font-medium tracking-wide"
        >We sent a code to <span class="text-black">{{ resetter?.email }}</span></span
      >
    </div>
    <div class="w-full flex flex-col items-center">
      <form class="w-full space-y-6 mx-auto" @submit="onSubmit">
        <FormField v-slot="{ componentField, value }" name="pin">
          <FormItem>
            <FormLabel class="text-xs">Enter OTP code</FormLabel>
            <FormControl>
              <PinInput
                id="pin-input"
                :model-value="value"
                class="flex w-full gap-2 items-center mt-1"
                otp
                type="number"
                :name="componentField.name"
                @complete="handleComplete"
                @update:model-value="
                  (arrStr) => {
                    setFieldValue('pin', arrStr.filter(Boolean))
                  }
                "
              >
                <PinInputGroup class="gap-3 w-full max-w-full">
                  <template v-for="(id, index) in 6" :key="id">
                    <PinInputInput
                      class="rounded-md w-full border border-textColor"
                      :index="index"
                    />
                    <template v-if="index == 2">
                      <Separator class="w-7 border border-black" />
                    </template>
                  </template>
                </PinInputGroup>
              </PinInput>
            </FormControl>
          </FormItem>
        </FormField>

        <Button type="submit" class="w-full bg-black text-white mt-7">
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
          <span v-else>Continue</span>
        </Button>
      </form>
      <div class="mt-5 text-xs">
        <span>Didn’t receive a code? <span class="text-sc1">Click to resend</span></span>
      </div>
      <router-link to="/login" class="flex gap-4 my-5 items-center text-xs text-textColor"
        ><IconComponent icon="arrowBack" /> Back to login</router-link
      >
    </div>
  </div>
</template>
