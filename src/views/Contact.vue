<template>
  <div class="contact container">
    <h1>Contact</h1>

    <div class="message message--success" v-if="success">
      Your form was successfully submitted.
    </div>

    <div class="message message--error" v-if="!success && success !== null">
      Your form could not be submitted. Please try again.
    </div>

    <form @submit.prevent="onSubmit" ref="contactForm">
      <fieldset>
        <label for="name">
          Name
        </label>
        <input type="text" maxlength="100" name="name" id="name" v-model="form.name" required>
      </fieldset>

      <fieldset>
        <label for="email">
          Email Address
        </label>
        <input type="email" maxlength="250" name="email" id="email" v-model="form.email" required>
      </fieldset>

      <fieldset>
        <label for="message">
          Message
        </label>
        <textarea name="message" id="message" v-model="form.message" required></textarea>
      </fieldset>

      <vue-recaptcha
        ref="recaptcha"
        @verify="onCaptchaVerified"
        @expired="onCaptchaExpired"
        size="invisible"
        sitekey="6LeY0sIUAAAAAMQMogsxJtCQkzG9H4B5Scz45DqU">
      </vue-recaptcha>

      <fieldset>
        <input type="submit" value="Submit">
      </fieldset>
    </form>
  </div>
</template>

<script>
import VueRecaptcha from 'vue-recaptcha';
import Axios from 'axios';

export default {
  name: 'Contact',
  components: {
    VueRecaptcha,
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: '',
      },
      success: null,
    };
  },
  methods: {
    onSubmit() {
      this.$refs.recaptcha.execute();
    },

    onCaptchaVerified(recaptchaToken) {
      const vm = this;
      this.$refs.recaptcha.reset();

      Object.keys(this.form).forEach((k) => {
        this.form[k] = '';
      });
      this.$refs.contactForm.reset();

      const formProcessorUrl = 'https://heather.dev/forms/contact.php';

      const formData = new FormData();
      formData.append('name', this.form.name);
      formData.append('email', this.form.email);
      formData.append('message', this.form.message);
      formData.append('recaptchaToken', recaptchaToken);

      Axios.post(formProcessorUrl, formData)
        .then(() => {
          vm.success = true;
        })
        .catch(() => {
          vm.success = false;
        });
    },

    onCaptchaExpired() {
      this.$refs.recaptcha.reset();
    },
  },
};
</script>
