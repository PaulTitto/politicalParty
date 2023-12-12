<template>
  <div class="w-full px-1 pt-1">
    <div class="mx-auto lg:w-70p max-w-6xl rounded-2xl bg-white p-1">
      <Disclosure v-slot="{ open }">
        <DisclosureButton
          class="flex w-full justify-between rounded-lg bg-red-400 px-4 py-2 text-left text-sm font-medium text-white hover:bg-red-500 focus:outline-none focus-visible:ring focus-visible:ring-red-500/75 border-yellow-900"
        >
          <span>{{ buttonText }}</span>
          <ChevronUpIcon
            :class="open ? 'rotate-180 transform' : ''"
            class="h-5 w-5 text-purple-500"
          />
        </DisclosureButton>
        <DisclosurePanel class="px-4 pb-2 pt-4 text-sm text-gray-500">
          {{ panelContent }}
        </DisclosurePanel>
      </Disclosure>
    </div>
  </div>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import { ChevronUpIcon } from '@heroicons/vue/20/solid';

const props = defineProps(['buttonText', 'panelContent']);
</script>
