<template>
  <div>
    <ul class="news-list">
      <li v-for="item in fetchedAsk" v-bind:key="item.id" class="post">
        <!-- 포인트영역 -->
        <div class="points">
          {{ item.points }}
          <!-- 공통으로 쓰이는 item 덕분에 리팩토링이 용이해졌다. -->
        </div>
        <!-- 기타 정보 영역 -->
        <div>
          <p class="news-title">
            <router-link v-bind:to="`item/${item.id}`">
              {{ item.title }}
            </router-link>
          </p>
          <small class="link-text">
            {{ item.time_ago }} by
            <router-link v-bind:to="`/user/${item.user}`" class="link-text">{{
              item.user
            }}</router-link>
          </small>
        </div>
      </li>
    </ul>

    <!-- <p v-for="item in fetchedAsk" v-bind:key="item.id">
      <router-link v-bind:to="`item/${item.id}`"> 지워지는 구간
        {{ item.title }}
      </router-link>
      <small>{{ item.time_ago }} by {{ item.user }}</small>
    </p> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["fetchedAsk"]),
  },
  created() {
    this.$store.dispatch("FETCH_ASK_LIST");
  },
};
</script>

<style scoped>
.news-list {
  margin: 0;
  padding: 0;
}

.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}

.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}

.news-title {
  margin: 0;
}

.link-text {
  color: #828282;
}
</style>
