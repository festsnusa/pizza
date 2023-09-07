<template>
  <div class="radio">
    <a-radio-group v-model:value="radioButton" name="radioGroup" @change="setValue">
      <a-radio value="asap">Как можно скорее</a-radio>
      <a-radio value="on-time">По времени</a-radio>
    </a-radio-group>
  </div>
</template>

<script setup>
// const { radioButton, setRadioButtonValue } = useRadioButton()

// const setValue = (e) => {
//   setRadioButtonValue(e.target.value)
// }
</script>

<style scoped>
/* Customize the label (the wrapper) */
.wrapper {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 6px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-size: 16px;
}

/* Hide the browser's default radio button */
.wrapper input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom radio button */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 21px;
  width: 21px;
  border-radius: 50%;
  background-color: #eee;
  border: 1px solid #ccc;
}

/* On mouse-over, add a grey background color */
.wrapper:hover input~.checkmark {
  background-color: #ccc;
}

/* When the radio button is checked, add a blue background */
.wrapper input:checked~.checkmark {
  background-color: #1CD4A7;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.wrapper input:checked~.checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.wrapper .checkmark:after {
  top: 5px;
  left: 6px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
}
</style>