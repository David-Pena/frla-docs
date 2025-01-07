<!-- Logo3D.vue -->
<template>
  <div ref="container" class="logo-container"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import * as THREE from 'three'

const container = ref(null)
let scene, camera, renderer, cube

onMounted(() => {
  // Scene setup
  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
  renderer = new THREE.WebGLRenderer({ alpha: true })
  renderer.setSize(300, 300)
  container.value.appendChild(renderer.domElement)

  // Create cube
  const geometry = new THREE.BoxGeometry()
  const material = new THREE.MeshBasicMaterial({
    color: 0x4f46e5,
    wireframe: true
  })
  cube = new THREE.Mesh(geometry, material)
  scene.add(cube)

  camera.position.z = 5

  // Animation
  function animate() {
    requestAnimationFrame(animate)
    cube.rotation.x += 0.01
    cube.rotation.y += 0.01
    renderer.render(scene, camera)
  }
  animate()
})

onBeforeUnmount(() => {
  // Cleanup
  if (renderer) {
    renderer.dispose()
    container.value?.removeChild(renderer.domElement)
  }
})
</script>

<style scoped>
.logo-container {
  width: 300px;
  height: 300px;
  margin: 0 auto;
}
</style>