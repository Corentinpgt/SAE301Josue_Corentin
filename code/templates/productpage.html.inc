<article class="product">

    <section class="product__visual">

        <section class="product__figure">
            <img src="{{src}}" alt="image de {{productname}}">
        </section>

        <section class="product__figcaption">

            <section class="product__banner1">
                Temporairement indisponible
            </section>
    
            <section class="product__banner2">
                Bientôt épuisé
            </section>

            <h2 class="product__title">{{productname}}</h2>
            <p class="product__price">{{price}}</p>

            <ul class="product__ul">
                {{selecteur}}
            </ul>

            <section class="product__down">

                <p class="product__desc">
                    {{productdesc}}
                </p>
    
                <button data-id="{{id}}" class="product__btn">
                    ajouter au panier
                </button>
    
            </section>

        </section>
    </section>

</article>