import { Flex, Heading, Text } from "@chakra-ui/react";
import DisplayEvents from "../components/DisplayEvents";
import YearSelection from "../components/YearSelection";

function Home() {
	return (
		<Flex direction='row' grow='1' maxH='100vh' maxW='100vw' p='20'>
			<Flex direction='column'>
				<Heading as='h1' size='lg' mb='4'>
					Written History Timeline
				</Heading>
				<Heading as='h1' size='sm'>
					History is fun! But also confusing...
				</Heading>
				<Text mb='4' fontSize='small' maxW='400px'>
					I love history but sometimes i have a hard time remembering at what point in
					time something happend.
				</Text>
				<Text mb='4' fontSize='small' maxW='400px'>
					Did Julius Cesar march against Gaule before The birth of Christ? Was Darius The
					Great King of Persia when the battle of marathon took place? And What year did
					Genghis Khan sack Baghdad?
				</Text>
				<Text mb='4' fontSize='small' maxW='400px'>
					If you just like me, could need a quick reminder of who was where and when, you
					might find this site useful. Enjoy!
				</Text>
				<YearSelection />
			</Flex>
			<DisplayEvents />
		</Flex>
	);
}

export default Home;
