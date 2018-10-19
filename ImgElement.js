class ImgElement extends HTMLElement {
    constructor() {
        super();

        // Create a shadow root
        const shadow = this.attachShadow({ mode: 'open' });

        // <div class="column">
        var column = document.createElement('div');
        column.setAttribute('class','column');
        
        // <div class="content">
        var content = document.createElement('div');
        content.setAttribute('class','content');

        // <img class="full-width-img" src="https://via.placeholder.com/350x230">
        var fullWidthImg = document.createElement('IMG');
        fullWidthImg.setAttribute('class','full-width-img');
        fullWidthImg.src="https://via.placeholder.com/350x230";

        // attach created elements
        content.appendChild(fullWidthImg);
        column.appendChild(content);
        shadow.appendChild(column);
        
    }
}

customElements.define('img-element', ImgElement);

console.log('image defined');