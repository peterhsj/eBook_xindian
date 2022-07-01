var app = new Vue({
  el: "#app",
  data() {
    return {
      menuList: menuList,
      subList: {},
      mainId: null,
      mainItemId: '',
      subItemId: '',
      pageUrl: '',
    }
  },
  methods: {
    mainMenuHandlar(idx) {
      const { subList, url} = this.menuList[idx];
      this.subItemId = '';
      this.mainId = idx;
      this.mainItemId = `main_${idx}`;
      this.subList = subList ? subList : {};
      this.pageUrl = url ? `${url}` : '';
      if (this.subList !== {}) {
        this.changeSubItem(0);
      }
    },
    changeSubItem(idx) {
      const { url } = this.menuList[this.mainId].subList[idx];
      this.subItemId = `sub_${idx}`;
      this.pageUrl = `${url}`;
    },
  },
  mounted() {  
    this.mainMenuHandlar(0);
  }
})