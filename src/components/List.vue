
<template>
    <!-- <video controls width="250">

      <source src="/voide/1624983647445.mp4">
  </video> -->


  
    <!-- <a-list item-layout="horizontal" :data-source="data">
      <template #renderItem="{ item }">
        <a-list-item>
          <a-list-item-meta
            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
          >
            <template #title>
              <a href="https://www.antdv.com/">{{ item.title }}</a>
            </template>
            <template #avatar>
              <a-avatar src="https://joeschmoe.io/api/v1/random" />
            </template>
          </a-list-item-meta>
        </a-list-item>
      </template>
    </a-list> -->
  </template>
  <script>
  import { defineComponent } from 'vue';
  const data = [{
    title: 'Ant Design Title 1',
  }, {
    title: 'Ant Design Title 2',
  }];
  export default defineComponent({
    setup() {
      return {
        data,
      };
    },
  });
  </script>