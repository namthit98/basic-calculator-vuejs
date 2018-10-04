new Vue({
  el: "#caculator",
  data: {
    currentValue: '',
    mode: null,
    temp: null
  },
  methods: {
    remove: function () {
      this.currentValue = '';
    },
    reverse: function () {
      if (this.currentValue === '') return;

      this.currentValue = this.currentValue.indexOf('-') !== -1 ? this.currentValue.slice(1) : `-${this.currentValue}`;
    },
    back: function () {
      this.currentValue = this.currentValue.slice(0, this.currentValue.length - 1);
    },
    append: function (value) {
      if (this.currentValue === '' && (value === 0 || value === "dot")) return;

      if (this.currentValue.length >= 15) return;

      if (value === "dot" && this.currentValue.indexOf('.') !== -1) return;

      else if (value === "dot") value = '.';

      this.currentValue += value;
    },
    cal: function (mode) {
      if (this.mode !== null) return;

      switch (mode) {
        case "divide":
          this.mode = function (a, b) {
            return a / b;
          }
          break;
        case "times":
          this.mode = function (a, b) {
            return a * b;
          }
          break;
        case "plus":
          this.mode = function (a, b) {
            return a + b;
          }
          break;
        case "minus":
          this.mode = function (a, b) {
            return a - b;
          }
      }

      this.temp = parseFloat(this.currentValue);
      this.currentValue = '';
    },
    equal: function () {
      if (this.temp === null || this.mode === null) return;

      this.currentValue = this.mode(this.temp, parseFloat(this.currentValue)).toString();
      this.temp = null;
      this.mode = null;
    }
  }
})