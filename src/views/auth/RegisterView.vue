<script setup lang="ts">
import { ref } from 'vue'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import { useRouter } from 'vue-router'
import AuthCard from '../../components/Auth/FormCard.vue'
import { useAuthStore } from '../../stores/auth.store'
import { Button } from '@/components/ui/button'
import { FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
// import Loader from '../../components/Shared/LoaderComponent.vue'
import { usePOST } from '@/hooks/usePOST'

const router = useRouter()
const { mutate, isPending } = usePOST('auth/register')
const showPassword = ref(false)
const { login } = useAuthStore()
const toggleShowPassword = () => {
  showPassword.value = !showPassword.value
}
const formSchema = toTypedSchema(
  z.object({
    name: z
      .string({ required_error: 'Name field is required' })
      .min(3, 'Name should not be less than 3 characters')
      .max(50, 'Name should not be greater than 50 characters'),
    email: z.string({ required_error: 'Email field is required' }).email().min(2).max(50),
    password: z.string({ required_error: 'Password field is required' })
  })
)

const { handleSubmit } = useForm({
  validationSchema: formSchema
})

const onSubmit = handleSubmit((values: any) => {
  mutate(values, {
    onSuccess: (returnedData: any) => {
      login(returnedData)
      router.push('/')
    }
  })
})
</script>

<template>
  <div class="flex justify-between w-screen h-screen sm:bg-pc font-plusJakarta">
    <div class="w-full h-full sm:flex hidden items-center justify-center">
      <div class="text-white w-[400px] flex flex-col gap-3">
        <h1 class="text-5xl font-bold leading-[65px]">Your Gateway to Great Deals</h1>
        <p class="w-[300px]">
          Your hub for seamless transactions, curated recommendations, and exclusive deals.
        </p>
      </div>
    </div>
    <div class="w-full flex justify-center items-center">
      <div>
        <auth-card>
          <h2 class="text-pc2 text-4xl font-bold">Register</h2>
          <p class="text-textColor text-sm mt-5">Your naijlist account awaits you</p>
          <button
            class="flex gap-10 items-center px-4 py-2 border border-textColor w-[320px] rounded-md text-sm mt-[50px]"
          >
            <span>
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_901_6709)">
                  <path
                    d="M6.23728 1.47107C4.63457 2.02707 3.2524 3.08237 2.29377 4.48196C1.33515 5.88155 0.850616 7.55167 0.911333 9.247C0.972051 10.9423 1.57482 12.5735 2.63111 13.9009C3.6874 15.2284 5.14153 16.1821 6.77991 16.622C8.10818 16.9647 9.49982 16.9798 10.8352 16.6658C12.0449 16.3941 13.1633 15.8129 14.0809 14.9791C15.0359 14.0847 15.7291 12.947 16.086 11.6882C16.4738 10.3193 16.5428 8.87978 16.2878 7.48006H8.82885V10.5742H13.1486C13.0622 11.0676 12.8772 11.5386 12.6046 11.959C12.332 12.3793 11.9774 12.7403 11.562 13.0204C11.0346 13.3694 10.44 13.6042 9.81636 13.7096C9.19095 13.8259 8.54946 13.8259 7.92406 13.7096C7.29014 13.5787 6.69048 13.3171 6.16335 12.9414C5.31638 12.3419 4.68043 11.4901 4.34624 10.5077C4.00649 9.50693 4.00649 8.42197 4.34624 7.42116C4.58412 6.71965 4.97738 6.08093 5.49666 5.55267C6.0909 4.93704 6.84324 4.49699 7.67111 4.28079C8.49899 4.06459 9.37043 4.0806 10.1898 4.32706C10.8299 4.52347 11.4153 4.86678 11.8991 5.32961C12.3862 4.84504 12.8724 4.35923 13.3578 3.87216C13.6085 3.61025 13.8817 3.36086 14.1285 3.09268C13.3898 2.40534 12.5228 1.87047 11.5771 1.51869C9.85483 0.893346 7.9704 0.87654 6.23728 1.47107Z"
                    fill="white"
                  />
                  <path
                    d="M6.2372 1.47083C7.97018 0.875891 9.85461 0.892254 11.577 1.5172C12.5229 1.87136 13.3895 2.40881 14.1272 3.09871C13.8766 3.36689 13.6122 3.61752 13.3565 3.87818C12.8703 4.36358 12.3845 4.84731 11.8991 5.32936C11.4152 4.86654 10.8298 4.52322 10.1897 4.32682C9.37062 4.07949 8.49921 4.06256 7.67111 4.27787C6.84302 4.49319 6.09022 4.93243 5.49532 5.54741C4.97605 6.07567 4.58279 6.71439 4.34491 7.4159L1.74707 5.40455C2.67694 3.56058 4.28695 2.15008 6.2372 1.47083Z"
                    fill="#E33629"
                  />
                  <path
                    d="M1.05773 7.39673C1.19726 6.70469 1.42908 6.03451 1.74698 5.40417L4.34482 7.42054C4.00507 8.42135 4.00507 9.5063 4.34482 10.5071C3.47929 11.1755 2.61334 11.8472 1.74698 12.5222C0.951403 10.9386 0.708765 9.13426 1.05773 7.39673Z"
                    fill="#F8BD00"
                  />
                  <path
                    d="M8.82868 7.47852H16.2876C16.5426 8.87824 16.4736 10.3178 16.0858 11.6867C15.729 12.9455 15.0358 14.0832 14.0807 14.9775C13.2424 14.3234 12.4002 13.6742 11.5619 13.0201C11.9775 12.7397 12.3323 12.3783 12.6049 11.9575C12.8775 11.5368 13.0624 11.0653 13.1484 10.5714H8.82868C8.82743 9.54125 8.82868 8.50988 8.82868 7.47852Z"
                    fill="#587DBD"
                  />
                  <path
                    d="M1.74609 12.5229C2.61246 11.8546 3.4784 11.1829 4.34393 10.5078C4.67879 11.4906 5.31565 12.3423 6.16354 12.9415C6.69232 13.3154 7.29328 13.5749 7.92802 13.7034C8.55342 13.8197 9.19491 13.8197 9.82032 13.7034C10.4439 13.598 11.0386 13.3632 11.566 13.0142C12.4044 13.6683 13.2465 14.3175 14.0849 14.9716C13.1674 15.8059 12.049 16.3876 10.8391 16.6597C9.50377 16.9736 8.11214 16.9585 6.78387 16.6158C5.73333 16.3353 4.75206 15.8408 3.90156 15.1634C3.00144 14.4486 2.26621 13.5479 1.74609 12.5229Z"
                    fill="#319F43"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_901_6709">
                    <rect
                      width="16.0407"
                      height="16.0407"
                      fill="white"
                      transform="translate(0.649414 0.943359)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <span>Continue with Google</span>
          </button>
          <div class="flex justify-center items-center gap-2 w-full mt-10 mb-5">
            <span class="h-[0.3px] w-[40%] bg-textColor"></span>
            <span class="text-sm text-textColor">or</span>
            <span class="h-[0.3px] w-[40%] bg-textColor"></span>
          </div>
          <form @submit="onSubmit">
            <div class="w-[350px] flex flex-col gap-7">
              <FormField v-slot="{ componentField }" name="name" class="w-full">
                <FormItem>
                  <FormControl>
                    <Input
                      type="text"
                      :class="`focus:outline-none border  border-textColor rounded-md w-[350px] px-5 py-2`"
                      placeholder="Name"
                      v-bind="componentField"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </FormField>
              <FormField v-slot="{ componentField }" name="email" class="w-full">
                <FormItem>
                  <FormControl>
                    <Input
                      type="email"
                      :class="`focus:outline-none border  border-textColor rounded-md w-[350px] px-5 py-2`"
                      placeholder="Email"
                      v-bind="componentField"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </FormField>

              <FormField v-slot="{ componentField }" name="password">
                <FormItem>
                  <FormControl>
                    <div
                      class="flex items-center border border-textColor rounded-md w-[350px] px-5 py-2"
                    >
                      <input
                        :type="showPassword ? 'text' : 'password'"
                        class="focus:outline-none flex-1"
                        v-bind="componentField"
                        placeholder="Password"
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
            </div>
            <div class="mt-10">
              <Button class="bg-[#050004] w-[350px] text-white py-2 rounded-md">
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
                <span v-else>Sign in</span></Button
              >
            </div>
          </form>
          <div class="mt-5">
            <p class="text-sm">
              New here?
              <router-link to="/login" class="text-pc2"> Sign </router-link>
            </p>
          </div>
        </auth-card>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
