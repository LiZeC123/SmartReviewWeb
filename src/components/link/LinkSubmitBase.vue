<template>
  <div class="mb-3">
    <div class="row g-2">
      <div class="col">
        <div class="form-floating">
          <input type="text" class="form-control" id="txtLinkName" aria-describedby="txtLinkNameHelp"
                 placeholder="资源名称" v-model="newLink.name" @keydown.enter="createLink">
          <small id="txtLinkNameHelp" class="form-text text-muted">与此知识点关联的资源链接</small>
          <label for="txtLinkName">资源名称</label>
        </div>
      </div>
      <div class="col">
        <div class="form-floating">
          <input type="text" class="form-control" id="txtLinkUrl" aria-describedby="txtLinkUrlHelp"
                 placeholder="资源链接" v-model="newLink.url" @keydown.enter="createLink">
          <small id="txtLinkUrlHelp" class="form-text text-muted">与此知识点关联的资源链接</small>
          <label for="txtLinkUrl">资源链接</label>
        </div>
      </div>
    </div>

    <!--    放置一个空按钮, 从而阻止其他按钮相应enter键  -->
    <button style="display: none"></button>


    <table class="table">
      <thead>
      <tr>
        <th>资源名称</th>
        <th>资源链接</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(link,index) in links" v-bind:key="link.name">
        <td>{{ link.name }}</td>
        <td><a :href="link.url" target="_blank">{{ link.url }}</a></td>
        <td :class="'text-center'">
          <button class="btn btn-danger" @click="deleteLink(index)">删除</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "LinkSubmitBase",
  props: {
    title: String
  },
  data: function () {
    return {
      newLink: {
        name: "",
        url: ""
      },
      builtinLinks: [],
      commitLinks: [],
      links: [],
    };
  },
  methods: {
    createLink: function () {
      this.commitLinks.push(this.newLink);
      this.links.push(this.newLink);
      this.newLink = {name: "", url: ""};
    },
    deleteLink: function (index) {
      console.log("Delete:" + index);
      this.links.splice(index, 1);
    },
  },
}
</script>

<style scoped>

</style>