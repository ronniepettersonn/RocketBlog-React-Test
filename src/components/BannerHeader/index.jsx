import { Link } from 'react-router-dom'
import ArrowRight from '../../images/arrow-right.svg'
import FeaturedImg from '../../images/featured-image.png'

export function BannerHeader() {
    return (
        <div className="banner-header">
            <article>
                <h1>Veja o guia definitivo para <br />
                    conquistar seus objetivos <br />
                    como DEV em 2022
                </h1>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                    Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat <br />
                    aenean sit vitae, sed tristique placerat hac.
                </p>

                <Link to="/categoria">
                    Veja mais
                    <img src={ArrowRight} />
                </Link>

            </article>
            <div className="image">
                <img src={FeaturedImg} />
            </div>
        </div>
    )
}