<template>
    <!-- <div class="q-col-gutter-md row items-start"> -->
      <div class="col-6">
        <q-img src="..\assets\scattered-forcefields.svg">
          <div class="absolute-bottom text-subtitle1 text-center">
            
          </div>
          <div class="box">
  
  <h2><b>  Hellooooo People!!! </b></h2>
  <h5 style="margin-left: 80px;"><i> Let's Begin with my Intro ...</i></h5>
</div>
        </q-img>
      </div>
  <q-page class="flex flex-center" style="display=flex;background-image:url(1.webp);
  flex-direction:column;
  align-items:center;">
  
  </q-page>
  <router-view/>
</template>


<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
})
</script>

<style>
.box{
margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
</style>
