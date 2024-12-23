<template>
  <div class="flex flex-col items-start space-y-4 w-full">
    <label class="">Select State and Location</label>
    <!-- Select Dropdown -->
    <div class="w-full">
      <div class="relative">
        <button
          class="bg-white border border-gray-300 rounded-md py-2 px-4 w-full text-left"
          @click="toggleDropdown"
        >
          {{ selectedLocation || selectedState || 'Select State or Location' }}
        </button>
        <!-- Dropdown Menu -->
        <div
          v-if="dropdownOpen"
          class="absolute bg-white border border-gray-300 rounded-md mt-1 w-full max-h-60 overflow-y-auto"
        >
          <!-- State Options -->
          <template v-if="!selectedState">
            <p class="px-4 py-2 text-sm text-gray-500">Select a State</p>
            <div v-for="(locations, state) in statesAndLocations" :key="state">
              <button
                class="block w-full text-left px-4 py-2 hover:bg-gray-100"
                @click="selectState(state)"
              >
                {{ state }}
              </button>
            </div>
          </template>

          <!-- Location Options -->
          <template v-else>
            <button
              class="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100"
              @click="resetSelection"
            >
              Back to States
            </button>
            <p class="px-4 py-2 text-sm text-gray-500">Locations in {{ selectedState }}</p>
            <div v-for="location in statesAndLocations[selectedState]" :key="location">
              <button
                class="block w-full text-left px-4 py-2 hover:bg-gray-100"
                @click="selectLocation(location)"
              >
                {{ location }}
              </button>
            </div>
          </template>
        </div>
      </div>
    </div>

    <!-- Display Selected State and Location
    <p class="mt-4 text-gray-700">
      <strong>State:</strong> {{ selectedState || 'None' }} <br />
      <strong>Location:</strong> {{ selectedLocation || 'None' }}
    </p> -->
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Data: States and their respective locations
const statesAndLocations = {
  Lagos: ['Ikeja', 'Surulere', 'Lekki', 'Epe'],
  Abuja: ['Garki', 'Maitama', 'Wuse', 'Asokoro'],
  Kano: ['Kano City', 'Bichi', 'Gwale', 'Tarauni'],
  Rivers: ['Port Harcourt', 'Bonny', 'Oyigbo', 'Eleme'],
  Kaduna: ['Kaduna North', 'Kaduna South', 'Zaria', 'Kafanchan']
}

// Reactive states for dropdown
const dropdownOpen = ref(false)
const selectedState = ref('')
const selectedLocation = ref('')

// Toggle dropdown visibility
const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value
}

// Select a state and show its locations
const selectState = (state) => {
  selectedState.value = state
  selectedLocation.value = '' // Reset location when state changes
}

// Select a location
const selectLocation = (location) => {
  selectedLocation.value = location
  dropdownOpen.value = false // Close dropdown after selecting a location
}

// Reset selection to show states
const resetSelection = () => {
  selectedState.value = ''
}
</script>

<style scoped>
/* Optional: Tailwind-specific customizations */
</style>
