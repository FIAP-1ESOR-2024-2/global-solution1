class AppFooter extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = ``;
  }
}

customElements.define('app-footer', AppFooter);