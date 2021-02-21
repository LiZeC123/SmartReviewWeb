<template>
  <div class="album py-5 bg-light">
    <div class="container py-4" id="cardApp">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

        <div class="col" v-for="(card, index) in cards" v-bind:key="card.id">
          <div class="card shadow-sm">
            <!--                        <svg class="bd-placeholder-img card-img-top" width="100%" height="225"-->
            <!--                             xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail"-->
            <!--                             preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>-->
            <!--                            <rect width="100%" height="100%" fill="#55595c"/>-->
            <!--                            <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>-->
            <!--                        </svg>-->
            <!--                        <div class="card-head"></div>-->
            <div class="card-body">
              <h5 class="card-title">{{ card.title }}</h5>
              <p class="card-text">{{ card.content }}</p>
              <div class="d-flex justify-content-between align-items-center">
                <button @click="finishCard(index)" class="btn btn-outline-success" type="button">
                  太熟悉
                </button>
                <button class="btn btn-outline-secondary" type="button">陌生</button>
                <button class="btn btn-outline-secondary" type="button">遗忘</button>
                <!--                                <small class="text-muted">9 mins</small>-->
              </div>
            </div>
            <div class="card-footer">
              <span class="badge bg-secondary me-3" v-for="tag in card.tag" v-bind:key="tag[0]">{{ tag }}</span>
            </div>

          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReviewCard",
  data: function () {
    return {
      cards: []
    }
  },
  methods: {
    // TODO: 删除操作可以添加动画效果
    // https://cn.vuejs.org/v2/guide/transitions.html
    finishCard: function (idx) {
      this.cards.splice(idx, 1)
      this.$axios.get("/test/hello", {
            params: {"email": "12", "password": "123"}
          }
      ).then(response => console.log(response))

    }
  },
  created() {
    this.$axios({
      method: 'get',
      url: 'knowledge/selectAll',
    }).then(response => {
      this.cards = response.data.data;
      for(let card of this.cards) {
        let tags = card.tag.split(";");
        tags.splice(tags.length - 1, 1);
        card.tag = tags;
      }
    })
  }
}
</script>

<style scoped>

</style>