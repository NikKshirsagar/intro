<template>
  <q-item
    clickable
    tag="a"
    target="_blank"
  >
    <q-item-section>
      <q-btn>
        <router-link to="/AboutMe"> {{ title1 }}</router-link>
      </q-btn>
      <q-btn>
        <router-link to="/MyEducation"> {{ title2 }}</router-link>
      </q-btn>
      <q-btn>
        <router-link to="/MySkills"> {{ title3 }}</router-link>
      </q-btn>
      <q-btn>
        <router-link to="/MyHobbies"> {{ title4 }}</router-link>
      </q-btn>
      <q-btn>
        <router-link to="/MyGoals"> {{ title5 }}</router-link>
      </q-btn>
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EssentialLink',
  props: {
    title1: {
      type: String,
      required: true
    },
    title2: {
      type: String,
      required: true
    },
    title3: {
      type: String,
      required: true
    },
    title4: {
      type: String,
      required: true
    },
    title5: {
      type: String,
      required: true
    }

  }
})
</script>

