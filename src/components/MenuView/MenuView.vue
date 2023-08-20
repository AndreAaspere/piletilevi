<template>
  <div class="flex flex-row">
    <div
    class="p-2 cursor-pointer select-none" :class="{'border-b-2 border-red-600': item.active}" v-for="(item, index) in menuItems" :key="index">
      {{ item.title }}
    </div>
    <div class="my-2 border-l border-slate-200"></div>
    <div class="p-2">PÖFF</div>
  </div>
</template>

<script setup>
// should be implemented with Vue router
const menuItems = [
  {
    id: '1000',
    title: 'Kõik',
    active: false
  }, {
    id: '1001',
    title: 'Täna',
    active: false
  },
  {
    id: '1002',
    title: 'Nädalavahetusel',
    active: false
  },
  {
    id: '1003',
    title: 'Uued',
    active: false
  },
  {
    id: '1004',
    title: 'Muusika',
    active: true
  },
  {
    id: '1005',
    title: 'Teater',
    active: false
  },
  {
    id: '1006',
    title: 'Kogupere',
    active: false
  },
  {
    id: '1007',
    title: 'Sport',
    active: false
  },
  {
    id: '1008',
    title: 'Festival',
    active: false
  },
  {
    id: '1009',
    title: 'Veel',
    active: false,
    subItems: [
      {
        id: '2000',
        title: 'More',
        active: false
      }
    ]
  }
]
</script>
