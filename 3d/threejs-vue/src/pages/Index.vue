<script setup lang="ts">
import { PerspectiveCamera, Scene } from 'three';

const scene = new Scene();

const camera = new PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);
scene.add(camera);
</script>

<template></template>
