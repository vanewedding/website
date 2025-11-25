export default function ServiceSection() {
  return (
    <section>
      questa e la zona servizi con il carosello immagini
      <div>
        {/* test scorrimento per mariagrazia */}
        <div class="w-full inline-flex flex-nowrap">
          <ul class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
            <li>
              <img src="./facebook.svg" alt="Facebook" />
            </li>
            <li>
              <img src="./disney.svg" alt="Disney" />
            </li>
            <li>
              <img src="./airbnb.svg" alt="Airbnb" />
            </li>
            <li>
              <img src="./apple.svg" alt="Apple" />
            </li>
            <li>
              <img src="./spark.svg" alt="Spark" />
            </li>
            <li>
              <img src="./samsung.svg" alt="Samsung" />
            </li>
            <li>
              <img src="./quora.svg" alt="Quora" />
            </li>
            <li>
              <img src="./sass.svg" alt="Sass" />
            </li>
          </ul>
          <ul
            class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
            aria-hidden="true"
          >
            <li>
              <img src="./facebook.svg" alt="Facebook" />
            </li>
            <li>
              <img src="./disney.svg" alt="Disney" />
            </li>
            <li>
              <img src="./airbnb.svg" alt="Airbnb" />
            </li>
            <li>
              <img src="./apple.svg" alt="Apple" />
            </li>
            <li>
              <img src="./spark.svg" alt="Spark" />
            </li>
            <li>
              <img src="./samsung.svg" alt="Samsung" />
            </li>
            <li>
              <img src="./quora.svg" alt="Quora" />
            </li>
            <li>
              <img src="./sass.svg" alt="Sass" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
