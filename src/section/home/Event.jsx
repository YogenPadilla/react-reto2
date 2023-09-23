import Container from "@/components/Container";
import Image from "next/image";

const Event = () => {
    return (
        <Container variant="flexColCenter" className="  w-full h-[846px] py-[64px] gap-[10px] ">
            <Container variant="flexColCenter" className="w-[1395px] h-[718px] gap-[35px] ">
                <Container variant="flexStartCenter" className="w-[746px] h-[83px] gap-[60px] ">
                    <Container variant="h1EventActive" > Exhibits </Container>
                    <Container variant="h1Event" > Performances </Container>
                    <Container variant="h1Event" > Events </Container>
                </Container>
                <Container variant="flexStartCenter" className="h-[600px] gap-[22px] ">
                    <Image href="" width="450" height="600" src="/assets/card-1.png" />
                    <Image href="" width="450" height="600" src="/assets/card-2.png" />
                    <Image href="" width="450" height="600" src="/assets/card-3.png" />
                </Container>
            </Container>
        </Container>
    )
}

export default Event;