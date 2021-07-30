const App = {
  data() {
    return {
      activeIndex: 0,
      isActive: true,
      steps: [
        {title: 'Основы', text: 'На первом этапе строители определяют основы планирования строительства. Вы спрашиваете свой банк или другого ипотечного кредитора о возможных рамках финансирования и начинаете поиск земельного участка.'},
        {title: 'Детали', text: 'На втором этапе строители знают самые важные детали, чтобы найти партнера по строительству и вместе с ним определить, как дом должен выглядеть внутри и снаружи. Они также знают, сколько денег у них есть на строительство, и могут рассчитать затраты на строительство.'},
        {title: 'Стройка', text: 'Третий этап - это этап строительства, на котором недвижимость становится строительной площадкой.'},
        {title: 'Передача', text: 'Четвертый этап - передача дома — в идеале должен быть выполнен за один день.'},
        {title: 'Заезд', text: 'На пятом и последнем этапе домовладелец может расширить спроектированный дом или сразу же въехать в него и позаботиться о внешних объектах, то есть о саду и подсобных постройках.'},
      ]
    }
  },
  methods: {
    prev() {
      if (this.activeIndex !== 0) {
        this.activeIndex--
      }
    },
    reset() {
      this.activeIndex = 0
      this.isActive = true
    },
    nextOfFinish() {
      if (this.activeIndex !== this.steps.length - 1) {
        this.activeIndex++
      } else {
        this.isActive = false
      }
    },
    setActive(idx) {
      this.activeIndex = idx
    }
  },
  computed: {
    activeStep() {
      return this.steps[this.activeIndex]
    },
    prevDisabled() {
      return this.activeIndex === 0
    },
    isLastStep() {
      return this.activeIndex === this.steps.length - 1
    }
  }
}

Vue.createApp(App).mount('#app')