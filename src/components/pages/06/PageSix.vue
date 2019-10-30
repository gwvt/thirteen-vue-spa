<template>
<div>
  <div class="level">
    <p>
      {{ combinedSentence }}
    </p>
  </div>
  <div class="columns">
    <div class="column is-3">
      <div class="field">
        <div class="control">
          <div v-for="subject in subjects"
               v-bind:key="subject">
            <label class="radio">
              <input type="radio"
                     v-bind:value="subject"
                     v-model="selectedSubject" />
                {{ subject }}
            </label>
          </div>
        </div>
      </div>
    </div>
    <div class="column is-3">
      <div class="field">
        <div class="control">
          <div class="select">
            <select v-model="selectedVerb">
              <option v-for="verb in verbs"
                      v-bind:key="verb">
                {{ verb }}
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <div class="column is-3">
      <div class="field">
        <div class="control">
          <div v-for="directObject in directObjects"
               v-bind:key="directObject">
            <label class="checkbox">
              <input type="checkbox"
                     v-bind:value="directObject"
                     v-model="selectedDirectObjects" />
                {{ directObject }}
            </label>
          </div>
        </div>
      </div>
      <div class="field is-grouped">
        <div class="control">
          <input type="checkbox"
                 v-model="addUserDirectObject" />
        </div>
        <div class="control">
          <input class="input"
                 type="text"
                 placeholder="add something"
                 ref="userDirectObjectInput"
                 v-model="userDirectObject"
                 v-on:keyup.enter="userDirectObjectEnter" />
        </div>
      </div>
    </div>
    <div class="column is-3">
      <button class="button"
         v-on:click="advanceAdverbialPhraseIndex">
        How
      </button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'PageSix',
  data() {
    return {
      subjects: ['Icicles', 'The shadow', 'The mood'],
      verbs: ['filled', 'crossed', 'traced'],
      directObjects: ['the long window', 'it', 'an indecipherable cause'],
      adverbialPhrases: ['with barbaric glass', 'to and fro', 'in the shadow'],

      selectedSubject: 'Icicles',
      selectedVerb: 'filled',
      selectedDirectObjects: ['the long window'],
      adverbialPhraseIndex: 0,

      userDirectObject: '',
      addUserDirectObject: false,
    };
  },
  computed: {
    formattedDirectObjects() {
      let formatted = this.selectedAndUserDirectObjects[0] || '';

      if (this.selectedAndUserDirectObjects.length > 2) {
        this.selectedAndUserDirectObjects.slice(1).forEach((item, index) => {
          if (index + 2 < this.selectedAndUserDirectObjects.length) {
            formatted += `, ${item}`;
          } else {
            formatted += `, and ${item}`;
          }
        });
      } else if (this.selectedAndUserDirectObjects.length === 2) {
        formatted += ` and ${this.selectedAndUserDirectObjects[1]}`;
      }

      return formatted;
    },
    selectedAndUserDirectObjects() {
      const combined = this.selectedDirectObjects.slice();

      if (this.addUserDirectObject && this.userDirectObject) {
        combined.push(this.userDirectObject);
      }

      return combined;
    },
    adverbialPhraseString() {
      return this.adverbialPhrases[this.adverbialPhraseIndex];
    },
    combinedSentence() {
      return `${this.selectedSubject} ${this.selectedVerb} ${this.formattedDirectObjects} ${this.adverbialPhraseString}.`;
    },
  },
  methods: {
    advanceAdverbialPhraseIndex() {
      if (this.adverbialPhraseIndex === this.adverbialPhrases.length - 1) {
        this.adverbialPhraseIndex = 0;
      } else {
        this.adverbialPhraseIndex += 1;
      }
    },
    userDirectObjectEnter() {
      this.addUserDirectObject = true;
      this.$refs.userDirectObjectInput.blur();
    },
  },
};
</script>

<style>
</style>
