import heroBackground from "../../assets/images/heroBackground.png"
import { HeroContent } from "./HeroContent";
import { CardImage } from "./CardImage";

export function Hero() {
    return (
        <section className="relative h-100 bg-cover bg-center"
            style={{backgroundImage: `url(${heroBackground})`,}}>
        <div className="max-w-6xl mx-auto h-full px-8 flex items-center justify-between">
            <HeroContent />
            <CardImage />
        </div>
        </section>
       
    )
}

