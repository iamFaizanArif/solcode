import PricingCard from './PricingCard'
import {IoTrophy} from 'react-icons/io5'
import {AnimationOnScroll} from "react-animation-on-scroll";

const Pricing = () => {
    return (
        <section className="bg-white white:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-20 2xl:px-0">
                <div className="text-center mb-20">
                    <h1 className="text-4xl xl:text-4xl lg:text-4xl md:text-4xl sm:text-4xl font-bold title-font text-gray-900 mb-4">Pricing
                        & Plan</h1>
                    <p className="text-lg leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">Curabitur sed
                        facilisis erat. Vestibulum pharetra eros eget fringilla porttitor.</p>

                </div>
                <AnimationOnScroll animateIn="animate__fadeInUp">
                    <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-8 lg:space-y-0 relative">
                        <PricingCard
                            title="Small Business"
                            display="hidden"
                            amount={`$1500`}
                            duration="/month"
                            link="https://app.toolsfix.net/signup"
                            styles="border-[#454545]"
                            service={["S*mrush", "Instr0id ( Plagiarism & Ai )", "M@ngools", "Word Ai", "Rytr.me", "WordTune", "p*k To Chart", "Uber-Suggest", "Serp-stat", "Storybase", "Woo-Rank", "Article Forge (Under Testing)"]}
                        />
                        <PricingCard
                            title="Professional"
                            display="absolute bottom-[3840px] w-[58%] left-[20%] xl:bottom-[99%] lg:bottom-[99%] md:bottom-[3018px] sm:bottom-[3840px] xl:w-[19%] lg:w-[19%] md:w-[38%] sm:w-[58%] xl:left-[452px] lg:left-[452px] md:left-[234px] sm:left-[20%]"
                            icon={<IoTrophy/>}
                            offer="Most Popular"
                            amount="$2000"
                            duration="/month"
                            styles="border-[#454545]"
                            link="https://app.toolsfix.net/signup"
                            service={["Moz Pro", "Story Block", "S*mrush", "Motion Arry ", "Envato Element", "ManG!ools", "Placeit", "Rytr.me ( Testing tool)", "Article Forge (Under Testing)", "De$igns AI", "PikMonk*y", "Quill Bot", "Creatopy", "SEOptimer", "ClosersCopy (Under Testing)", "SEO Site Checkup"]}
                        />
                        <PricingCard
                            title="Enterprice"
                            display="hidden"
                            amount={`$5000`}
                            duration="/month"
                            styles="border-[#454545]"
                            link="https://app.toolsfix.net/signup"
                            service={["Story Block", "Envato Element", "Motion Arry ", "Powtoon", "Magisto", "In Video", "Epidemic-Sounds", "Grammerly", "Pik To Chart", "Placit", "De$igns AI", "PikMonkey", "Renderforest"]}
                        />
                    </div>
                </AnimationOnScroll>

            </div>
        </section>

    )
}

export default Pricing