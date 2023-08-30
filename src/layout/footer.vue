<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="footer">
    <div class="line">
      <div class="row">
        <div class="col text-center">
            <div class="footer-cover" style="font-size: 13px;">
                <div class="contact">
                    <div class="contact-logo">
                        <router-link class="company-name" to="/">
                            <!-- <img src="@/assets/image/logo_blck.png" alt="logo" class="logo"> -->
                            itwizard.
                        </router-link>
                        <div class="copyright">
                            Copyright, <strong><span>IT Wizard</span></strong>. All rights reserved.<br><span id="copyRightYear">©2021</span>
                        </div>

                    </div>

                    <div class="address">
                        <p><span class="email"><a href="mailto:admin@itwizard.mn" style="color: #000;">{{getText('email')}}</a></span><br><span style="text-decoration: none;" v-html="getText('address')"></span><br>{{getText('phone')}}</p>
                    </div>
                </div>
                <div class="social-links mb-4">
                    <a href="https://www.facebook.com/It-Wizard-LLC-%D0%90%D0%B9-%D0%A2%D0%B8-%D0%92%D0%B8%D0%B7%D0%B0%D1%80%D0%B4-106177754965747" target="_blank" class="twitter">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg></a>
                    <a href="https://www.youtube.com/channel/UC8CFyKbS5Vcv0V-cAkpdRFw" target="_blank" class="facebook">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>
                    </a>
                </div>
            </div>

            <!-- <div class="copyright mb-5">
                Бүх эрхийг хуулиар хамгаалсан <strong><span>IT Wizard</span></strong>. ©2021
            </div> -->
        </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
    methods: {
        getText(text) {
            return this.$textApi(text);
        }
    }
}
</script>