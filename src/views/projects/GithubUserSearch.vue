<script setup>
import { ref } from 'vue'

const username = ref('')
const userProfile = ref(null)
const error = ref(null)
const infoMsg = ref(false)

const toggleInfoMsg = () => {
  infoMsg.value = !infoMsg.value
}

const getUserProfile = async () => {
  try {
    const response = await fetch(`https://api.github.com/users/${username.value}`)
    const data = await response.json()

    if (response.ok) {
      userProfile.value = data
      error.value = null
    } else {
      userProfile.value = null
      error.value = `Error: ${data.message}`
    }
  } catch (err) {
    console.log('Error fetching the user profile', err)
    error.value = 'An error occurred while fetching data'
  }
}
</script>

<template>
  <div class="github-profile-viewer">
    <button v-if="infoMsg" @click="toggleInfoMsg" class="info-button">
      <img
        width="30"
        height="30"
        src="https://img.icons8.com/ios-filled/50/delete-sign--v1.png"
        alt="delete-sign--v1"
      />
    </button>
    <button v-else @click="toggleInfoMsg" class="info-button">
      <img
        width="30"
        height="30"
        src="https://img.icons8.com/ios-glyphs/30/000000/info--v1.png"
        alt="info--v1"
      />
    </button>
    <h1 class="app-title">Github User Profile</h1>
    <div class="input-container">
      <input
        @keypress.enter="getUserProfile"
        v-model="username"
        placeholder="Enter Github Username"
      />
      <button class="submit-btn" @click="getUserProfile">Get Profile</button>
    </div>
    <div v-if="userProfile" class="user-profile">
      <img :src="userProfile.avatar_url" :alt="userProfile.login" />

      <div class="user-details">
        <p><strong>Name:</strong> {{ userProfile.login }}</p>
        <p><strong>Location:</strong> {{ userProfile.location }}</p>
        <p><strong>Followers:</strong> {{ userProfile.followers }}</p>
        <p><strong>Following:</strong> {{ userProfile.following }}</p>
        <p><strong>Public Repos:</strong> {{ userProfile.public_repos }}</p>
      </div>
    </div>
    <div v-if="error" class="error-message">
      <p>{{ error }}</p>
    </div>
  </div>
  <div class="info-msg" v-if="infoMsg">
    <p>
      Due to Github Api rate limits I've created a submit button, instead of doing
      <strong>@input</strong>, which gave a cool real-time search experience, but also ended up
      reaching the max of 60 calls per hour quite fast, since it calls the api on every single
      input..
    </p>
  </div>
</template>

<style scoped>
.github-profile-viewer {
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  text-align: center;
  border: 1px solid #ccc;
  position: relative;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.info-button {
  position: absolute;
  top: 16px;
  right: 16px;
  display: grid;
  place-items: center;
  background: none;
  border: none;
  cursor: pointer;
}

.info-button img {
  width: 30px;
}

.app-title {
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
}

.input-container {
  margin-bottom: 20px;
  display: flex;
  gap: 8px;
}

.submit-btn {
  background-color: #3498db;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 15px;
}

input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  box-sizing: border-box;
}

.user-profile {
  margin-top: 64px;
  display: flex;
  gap: 32px;
  align-items: center;
  flex-wrap: wrap;
}

h2 {
  font-size: 20px;
  margin-bottom: 10px;
  color: #333;
}

img {
  width: 180px;
  border-radius: 8px;
}

.user-details {
  text-align: left;
}

p {
  font-size: 16px;
  margin-bottom: 10px;
}

.error-message {
  color: #e74c3c;
  margin-top: 20px;
}

.info-msg {
  max-width: 600px;
  border: 1px solid #d4d4d4;
  padding: 24px;
  border-radius: 8px;
  margin: 0 auto;
}

.info-msg p {
  margin: 0;
  line-height: 1.4;
}
</style>
