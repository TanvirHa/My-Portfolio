<template>
  <div class="home">
    <About />
    <Education />
    <Skills />
    <Projects />
    <Interests />
    
  </div>
</template>

<script>
import About from "../components/about.vue";
import Education from "../components/education.vue";
import Skills from "../components/skills.vue";
import Projects from "../components/projects.vue";
import Interests from "../components/interest.vue";

// @ is an alias to /src

export default {
  name: "HomeView",
  components: {
    About,
    Education,
    Skills,
    Projects,
    Interests,
    
  },
};
</script>
