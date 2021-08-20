class navbar extends HTMLElement {
    constructor() {
        super ();
    }
    connectedCallback() {
        this.innerHTML = 
        `
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="./index.html"><img class="logo" src="./assets/images/logo.png" alt="logo" /></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item active">
                <a class="nav-link active" aria-current="page" href="./index.html">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="./assets/pages/stories.html">Stories</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="./assets/pages/contact.html">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        `;
    }
}
customElements.define('navbar-component', navbar);
class navbarstory extends HTMLElement {
  constructor() {
      super ();
  }
  connectedCallback() {
      this.innerHTML = 
      `
      <nav class="navbar navbar-expand-lg navbar-light bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="../../index.html"><img class="logo" src="../images/logo.png" alt="logo" /></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="../../index.html">Home</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link active" href="./stories.html">Stories</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="./contact.html">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
      `;
  }
}
customElements.define('navbar-component-story', navbarstory);
class navbarcontact extends HTMLElement {
  constructor() {
      super ();
  }
  connectedCallback() {
      this.innerHTML = 
      `
      <nav class="navbar navbar-expand-lg navbar-light bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="../../index.html"><img class="logo" src="../images/logo.png" alt="logo" /></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="../../index.html">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="./stories.html">Stories</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link active" href="./contact.html">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
      `;
  }
}
customElements.define('navbar-component-contact', navbarcontact);
class footer extends HTMLElement {
  constructor() {
      super ();
  }
  connectedCallback() {
      this.innerHTML = 
      `
      <footer>
        <div class="info" style="height:150px;overflow:hidden;background-image: linear-gradient(60deg, #96deda 0%, #50c9c3 100%);border-top:2px solid white;">
          <p style="position:relative;top:120px;text-align:left;">© 2021, Bookshelf. All rights reserved.</p>
          <p style="position:relative;top:80px;text-align:right;">Version-1.0</p>
          <p style="position:relative;top:-30px;text-align:center;"><img src="../images/logo.png" alt="bookshelf" style="width:50px" /></p>
        </div>
      </footer>
      `;
  }
}
customElements.define('footer-con', footer);
class footerhome extends HTMLElement {
  constructor() {
      super ();
  }
  connectedCallback() {
      this.innerHTML = 
      `
      <footer>
        <div class="info" style="height:150px;overflow:hidden;background-image: linear-gradient(60deg, #96deda 0%, #50c9c3 100%);border-top:2px solid white;">
          <p style="position:relative;top:120px;text-align:left;">© 2021, Bookshelf. All rights reserved.</p>
          <p style="position:relative;top:80px;text-align:right;">Version-1.0</p>
          <p style="position:relative;top:-30px;text-align:center;"><img src="./assets/images/logo.png" alt="bookshelf" style="width:50px" /></p>
        </div>
      </footer>
      `;
  }
}
customElements.define('footer-home', footerhome);