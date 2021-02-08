<template>
  <div class="row py-3 my-5 mx-2">
    <form id="createForm" onsubmit="return false;">
      <label>应用类型</label>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" value="EnglishWorkBook" name="appRadio" id="flexCheckDefault">
        <label class="form-check-label" for="flexCheckDefault">英语单词本</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" value="LeetCodeNote" name="appRadio" id="flexCheckChecked" checked>
        <label class="form-check-label" for="flexCheckChecked">
          LeetCode记录本
        </label>
      </div>
      <div class="form-floating my-3">
        <input type="text" class="form-control" id="textInputTitle" aria-describedby="textInputTitleHelp"
               placeholder="知识点标题" v-model="title">
        <small id="textInputTitleHelp"
               class="form-text text-muted">简要的概括知识点的主要内容</small>
        <label for="textInputTitle">知识点标题</label>
      </div>

      <div class="form-floating mb-3">
        <textarea class="form-control" id="textInputContent" placeholder="知识点正文"
                  style="height: 100px" v-model="content"></textarea>
        <label for="textInputContent">知识点正文</label>
      </div>

      <div class="form-floating mb-3">
        <input type="text" class="form-control" id="textInputLink" aria-describedby="textInputLinkHelp"
               placeholder="扩展链接" v-model="link">
        <small id="textInputLinkHelp" class="form-text text-muted">与此知识点关联的资源链接</small>
        <label for="textInputLink">扩展链接</label>
      </div>

      <div class="form-floating mb-3">
        <input type="text" class="form-control" id="textInputTag" aria-describedby="textInputTagHelp"
               placeholder="标签" v-model="tag">
        <small id="textInputTagHelp" class="form-text text-muted">与此知识点关联的标签</small>
        <label for="textInputTag">标签</label>
      </div>

      <button type="submit" class="btn btn-primary float-end" @click="submitInfo">创建知识点</button>

    </form>
  </div>
</template>

<script>
export default {
  name: "KnowledgeForm",
  data: function () {
    return {
      appType: "",
      title: "",
      content: "",
      link: "",
      tag: ""
    }
  },
  methods: {
    submitInfo: function () {
      const knowledge = {
        "appType": this.appType,
        "title": this.title,
        "content": this.content,
        "link": this.link,
        "tag": this.tag
      }

      this.$axios.post('/knowledge/create', knowledge).then(response => {
        if (response.data.success) {
          console.log("Success")
        }

        console.log(response)
      })

    }
  }
}
</script>

<style scoped>

</style>