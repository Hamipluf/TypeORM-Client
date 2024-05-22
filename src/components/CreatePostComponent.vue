<template>
    <button @click="openModal" type="button" class="button">
        <span class="button__text">Crear Post</span>
        <span class="button__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24"
                stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" height="24"
                fill="none" class="svg">
                <line y2="19" y1="5" x2="12" x1="12"></line>
                <line y2="12" y1="12" x2="19" x1="5"></line>
            </svg></span>
    </button>

    <!-- Modal -->
    <div class="modal" v-if="isOpen">
        <div class="modal-content">
            <span class="close" @click="closeModal">&times;</span>
            <div class="form-container">
                <form @submit.prevent="submitForm" class="form">
                    <div class="form-group">
                        <label for="email">Titulo</label>
                        <input v-model="title" required name="title" id="title" type="text">
                    </div>
                    <div class="form-group">
                        <label for="textarea">Contenido del post</label>
                        <textarea v-model="content" required cols="50" rows="10" id="textarea"
                            name="textarea"></textarea>
                    </div>
                    <button type="submit" class="form-submit-btn">Submit</button>
                </form>
                <p v-if="error" class="error-text">{{ error }}</p>
            </div>
        </div>
    </div>
</template>
<script>
import { createPost } from '@/utils/posts/createPost'
export default {
    name: 'CreatePostComponent',
    data() {
        return {
            title: '',
            content: '',
            isOpen: false,
            error: '',
            created: '',
            loading: false
        }
    },
    methods: {
        async submitForm() {
            this.loading = true
            const dataPost = {
                title: this.title,
                content: this.content,

            }
            try {
                const response = await createPost(dataPost)
                if (response.error) {
                    this.error = response.data
                    return
                }
                this.error = ''
                this.created = response.data.success
                this.isOpen = false
            } catch (error) {
                this.error = error.message
                console.error('Error LOGINFORM:', error)
            } finally {
                this.loading = false
            }
        },
        openModal() {
            this.isOpen = true;
        },
        closeModal() {
            this.isOpen = false;
        }
    }

}
</script>
<style scoped>
.error-text {
    color: red;
    font-size: 1rem;
    margin-top: 10px;
    text-align: center;
    font-weight: 600;

}

.button {
    position: relative;
    width: 150px;
    height: 40px;
    cursor: pointer;
    display: flex;
    align-items: center;
    border: 1px solid #34974d;
    background-color: #3aa856;
}

.button,
.button__icon,
.button__text {
    transition: all 0.3s;
}

.button .button__text {
    transform: translateX(30px);
    color: #fff;
    font-weight: 600;
}

.button .button__icon {
    position: absolute;
    transform: translateX(109px);
    height: 100%;
    width: 39px;
    background-color: #34974d;
    display: flex;
    align-items: center;
    justify-content: center;
}

.button .svg {
    width: 30px;
    stroke: #fff;
}

.button:hover {
    background: #34974d;
}

.button:hover .button__text {
    color: transparent;
}

.button:hover .button__icon {
    width: 148px;
    transform: translateX(0);
}

.button:active .button__icon {
    background-color: #2e8644;
}

.button:active {
    border: 1px solid #2e8644;
}

.modal {
    display: block;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
    margin: 6% 25%;
    padding: 20px;
}

.close {
    background-color: aliceblue;
    padding: 4px 10px;
    margin: 10px 0;
    color: #000;
    border-radius: 100%;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    opacity: 80%;
    text-decoration: none;
    cursor: pointer;
}

.form-container {
    width: 100%;
    background: linear-gradient(#212121, #212121) padding-box,
        linear-gradient(145deg, transparent 35%, #e81cff, #40c9ff) border-box;
    border: 2px solid transparent;
    padding: 32px 24px;
    font-size: 14px;
    font-family: inherit;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 20px;
    box-sizing: border-box;
    border-radius: 16px;
    background-size: 200% 100%;
    animation: gradient 5s ease infinite;
}

@keyframes gradient {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}

.form-container button:active {
    scale: 0.95;
}

.form-container .form {
    display: flex;
    text-align: left;
    flex-direction: column;
    gap: 20px;
}

.form-container .form-group {
    display: flex;
    flex-direction: column;
    gap: 2px;
}

.form-container .form-group label {
    display: block;
    margin-bottom: 5px;
    color: #717171;
    font-weight: 600;
    font-size: 12px;
}

.form-container .form-group input {
    width: 100%;
    padding: 12px 16px;
    border-radius: 8px;
    color: #fff;
    font-family: inherit;
    background-color: transparent;
    border: 1px solid #414141;
}

.form-container .form-group textarea {
    width: 100%;
    padding: 12px 16px;
    border-radius: 8px;
    resize: none;
    color: #fff;
    height: 96px;
    border: 1px solid #414141;
    background-color: transparent;
    font-family: inherit;
}

.form-container .form-group input::placeholder {
    opacity: 0.5;
}

.form-container .form-group input:focus {
    outline: none;
    border-color: #e81cff;
}

.form-container .form-group textarea:focus {
    outline: none;
    border-color: #e81cff;
}

.form-container .form-submit-btn {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    align-self: flex-start;
    font-family: inherit;
    color: #717171;
    font-weight: 600;
    width: 40%;
    background: #313131;
    border: 1px solid #414141;
    padding: 12px 16px;
    font-size: inherit;
    gap: 8px;
    margin-top: 8px;
    cursor: pointer;
    border-radius: 6px;
}

.form-container .form-submit-btn:hover {
    background-color: #fff;
    border-color: #fff;
}
</style>