import { StaticImageData } from "next/image"
import comment from './images/comments (2).png'

interface Props{
    id: number
    bigImage: StaticImageData
    bigHeading: string
    bigSpan: string
    bigButton : string
    smallBoxHead1: string
    smallBoxSpan1: string
    smallBoxImage1: StaticImageData
    smallBoxHead2: string
    smallBoxSpan2: string
    smallBoxImage2: StaticImageData
    largeBoxHead: string
    largeBoxSpan: string
    largeBoxButton1Image: StaticImageData
    largeBoxButton1: string
    largeBoxButton2Image: StaticImageData
    largeBoxButton2: string
    largeBoxButton3Image: StaticImageData
    largeBoxButton3: string

}

const LongChartedData:Props[] = [
    {
        id: 1,
        bigImage: comment,
        bigHeading:'Comments',
        bigSpan:'Enable feedback in your product.',
        bigButton:'Learn More',
        smallBoxHead1:'Mentions',
        smallBoxSpan1:'Allow users to mention collaborators for seamless feedback.',
        smallBoxImage1:  comment,
        smallBoxHead2:'Bring AI in the conversation',
        smallBoxSpan2:'Get feedback from both humans and AI agents, whatever works best for you.',
        smallBoxImage2:comment,
        largeBoxHead:'',
        largeBoxSpan:'',
        largeBoxButton1Image: comment,
        largeBoxButton1:'',
        largeBoxButton2Image:comment,
        largeBoxButton2:'',
        largeBoxButton3Image: comment,
        largeBoxButton3:''


    },
    {
        id: 1,
        bigImage: comment,
        bigHeading:'Notifications',
        bigSpan:'The notification system designed for collaboration',
        bigButton:'Learn more',
        smallBoxHead1:'Optimized for collaboration',
        smallBoxSpan1:'Crafted to match UX patterns world‑class companies spent years optimizing.',
        smallBoxImage1:  comment,
        smallBoxHead2:'Custom notifications',
        smallBoxSpan2:'Feed your own custom notifications into the Liveblocks notification system.',
        smallBoxImage2:comment,
        largeBoxHead:'',
        largeBoxSpan:'',
        largeBoxButton1Image: comment,
        largeBoxButton1:'',
        largeBoxButton2Image:comment,
        largeBoxButton2:'',
        largeBoxButton3Image: comment,
        largeBoxButton3:''


    }
]


export const LongChartedData2:Props[] = [
    {
        id: 1,
        bigImage: comment,
        bigHeading:'Notifications',
        bigSpan:'The notification system designed for collaboration',
        bigButton:'Learn more',
        smallBoxHead1:'Optimized for collaboration',
        smallBoxSpan1:'Crafted to match UX patterns world‑class companies spent years optimizing.',
        smallBoxImage1:  comment,
        smallBoxHead2:'Custom notifications',
        smallBoxSpan2:'Feed your own custom notifications into the Liveblocks notification system.',
        smallBoxImage2:comment,
        largeBoxHead:'',
        largeBoxSpan:'',
        largeBoxButton1Image: comment,
        largeBoxButton1:'',
        largeBoxButton2Image:comment,
        largeBoxButton2:'',
        largeBoxButton3Image: comment,
        largeBoxButton3:''
    },
    {
        id: 1,
        bigImage: comment,
        bigHeading:'Notifications',
        bigSpan:'The notification system designed for collaboration',
        bigButton:'Learn more',
        smallBoxHead1:'Optimized for collaboration',
        smallBoxSpan1:'Crafted to match UX patterns world‑class companies spent years optimizing.',
        smallBoxImage1:  comment,
        smallBoxHead2:'Custom notifications',
        smallBoxSpan2:'Feed your own custom notifications into the Liveblocks notification system.',
        smallBoxImage2:comment,
        largeBoxHead:'',
        largeBoxSpan:'',
        largeBoxButton1Image: comment,
        largeBoxButton1:'',
        largeBoxButton2Image:comment,
        largeBoxButton2:'',
        largeBoxButton3Image: comment,
        largeBoxButton3:''
    }
]

export default LongChartedData