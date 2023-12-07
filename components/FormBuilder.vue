<template>
 <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="-mx-3 md:flex mb-6">
      <div v-for="input in formInputs" :key="input._id" class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" :for="input.name">{{ input.label }}</label>
        <input v-if="input.inputType === 'text'" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" :type="input.inputType" :value="input.value" @input="updateInputValue(input._id, $event.target.value)">
        <select v-else-if="input.inputType === 'select'" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" :value="input.value" @input="updateInputValue(input._id, $event.target.value)">
          <option v-for="option in input.option" :key="option.value" :value="option.value">{{ option.text }}</option>
        </select>
      </div>
    </div>
    <button type="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="submitForm">Submit</button>
 </form>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
    formInputs: {
      type: Array,
      required: true,
    },
});

const form = ref({});

const formValues = computed(() => {
 const values = {};
 props.formInputs.forEach(input => {
    values[input.name] = input.value;
 });
 return values;
});

const updateInputValue = (id, value) => {
 const input = props.formInputs.find(input => input._id === id);
 if (input) {
    input.value = value;
 }
};

const submitForm = () => {
 console.log('Submitting form with values:', formValues.value);
 // Add code here to send form data to the server
};
</script>