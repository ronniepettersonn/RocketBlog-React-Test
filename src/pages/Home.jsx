import { Header } from "../components/Header";
import { BannerHeader } from "../components/BannerHeader";
import { Blog } from "../components/Blog";

export function Home() {
    return (
        <>
            <Header>
                <BannerHeader />
            </Header>
            <Blog />
        </>

    )
}