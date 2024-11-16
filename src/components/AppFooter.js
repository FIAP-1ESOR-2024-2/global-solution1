class AppFooter extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <div class="mt-auto">
        <div class="p-5 component-footer d-flex flex-row justify-content-between">
          <div class="flex-fill d-flex flex-column align-items-center">
            <span class="fs-4 fw-bold">
              Placeholder
            </span>
          </div>
          <div class="flex-fill d-flex flex-column align-items-center">
            <span class="fs-4 fw-bold">
              Links rápidos
            </span>
            <ul class="mb-0 list-unstyled gap-2 d-flex flex-column">
              <li>
                <a href="">Fale Conosco</a>
              </li>
              <li>
                <a href="">Os Devs</a>
              </li>
              <li>
                <a href="">Video Pitch</a>
              </li>
              <li>
                <a href="">Termos de Serviço</a>
              </li>
              <li>
                <a href=""></a>
              </li>
            </ul>
          </div>
          <div class="flex-fill d-flex flex-column align-items-center">
            <span class="fs-4 fw-bold">
              Parceiros
            </span>
            <div class="d-flex flex-column">
              <img src="./assets/images/White/FIAP.png" alt="Logo do parceiro FIAP" class="partner-logo">
              <img src="./assets/images/White/SAP.png" alt="Logo do parceiro SAP" class="partner-logo">
              <img src="./assets/images/White/FIA.png" alt="Logo do parceiro FIA" class="partner-logo">
              <img src="./assets/images/White/Mahindra.png" alt="Logo do parceiro Mahindra" class="partner-logo">
              <img src="./assets/images/White/Ultragaz.png" alt="Logo do parceiro Ultragaz" class="partner-logo">
              <img src="./assets/images/White/Ultracargo.png" alt="Logo do parceiro Ultracargo" class="partner-logo">
            </div>
          </div>
        </div>
        <div class="rights py-3 text-center">
          <span>© 2024 - Todos os direitos reservados.</span>
        </div>

      </div>
    `;
  }
}

customElements.define('app-footer', AppFooter);