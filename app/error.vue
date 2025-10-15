<template>
  <div class="not-found">
    <h1>404</h1>

    <p>{{ $t("not-found") }}</p>
    <button @click="navigateTo('/')">{{ $t("back-to-home") }}</button>
  </div>
</template>

<style scoped>
.not-found {
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 40px;
  height: 100vh;
  overflow: hidden;
}

.not-found h1 {
  font-size: 5rem;
  color: #ff4c4c;
}

.not-found p {
  font-size: 2rem;
}

.not-found button {
  padding: 10px 20px;
  border-radius: 40px;
  line-height: 18px;
  font-size: 16px;
  border: 1px solid var(--color-white);
  color: var(--color-white);
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 150px;
  text-align: center;
  justify-content: center;
  width: fit-content;
  background-color: rgb(13, 126, 248);
  border-color: rgb(13, 126, 248);
}
</style>
