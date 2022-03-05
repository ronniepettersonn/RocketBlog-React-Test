import Post1 from '../../images/post-1.png'
import Post2 from '../../images/post-2.png'
import Post3 from '../../images/post-3.png'
import Post4 from '../../images/post-4.png'

import './styles.css'

export function Blog() {
    return (
        <main>
            <div className="content">
                <section>
                    <div className="post-highlight">
                        <figure>
                            <img src={Post1} />
                            <figcaption>Janeiro 04, 2022</figcaption>
                        </figure>

                        <h2>Começando em RectJS em 2022</h2>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut
                            adipiscing neque. Sed volutpat aenean sit vitae, sed tristique nibh nibh eu in aliquet ut
                            adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. Sed volutpat aenean.</p>

                    </div>
                    <div className="posts-recents">
                        <div className="post-item">
                            <span>Janeiro 04, 2022</span>
                            <h2>Conheça as principais técnicas para conseguir uma vaga internacional em programação</h2>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut
                                adipiscing neque. Sed volutpat aenean sit vitae, sed tristique.</p>
                        </div>

                        <div className="divider"></div>

                        <div className="post-item">
                            <span>Janeiro 04, 2022</span>
                            <h2>Veja a evolução do Front-end na prática</h2>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut
                                adipiscing neque. </p>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="posts-galery">
                        <div className="post-item-galery">
                            <figure>
                                <img src={Post2} alt="" />
                                <figcaption>Janeiro 04, 2022</figcaption>
                            </figure>

                            <h2>10 dicas para conseguir a vaga desejada</h2>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut
                                adipiscing neque. Sed volutpat aenean sit vitae, sed tristique.
                            </p>
                        </div>
                        <div className="post-item-galery">
                            <figure>
                                <img src={Post3} alt="" />
                                <figcaption>Janeiro 04, 2022</figcaption>
                            </figure>

                            <h2>Deixe seu código mais semântico com essas dicas</h2>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut
                                adipiscing neque. Sed volutpat aenean sit vitae, sed tristique.
                            </p>
                        </div>
                        <div className="post-item-galery">
                            <figure>
                                <img src={Post4} alt="" />
                                <figcaption>Janeiro 04, 2022</figcaption>
                            </figure>

                            <h2>Use essas dicas nas suas aplicações mobile</h2>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut
                                adipiscing neque. Sed volutpat aenean sit vitae, sed tristique.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}