export default {
  methods: { // ∆1
    addBy(property, operand, min, max) {
      let allow = true;

      if (typeof min === 'number' && this[property] + operand < min) {
        allow = false;
      }

      if (typeof max === 'number' && this[property] + operand > max) {
        allow = false;
      }

      if (allow) {
        this[property] += operand;
      }
    },
    disableButton(testProperty, testValue) {
      let disabled = false;

      if (this[testProperty] === testValue) {
        disabled = true;
      }

      return disabled;
    },
  },
};
