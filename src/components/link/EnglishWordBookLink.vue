<script>
import LinkSubmitBase from "@/components/link/LinkSubmitBase";

export default {
  extends: LinkSubmitBase,
  name: "EnglishWordBookLink",
  watch: {
    'title': function (newTitle) {
      this.links = [
        {name: "初阶韦氏词典", url: "https://www.learnersdictionary.com/definition/" + newTitle},
        {name: "高阶韦氏词典", url: "https://www.merriam-webster.com/dictionary/" + newTitle},
        {name: "必应搜索图片", url: "https://cn.bing.com/images/search?q=" + newTitle},
        {name: "必应搜索词典", url: "https://cn.bing.com/dict/search?q=" + newTitle}
      ];

      for(let link of this.commitLinks) {
        this.links.push(link);
      }
    }
  },
}
</script>

<style scoped>

</style>