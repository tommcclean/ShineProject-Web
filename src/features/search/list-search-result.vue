<template>
  <router-link :to="navigationLink" class="search-result d-flex align-items-center cursor-pointer">
    <div class="pl-3 py-2">
      <i class="fas fa-list-alt fa-fw mr-2"/>
    </div>
    <p class="m-0 p-2 flex-grow-1">{{result.resultDescription}}</p>
    <div class="px-3 py-1">
      <i class="fas fa-chevron-right fa-fw mr-2 px-3 py-1"/>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "list-search-result",
  components: {},
  props: {
    result: {
      type: Object,
      required: true
    }
  },
  computed: {
    navigationLink() {
      return "/secure/list?listId=" + this.result.listId;
    }
  }
};
</script>