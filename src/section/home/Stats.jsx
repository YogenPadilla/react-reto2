import Container from "@/components/Container";

const Stats = () => {
    return (
        <Container variant="flexColStart" className="w-full h-[478px] p-[64px] gap-[10px]">
            <Container variant="flexStartCenter" className="w-[1312px] h-[350px] gap-[96px] ">
                <Container variant="flexColStart" className="w-[343px] h-[350px] gap-[25px] ">
                    <Container variant="h1Stats"> 100+ </Container>
                    <Container variant="pStats"> Exhibitions modern and new art and a stimulating mix of both </Container>    
                </Container>
                <Container variant="flexColStart" className="w-[467px] h-[328px] ">
                    <Container variant="h1Stats"> 720M </Container>
                    <Container variant="pStats"> Perfect square with sides of 720 meters—is encircled by a fine mesh of concrete </Container>  
                    <Container variant="exStats"> 2 </Container>  
                </Container>
                <Container variant="flexColStart" className="w-[293px] h-[350px] ">
                    <Container variant="h1Stats"> 310 </Container>
                    <Container variant="pStats"> Every day, art comes alive in the Museum's galleries and through its exhibitions and events </Container> 
                </Container>
            </Container>
        </Container>
    )
}

export default Stats;