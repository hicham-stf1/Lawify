import Footer from "./Footer.js";
import "./style.css";

function Appel() {
  return (
    <>
      <header>
        <h1>
          Pour lancer une vidéo conférence de haute qualité, notre application
          met à votre disposition cette application.
        </h1>
        <br />
        <div class="icon">
          <a href="http://localhost:3030/">
            {" "}
            <i class="fa fa-video-camera" aria-hidden="true"></i>
            <span>lancer une réunion vidéo</span>{" "}
          </a>
        </div>
      </header>

      <section class="main1" id="produits">
        <div class="content1">
          <div class="card1">
            <div class="left">
              <p>
                {" "}
                Notre application est là pour vous chers clients pour remplacer
                les rendez-vous à rallonge et les meetings. Cela va vous
                permettre de contacter des avocats /consultant à l’autre bout de
                la planète sans aucun problème tout en disposant d’une bonne
                connexion internet afin de pouvoir garder une bonne qualité
                d’image et de son.
              </p>
            </div>
            <div class="right">
              <img
                src="https://trueconf.com/images/landing/what-is-videoconferencing/multipoint-conference.svg"
                alt=""
              />
            </div>
          </div>

          {/* <div class="card1">
            <div class="left">
              <p>
                Notre application est là pour vous chers clients pour remplacer
                les rendez-vous à rallonge et les meetings. Cela va vous
                permettre de contacter des avocats /consultant à l’autre bout de
                la planète sans aucun problème tout en disposant d’une bonne
                connexion internet afin de pouvoir garder une bonne qualité
                d’image et de son.
              </p>
            </div>
            <div class="right">
              <img src="https://trueconf.com/images/landing/what-is-videoconferencing/multipoint-conference.svg" />
            </div>
          </div> */}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Appel;
