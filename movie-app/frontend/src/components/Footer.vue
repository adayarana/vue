<template>
    <footer class="footer-container">
      <div className="footer-container__social-links">
        <em className="fab fa-github" />
        <em className="fab fa-app-store" />
        <em className="fab fa-google" />
      </div>
      <div className="footer-container__details">
        <div className="details__text">
          <p><a href="/">About Us</a></p>
          <p><a href="/">Terms of use</a></p>
          <p><a href="/">Privacy Policy</a></p>
        </div>
        <div className="details__info">
          <p>Powered by TV Maze API</p>
          <p>Made with 🤍 💙 💛 in 🇮🇨</p>
          <p>Copyright 2021 © @adayarana</p>
        </div>
      </div>
    </footer>
</template>

<style lang="scss" scoped>
@import '../sass/var.scss';

.footer-container {
    width: 100vw;
    bottom: 0;
    font-size: 14px;

    .footer-container__details {
        display: flex;
        flex-direction: column;
        text-align: center;

        p {
            font-weight: bold;
        }

        .details__info {
            padding: 1rem;
        }

        .details__info > p {
            padding: 0.2rem;
        }

        .details__text {
            display: none;
        }
    }

    .footer-container__social-links {
        display: flex;
        justify-content: center;
        font-size: 35px;

        > em {
            padding: 0px 20px;
        }
    }
}

@media screen and (min-width: 415px) {

    .footer-container {

        .footer-container__details {
            display: flex;
            justify-content: space-around;
            padding: 0rem;

            .details__info {
                display: flex;
                justify-content: space-around;

                > p {
                    cursor: alias;
                }

                > p:hover {
                    text-decoration: underline;
                    text-decoration-style: double;
                    text-decoration-color: $alternative;
                    text-decoration-thickness: 0.15rem;
                }
            }

            .details__text {
                display: flex;
                justify-content: space-around;
            }

        }

        .footer-container__social-links {
            font-size: 40px;
            cursor: pointer;

            > em {
                padding: 20px 30px;
            }
        }
    }
}

</style>
