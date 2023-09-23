import Container from "@/components/Container";
import Button from "@/components/Button";
import { Icon } from "@iconify/react";

const Hero = () => {
    return(
        <Container variant="flexColCenter" className="w-full h-[680px] gap-[64px] " >
            <Container variant="flexColCenter" className="w-full h-[414px] gap-[24px]">             
                 <Container variant="h1Hero" className="truncate"> exhibition </Container>              
               <Container variant="flexCenterBetween" className="w-full px-[8px]">
                <Container variant="pHero"> Selections from the Whitney’s Collection </Container>
                <Container variant="pHero"> Open Studio </Container>
                <Container variant="pHero"> Friday Night at the Whitney </Container>
                <Container variant="pHero"> Whitney Teens x Artists </Container>
                <Container variant="pHero"> No Blank Canvas </Container>
               </Container>
            </Container>
            <Container variant="flexCenter" className="w-full h-[63px]">
                <Button variant="soft" className="w-[166px] h-[63px]"> Explore </Button>
            </Container>
            <Container variant="flexCenter" className=" w-[1117px] h-[48px] gap-[80px] ">
                <Icon href="" icon="logos:microsoft-windows" />
                <Icon href="" icon="logos:android"/>
                <Icon href="" icon="logos:macos"/>
                <Icon href="" icon="logos:github"/>
                <Icon href="" icon="logos:vercel"/>
                <Icon href="" icon="logos:nextjs"/>
                </Container>
        </Container>
    )
}

export default Hero;