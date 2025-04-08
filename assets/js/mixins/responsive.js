export default {
  data() {
    return {
      isMobile: false
    };
  },
  methods: {
    checkScreenSize() {
      this.isMobile = window.innerWidth < 768;
    }
  },
  mounted() {
    this.checkScreenSize();
    window.addEventListener('resize', this.checkScreenSize);
  },
  unmounted() {
    window.removeEventListener('resize', this.checkScreenSize);
  }
};