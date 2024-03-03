<script setup lang="ts">
import { useWindowSize } from '@vueuse/core';
import { Mesh, MeshBasicMaterial, PerspectiveCamera, Scene, SphereGeometry, WebGL1Renderer } from 'three';
import { computed, onMounted, ref, render, watch } from 'vue';

let renderer: WebGL1Renderer;
let camera: PerspectiveCamera;
const experience = ref<HTMLCanvasElement | null>(null);
const scene = new Scene();

const { width, height } = useWindowSize();

const aspectRatio = computed(() => width.value / height.value);

function updateRenderer() {
  renderer.setSize(width.value, height.value);
  renderer.setPixelRatio(window.devicePixelRatio);
}

function updateCamera() {
  camera.aspect = aspectRatio.value;
  camera.updateProjectionMatrix();
}

watch(aspectRatio, updateRenderer);
watch(aspectRatio, updateCamera);

camera = new PerspectiveCamera(
  45,
  aspectRatio.value,
  0.1,
  1000,
);

camera.position.z = 5;
scene.add(camera);

const sphere = new Mesh(
  new SphereGeometry(1, 20, 20),
  new MeshBasicMaterial({ color: 0x008080 })
);

scene.add(sphere);
const loop = () => {

  renderer.render(scene, camera);
  sphere.position.y += 0.01;
  requestAnimationFrame(loop);
  
}
onMounted(() => {
  renderer = new WebGL1Renderer({
    canvas: experience.value as HTMLCanvasElement,
    antialias: true,
  });

  updateRenderer();
  updateCamera();

 loop();
});
</script>

<template>
  <!-- Use ":ref" for binding -->
  <canvas ref="experience" />
</template>
