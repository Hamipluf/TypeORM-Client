<template>
  <form @submit.prevent="submitForm" class="form">
    <p class="title">Register</p>
    <div class="flex">
      <label>
        <input v-model="first_name" class="input" type="text" placeholder="" required="" />
        <span>Firstname</span>
      </label>

      <label>
        <input v-model="last_name" class="input" type="text" placeholder="" required="" />
        <span>Lastname</span>
      </label>
    </div>

    <label>
      <input v-model="email" class="input" type="email" placeholder="" required />
      <span>Email</span>
    </label>

    <label>
      <input v-model="password" class="input" :type="passwordFieldType" placeholder="" required />
      <span>Password</span>
      <button class="toggle-pass" type="button" @click="togglePasswordVisibility">
        {{ passwordFieldType === 'password' ? 'Show' : 'Hide' }}
      </button>
    </label>
    <label>
      <input v-model="confirm_password" class="input" :type="passwordFieldType" placeholder="" required />
      <span>Confirm password</span>
    </label>
    <button class="submit">Submit</button>
    <p class="signin">Already have an acount ? <a @click="this.$router.push('/login')">Login</a></p>
    <p class='error-text' v-if="error">{{ error }}</p>

  </form>
</template>
<script>
import { register } from '@/utils/auth/register'

export default {
  name: 'RegisterForm',
  data() {
    return {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      confirm_password: '',
      passwordInputType: 'password',
      passwordFieldType: 'password',
      error: '',
    }
  },
  methods: {
    async submitForm() {
      const dataUser = {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        password: this.password,
        confirm_password: this.confirm_password
      }
      try {
        const response = await register(dataUser)
        if (response.error) {
          this.error = response.data
          return
        }
        this.error = ''
        localStorage.setItem('token', response.data.data.token)
        return this.$router.push('/feed')
      } catch (error) {
        this.error = error.message
        console.error('Error LOGINFORM:', error)
      }
    },
    togglePasswordVisibility() {
      this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password'
    }
  }
}
</script>

<style scoped>
.error-text {
  color: red;
  text-align: center;
  padding: 10px;
  font-size: 1rem;
  font-weight: 600;

}

.toggle-pass {
  padding: 5px;
  border-radius: 5px;
  background-color: #00bfff;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  margin: 5px;
  transition: all 30ms ease-in-out;
}

.toggle-pass:hover {
  background-color: #00bfff96;
}

.toggle-pass:active {
  transform: scale(.9);
}

.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 550px;
  padding: 20px;
  border-radius: 20px;
  position: relative;
  background-color: #1a1a1a;
  color: #fff;
  border: 1px solid #333;
}

.title {
  font-size: 28px;
  font-weight: 600;
  letter-spacing: -1px;
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 30px;
  color: #00bfff;
}

.title::before {
  width: 18px;
  height: 18px;
}

.title::after {
  width: 18px;
  height: 18px;
  animation: pulse 1s linear infinite;
}

.title::before,
.title::after {
  position: absolute;
  content: '';
  height: 16px;
  width: 16px;
  border-radius: 50%;
  left: 0px;
  background-color: #00bfff;
}

.message,
.signin {
  font-size: 14.5px;
  color: rgba(255, 255, 255, 0.7);
}

.signin {
  text-align: center;
}

.signin a:hover {
  text-decoration: underline royalblue;
}

.signin a {
  color: #00bfff;
}

.flex {
  display: flex;
  width: 100%;
  gap: 6px;
}

.form label {
  position: relative;
}

.form label .input {
  background-color: #333;
  color: #fff;
  width: 100%;
  padding: 20px 05px 05px 10px;
  outline: 0;
  border: 1px solid rgba(105, 105, 105, 0.397);
  border-radius: 10px;
}

.form label .input+span {
  color: rgba(255, 255, 255, 0.5);
  position: absolute;
  left: 10px;
  top: 0px;
  font-size: 0.9em;
  cursor: text;
  transition: 0.3s ease;
}

.form label .input:placeholder-shown+span {
  top: 12.5px;
  font-size: 0.9em;
}

.form label .input:focus+span,
.form label .input:valid+span {
  color: #00bfff;
  top: 0px;
  font-size: 0.7em;
  font-weight: 600;
}

.input {
  font-size: medium;
}

.submit {
  border: none;
  outline: none;
  padding: 10px;
  border-radius: 10px;
  color: #fff;
  font-size: 16px;
  transform: 0.3s ease;
  background-color: #00bfff;
  transition: all 30ms ease-in-out;
}

.submit:hover {
  background-color: #00bfff96;
  cursor: pointer;
}

.submit:active {
  transform: scale(.9);
}

@keyframes pulse {
  from {
    transform: scale(0.9);
    opacity: 1;
  }

  to {
    transform: scale(1.8);
    opacity: 0;
  }
}
</style>
