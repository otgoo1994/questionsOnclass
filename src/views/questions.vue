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
    resetCheckboxes() {
      const elm = document.querySelectorAll('.choose-btns .button');
      elm.forEach(element => {
        const param = element.getAttribute('color');
        element.classList.remove('bg-' + param);
      });
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
    async nextPage() {
      this.resetCheckboxes();

      const ans = this.$questions.checkId(this.listId+1);
      if (ans) {
        this.$router.push({ path: '/research/' + (this.listId+1) });
      } else {
        await this.updateData();
        this.$router.push({ path: '/result'});
      }
    },
    getData() {
      this.data = this.$questions.getData(this.listId);
      this.answers = JSON.parse(localStorage.getItem('answers'));
      this.point.key = this.listId;
      if (!this.data) {
        this.$router.push('/');
        return;
      }

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
    },
    async updateData() {

      if (!this.answers) {
        this.answers= [];
        this.answers.push(this.point);
        localStorage.setItem('answers', JSON.stringify(this.answers));
        return;
      }

      let find = false;
      this.answers.forEach((element, index) => {
        element.key === this.point.key ? (find = true, this.answers[index] = this.point) : false;
      });

      if (!find) {
        if (Array.isArray(this.answers)) {
          this.answers.push(this.point);
        } else {
          this.answers = [];
          this.answers.push(this.point);
        }
        
        localStorage.setItem('answers', JSON.stringify(this.answers));
        return;
      }

      // this.answers.push(this.point);
      localStorage.setItem('answers', JSON.stringify(this.answers));
    }
  },
  mounted() {
    this.listId = parseInt(this.$route.params.id);
    this.getData();
  },
  async beforeRouteUpdate(to, from, next) {
    await this.updateData();
    this.listId = parseInt(to.params.id);
    this.getData();
    next();
  }
}
</script>