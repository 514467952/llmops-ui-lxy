<script setup lang="ts"></script>
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1 class="text-3xl font-bold underline text-blue-700">Hello World!</h1>
    <p>程序员得梦工厂</p>
    <a-button type="primary">注册登陆</a-button>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
