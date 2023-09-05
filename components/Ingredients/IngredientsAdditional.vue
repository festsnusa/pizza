<template>
  <ul>
    <li v-for="(item, i) in items" :key="`additional__${i}`" @click="toggleChosen(item)" :class="{ active: item.chosen }">
      <div class="top">
        <img class="done" src="../../assets/images/done.svg" alt="done" v-show="item.chosen">
        <img class="poster" :src="`/_nuxt/assets/images/ingredients/${item.img}`" alt="item.title">
      </div>
      <div class="bottom">
        <span class="bottom__title">{{ item.title }}</span>
        <span class="bottom__price">59 ₽</span>
      </div>

    </li>
  </ul>
</template>

<script setup>
const items = ref([
  { "title": "Моцарелла", "img": "mozarella.png", "chosen": false },
  { "title": "Шампиньоны", "img": "champignon.png", "chosen": false },
  { "title": "Красный лук", "img": "onion.png", "chosen": false },
  { "title": "Сладкий перец", "img": "pepper.png", "chosen": false },
])

const toggleChosen = (item) => {
  item.chosen = !item.chosen

  const foundObjects = items.value.filter(e => e.chosen)
  console.log(foundObjects.length)
  emit("changeTotal", foundObjects.length)
}

const emit = defineEmits(["changeTotal"])
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  display: flex;
  gap: 1rem;
}

.top {
  padding: 1rem;
  border: 1px solid #F0F0F0;
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.active {
  border-color: #FF7010;
}

.done {
  position: absolute;
  right: 5px;
  top: 5px;
}

.poster {
  max-width: 40px;
}

.bottom {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__title {
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
  }

  &__price {
    font-weight: 600;
    color: #FF7010;
  }
}
</style>