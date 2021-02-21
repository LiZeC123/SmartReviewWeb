<script>
import LinkSubmitBase from "@/components/link/LinkSubmitBase";

export default {
  extends: LinkSubmitBase,
  name: "EnglishWordBookLink",
  mounted() {
    this.links = [
      {name: "初阶韦氏词典", url: "https://www.learnersdictionary.com/definition/"},
      {name: "高阶韦氏词典", url: "https://www.merriam-webster.com/dictionary/"},
      {name: "必应搜索图片", url: "https://cn.bing.com/images/search?q="},
      {name: "必应搜索词典", url: "https://cn.bing.com/dict/search?q="}
    ];
  }
}
</script>

<style scoped>

</style>