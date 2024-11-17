class AppHeader extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <div class="py-2 px-5 component-header d-flex flex-row justify-content-between">
        <div class="d-flex flex-fill align-items-center">
          <a href="./index.html" class="d-flex align-items-center">
            <i class="ph ph-grid-four logo-size"></i>
            <div class="d-flex flex-column">
              <span>OFF</span>
              <span>GRID</span>
            </div>
          </a>
        </div>
        <div class="header-links d-flex flex-fill align-items-center justify-content-center">
          <ul class="mb-0 list-unstyled gap-3 d-flex">
            <li>
              <a href="" class="d-flex align-items-center">
                Agende uma Chamada
              </a>
            </li>
            <li>
              <a href="">
                Suporte
              </a>
            </li>
            <li>
              <a href="">
                Faça um Orçamento
              </a>
            </li>
          </ul>
        </div>
        <div class="d-flex flex-row flex-fill align-items-center justify-content-end">
          <ul class="mb-0 list-unstyled gap-3 d-flex align-items-center">
            <li>
              <a href="">
                <i class="ph ph-user-circle fs-3"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    `;
  }
}

customElements.define('app-header', AppHeader);