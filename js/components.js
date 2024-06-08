class ImageShow extends HTMLElement {
  // 图片加文字卡片
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
      this.render();
    }

    render() {
      this.shadowRoot.innerHTML = `
        <link rel="stylesheet" type="text/css" href="../../css/views.css" />
        <div class="img_show">
          <div class="beauty" style="background-image: url(${this.getAttribute(
            "imgUrl"
          )});"></div>
          <div class="text">
            <div class="title">${this.getAttribute("title")}</div>
            <div class="item">${this.getAttribute("item")}</div>
          </div>
        </div>
      `;
    }
  }

  customElements.define("image-show", ImageShow);

  class NavigationBar extends HTMLElement {
    // 导航栏
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
    <link rel="stylesheet" type="text/css" href="../../css/index.css" />
      <nav id="navigation">
        <span class="logo">湛江宣传网</span>
        <div id="show">
          <a href="index.html">首页</a>
          <a href="scenery.html">景点</a>
          <a href="food.html">美食</a>
          <a href="culture.html">文化</a>
        </div>
      </nav>
      <div id="nav-placeholder"></div>
    `;
  }
}

customElements.define('navigation-bar', NavigationBar);