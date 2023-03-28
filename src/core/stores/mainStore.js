import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { data } from '../data'


export const useMainStore = defineStore('main', () => {
  const pharmacies = ref(data.pharmacies)
  const activePharmacyId = ref('')
  const cartProducts = ref(data.cartProducts)
  const isOpenAside = computed(() => activePharmacyId.value !== '')
  const activePharmacy = computed(() => pharmacies.value.find(item => item.id === activePharmacyId.value))

  const getPharmacies = async () => {
    pharmacies.value = await data.pharmacies
  }

  const setActivePharmacyId = (id) => {
    activePharmacyId.value = id
  }

  return { 
    pharmacies, 
    cartProducts, 
    activePharmacyId, 
    isOpenAside,
    activePharmacy, 
    setActivePharmacyId, 
    setActivePharmacyId 
  }
})

