<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="bg-grey">
    <div class="box-container">
      <div v-for="(question, index) in data" :key="index" class="box">
        <div class="number">{{index+1}}</div>
        <div class="question" v-html="question.text"></div>

        <div class="answer-container">
          <div class="choose-btns">
            <div class="button" @click="checkAnswer" :stage="index" :point="question.green" color="green"></div>
            <div class="button" @click="checkAnswer" :stage="index" :point="question.yellow" color="yellow"></div>
            <div class="button" @click="checkAnswer" :stage="index" :point="question.red" color="red"></div>
          </div>
          <div class="texts">
            <p>그렇다</p>
            <p>잘 모르겠다</p>
            <p>아니다</p>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
        <i @click="nextPage" class="el-icon-arrow-down"></i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [],
      listId: null,
      point: {
        key: 1,
        data: []
      },
      answers: []
    }
  },
  methods: {
    setPoint(target) {
      const index = parseInt(target.getAttribute('stage'));
      const point = parseInt(target.getAttribute('point'));
      console.log(target, index, point);

      this.point.data.forEach((element, idx) => {
        idx === index ? this.point.data[idx] = point : null;
      });
    },
    nextPage() {
      this.$router.push({ path: '/research/2'});
    },
    checkAnswer(evt) {
      const parent = evt.currentTarget.closest('div.choose-btns');
      const elm = parent.querySelectorAll('.button');
      elm.forEach(element => {
        const att = element.getAttribute('color');
        if (!att) { return; }
        element.classList.remove('bg-'+att);
      });

      const currAttr = evt.currentTarget.getAttribute('color');
      if (!currAttr) { return; }
      evt.currentTarget.classList.add(`bg-${currAttr}`);

      this.setPoint(evt.currentTarget);
    },
    getData() {
      this.answers = JSON.parse(localStorage.getItem('answers'));
      this.data = this.$questions.getData(this.listId);
      
      if (!this.answers) {
        this.point.key = 1;
        const scores = [];
        // eslint-disable-next-line no-unused-vars
        this.data.forEach(element => {
          scores.push(0);
        });

        this.point.data = scores;
      }

      if (this.answers) {
        let find = false;
        this.answers.forEach(element => {
          if (element.key === this.point.key) {
            find = true;
            this.point.data = element.data;
          }

          if (!find) {
            const scores = [];
            // eslint-disable-next-line no-unused-vars
            this.data.forEach(element => {
              scores.push(0);
            });

            this.point.data = scores;
          }
        });
      }
    }
  },
  mounted() {
    this.listId = this.$route.params.id;
    if (!this.listId) {
      this.listId = 1;
    }

    this.getData();
  },
  // eslint-disable-next-line no-unused-vars
  beforeRouteLeave (to, from, next) {
    if (!this.answers) {
      this.answers= [];
      this.answers.push(this.point);
      console.log(this.answers, '===');
      localStorage.setItem('answers', JSON.stringify(this.answers));
      next();
      return;
    }

    let find = false;
    this.answers.forEach((element, index) => {
      element.key === this.point.key ? (find = true, this.answers[index] = this.point) : false;
    });

    if (!find) {
      this.answers= [];
      this.answers.push(this.point);
      localStorage.setItem('answers', JSON.stringify(this.answers));
      next();
      return;
    }

    this.answers.push(this.point);
    localStorage.setItem('answers', JSON.stringify(this.answers));
    next();
  }
}
</script>