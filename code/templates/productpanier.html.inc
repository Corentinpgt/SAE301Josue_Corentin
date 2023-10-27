<article class="productpanier">


    <section class="productpanier__figure">
        <img src="{{src}}" alt="image du produit">
    </section>

    <section class="productpanier__figcaption">

        <section class="productpanier__desc">
            <h2 class="productpanier__title">{{productname}}</h2>
            <ul class="productpanier__ul">
                {{here}}
            </ul>
        </section>


    </section>

    <section class="productpanier__quantity">
        <p class="productpanier__x">{{total}}</p>
        <section data-id="{{id}}" class="productpanier__btn">
            <button data-use="increase" class="productpanier__plus">
                +
            </button>
            <button data-use="decrease" class="productpanier__minus">
                -
            </button>
        </section>
    </section>

    <section class="productpanier__price">
        <p>{{price}}</p>
    </section>

</article>