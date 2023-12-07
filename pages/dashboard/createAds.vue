<template>
    <div>
        <h1 class="text-3xl font-bold text-center mb-6">Commercial Property Rent</h1>
        <FormBuilder :form-inputs="formInputs"></FormBuilder>
    </div>
</template>

<script setup>
import FormBuilder from '~/components/FormBuilder.vue';

const formInputs = ref([
    {
        _id: '6571d8e4594dc7849dc5cd8c',
        name: 'title',
        label: 'Title',
        inputType: 'text',
        value: null,
    },
    // ...other form inputs
]);
</script>