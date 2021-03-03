<template>
  <div class="row py-3 my-5 mx-2">

    <div id="submitAlert" class="alert alert-success alert-dismissible fade" role="alert">
      <strong>提交成功</strong> {{ showMessage }}
    </div>

    <div class="mx-auto container">
      <div class="appTypeGroup">
        <label>应用类型</label>

        <div class="form-check form-check-inline mx-2">
          <input class="form-check-input" type="radio" value="Base" id="radioTest"
                 v-model="appType">
          <label class="form-check-label" for="radioTest">基本记录</label>
        </div>

        <div class="form-check form-check-inline mx-2">
          <input class="form-check-input" type="radio" value="EnglishWordBook" id="radioEnglish"
                 v-model="appType">
          <label class="form-check-label" for="radioEnglish">英语单词本</label>
        </div>

        <div class="form-check form-check-inline mx-2">
          <input class="form-check-input" type="radio" value="LeetCodeNote" id="radioLeet"
                 v-model="appType">
          <label class="form-check-label" for="radioLeet">力扣题解</label>
        </div>

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

      <component :is="linkType" :title="title" :builtinLinks="[]" @link-change="updateLink"></component>

      <hr/>

      <div class="form-floating mb-3">
        <h6>勾选此知识点的标签</h6>
        <div class="form-check form-check-inline" v-for="tag in tagList" :key="tag.id">
          <input class="form-check-input" type="checkbox" id="inlineCheckbox1" :value="tag.name" v-model="tags">
          <label class="form-check-label" for="inlineCheckbox1">{{ tag.name }}</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EnglishWordBook from "@/components/link/EnglishWordBook";
import LeetCodeNote from "@/components/link/LeetCodeNote";
import SimpleBaseLink from "@/components/link/SimpleBaseLink";
import $ from "jquery";

export default {
  name: "KnowledgeForm",
  components: {SimpleBaseLink, LeetCodeNote, EnglishWordBook},
  props: {
    doSubmit: Boolean,
    doShow: Boolean,
    showMessage: String
  },
  data: function () {
    return {
      appType: "Base",
      title: "",
      content: "",
      links: [],
      tags: [],
      tagList: []
    }
  },
  methods: {
    updateLink: function (links) {
      this.links = links;
    },
    appTypeTag: function (appType) {
      switch (appType) {
        case "Base" :
          return "默认分类";
        case "EnglishWordBook":
          return "英语单词本";
        case "LeetCodeNote":
          return "力扣题解";
      }
    },
    resetForm: function () {
      this.title = "";
      this.content = "";
      this.tags = [];
    }
  },
  computed: {
    linkType: function () {
      switch (this.appType) {
        case "Base":
          return SimpleBaseLink;
        case "EnglishWordBook":
          return EnglishWordBook;
        case "LeetCodeNote":
          return LeetCodeNote;
        default:
          return SimpleBaseLink;
      }
    }
  },
  watch: {
    'doSubmit': function (newValue) {
      if (newValue === true) {
        const knowledge = {
          "appType": this.appType,
          "title": this.title,
          "content": this.content,
          "link": this.links,
          "tag": this.tags
        }
        knowledge.tag.push(this.appTypeTag(this.appType));

        console.log(knowledge);
        this.$emit('submit', knowledge);
      }
    },
    'doShow': function (newValue) {
      console.log("Do Show Value = ", newValue);
      if (newValue === true) {
        const alert = $('#submitAlert')
        alert.addClass("show").css("display", "block");
        setTimeout(() => alert.removeClass("show").css("display", "none"), 1500);
        this.resetForm();
        this.$emit('after-show');
      }
    }
  },
  created() {
    this.$axios({
      method: "get",
      url: "/tag/selectAll",
    }).then(response => {
      if (response.data.success) {
        this.tagList = response.data.data;
      }
    })
  }
}
</script>

<style scoped>
#submitAlert {
  position: fixed;
  top: 56px;
  left: 0;
  z-index: 99;
  display: none;
}
</style>