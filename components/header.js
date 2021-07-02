class contact extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
            <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: brown;">
            <div class="container-fluid">
            <a href="/index.html" class="navbar-brand"><img src="../images/logo.png" alt="Bookshelf" style="width: 50px;"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="flase" aria-label="Toggle Navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a href="../../index.html" class="nav-link">Home</a>
                    </li>
                    <li class="nav-item">
                        <a href="./stories.html" class="nav-link">Stories</a>
                    </li>
                    <li class="nav-item">
                        <a href="./contact.html" class="nav-link active">Contact Us</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Downloads
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="../files/All Stories.zip">All Stories Zip</a></li>
                        <li><a class="dropdown-item" href="../files/All Stories.exe">All Stories exe</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        </nav>
      `;
    }
  }
  
customElements.define('navbar-component', contact);

class story extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
            <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: brown;">
            <div class="container-fluid">
            <a href="/index.html" class="navbar-brand"><img src="../images/logo.png" alt="Bookshelf" style="width: 50px;"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="flase" aria-label="Toggle Navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a href="../../index.html" class="nav-link">Home</a>
                    </li>
                    <li class="nav-item">
                        <a href="./stories.html" class="nav-link active">Stories</a>
                    </li>
                    <li class="nav-item">
                        <a href="./contact.html" class="nav-link">Contact Us</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Downloads
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="../files/All Stories.zip">All Stories Zip</a></li>
                            <li><a class="dropdown-item" href="../files/All Stories.exe">All Stories exe</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        </nav>
      `;
    }
  }
  
customElements.define('navbar-component-stories', story);

class home extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
            <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: brown;">
            <div class="container-fluid">
            <a href="/index.html" class="navbar-brand"><img src="./assets/images/logo.png" alt="Bookshelf" style="width: 50px;"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="flase" aria-label="Toggle Navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a href="./index.html" class="nav-link active">Home</a>
                    </li>
                    <li class="nav-item">
                        <a href="./assets/pages/stories.html" class="nav-link">Stories</a>
                    </li>
                    <li class="nav-item">
                        <a href="./assets/pages/contact.html" class="nav-link">Contact Us</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Downloads
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="./assets/files/All Stories.zip">All Stories Zip</a></li>
                            <li><a class="dropdown-item" href="./assets/files/All Stories.exe">All Stories exe</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        </nav>
      `;
    }
  }
  
customElements.define('navbar-component-home', home);

class homecon extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = 
        `
        <section>
            <div class="container-xxsl">
                <div class="home">
                    <div class="welcome-container" style="background-color: rgba(121, 120, 120, 0.664);height: 559px;">
                        Welcome back bookshelfers
                    </div>
                    <div class="content" style="background-color: rgba(121, 120, 120, 0.664);height:559px;">
                        <p>Coming-soon</p>
                    </div>
                </div>
            </div>
        </section>
        `;
    }
}

customElements.define('content-component-home', homecon);

class storycon extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = 
        `
        <section>
            <div class="container-xxsl">
                <div style="background-color: rgba(121, 120, 120, 0.664);height: 559px;text-align: center;line-height: 500px;font-family: Montserrat;">
                    Coming Soon. Sorry
                </div>
            </div>
        </section>
        `;
    }
}

customElements.define('content-component-stories', storycon);

class contactcon extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = 
        `
        <section>
            <div class="container-xxsl">
                <div class="contact-container" style="background-color: rgba(121, 120, 120, 0.322);height:559px;">
                    <form action="https://formsubmit.co/varadpvinod09@gmail.com" method="POST">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <br>
                        <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style="width:600px;" placeholder="Enter Email Address" required>
                        <input type="hidden" name="_next" value="https://ranger-code.ga/assets/pages/thanks.html">
                        <input type="hidden" name="_subject" value="New Submission">
						<input type="hidden" name="_captcha" value="false">
                        <label for="exampleInputComment1" class="form">Message</label>
                        <br>
                        <textarea type="text" name="message" class="form-control" placeholder="Leave a Message here" id="floatingTextarea2" style="width:600px;height: 100px" required></textarea>
                        <br>
                        <button type="submit" class="btn btn-dark">Send Email</button>
                    </form>
                <div>
            </div>
        </section>
        `;
    }
}
customElements.define('content-component-contact', contactcon)

class footer extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = 
        `
        <footer>
            <div className="info" style="height:150px;overflow:hidden;background-color:rgba(121, 120, 120, 0.664);border-top:2px solid white;">
                <p style="position:relative;top:120px;text-align:left;">© 2021, Bookshelf. All rights reserved.</p>
                <p style="position:relative;top:80px;text-align:right;">This website is in beta mode.....</p>
                
                <p style="position:relative;top:-30px;text-align:center;"><img src="./assets/images/logo.png"alt="bookshelf" style="width:50px" /></p>
            </div>
        </footer>
        `;
    }
}
customElements.define('footer-component', footer);
class footercon extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = 
        `
        <footer>
            <div className="info" style="height:150px;overflow:hidden;background-color:rgba(121, 120, 120, 0.664);border-top:2px solid white;">
                <p style="position:relative;top:120px;text-align:left;">© 2021, Bookshelf. All rights reserved.</p>
                <p style="position:relative;top:80px;text-align:right;">This website is in beta mode.....</p>
                
                <p style="position:relative;top:-30px;text-align:center;"><img src="../images/logo.png"alt="bookshelf" style="width:50px" /></p>
            </div>
        </footer>
        `;
    }
}
customElements.define('footer-component-other', footercon)
