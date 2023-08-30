<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="result">
    <div class="result-container">
      <div class="score">
        <div class="list rookie">
          <div class="title">Rookie</div>
          <img src="@/assets/image/rookie.png" alt="">
          <p class="point">46~92</p>
        </div>
        <div class="list journey">
          <div class="title">Journeyman</div>
          <img src="@/assets/image/journey.png" alt="">
          <p class="point">93~184</p>
        </div>
        <div class="list master">
          <div class="title">Master</div>
          <img src="@/assets/image/master.png" alt="">
          <p class="point">185~230</p>
        </div>
      </div>
      <div class="current-score">
        <img src="@/assets/image/master.png" alt="">
        <div class="title">{{name}}</div>
        <div class="description">Hi <span style="text-transform: uppercase;">{{name}}</span> congratulation!!</div>
        <div class="score-button"> Score: {{totalPoint}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      answers: [],
      totalPoint: 0
    }
  },
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    name() {
      if (this.totalPoint < 46 || (this.totalPoint > 46 && this.totalPoint <= 92) ) {
        return 'Rookie'
      } else if (this.totalPoint > 92 && this.totalPoint <= 184) {
        return 'Journeyman'
      } else {
        return 'Master'
      }
    }
  },
  methods: {
    calculatePoint() {
      let totalPoint = 0;
      this.answers.forEach(element => {
        const data = element.data;
        data.forEach(element => {
          totalPoint += element;
        });
      });

      this.totalPoint = totalPoint;
    }
  },
  mounted() {
    this.answers = JSON.parse(localStorage.getItem('answers'));
    this.calculatePoint();
  }
}
</script>