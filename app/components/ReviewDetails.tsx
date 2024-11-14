import { StaticImageData } from "next/image";
import zapier from '../components/images/download (13).svg'
import salesloft from '../components/images/download (11).svg'
import hourOne from '../components/images/download (5).svg'
import hashnode from '../components/images/download (6).svg'
import agility from '../components/images/download (1).svg'
import dock from '../components/images/download (16).svg'
import lukeThomas from '../components/images/luke-thomas (1).jpg'

interface Props {
    id: number,
    logo: StaticImageData,
    reviewText: string,
    image: StaticImageData,
    name: string,
    position: string
}

export const ReviewContent: Props[] = [
    {
        id: 1,
        image: lukeThomas,
        logo: zapier,
        name: 'Michael Sholty',
        position: 'Senior Software Engineer at Zapier',
        reviewText: '“I have fallen in love with Liveblocks. It was a miracle, we found your solution and it just worked.”'
    },
    {
        id: 2,
        image: lukeThomas,
        logo: dock,
        name: 'Joel Varty',
        position: 'CTO at Agility CMS',
        reviewText: '“Not only has Liveblocks helped us bring on new customers, it also enabled us to expand current accounts to more users.”'
    },
    {
        id: 3,
        image: lukeThomas,
        logo: hashnode,
        name: 'Alexis Smirnov',
        position: 'CTO at Dialogue',
        reviewText: '“Within two short days of engineering work, we were able to increase efficiency of our care team.”'
    },
    {
        id: 4,
        image: lukeThomas,
        logo: salesloft,
        name: 'Alexis Smirnov',
        position: 'CTO at Dialogue',
        reviewText: '“Within two short days of engineering work, we were able to increase efficiency of our care team.”'
    },
    {
        id: 5,
        image: lukeThomas,
        logo: hourOne,
        name: 'Sandeep Panda',
        position: 'CTO at Hashnode',
        reviewText: 'Choosing Liveblocks was a no-brainer; their expertise in collaborative editing and realtime infrastructure is unmatched.”'
    }
]

export default ReviewContent