import { StaticImageData } from "next/image"
import comment from '../components/images/comments (1).png'
interface Props {
    id: number,
    link: {
        heading: string,
        links: Array<string>
    }

}
interface MediaIcons {
    id: number,
    image: StaticImageData
}
export const FirstGroup: Props[] = [
    {
        id: 1,
        link: {
            heading: 'Products',
            links: ['Comments', 'Notifications', 'Text Editor', 'RealTime APIs']
        }
    },
    {
        id: 2,
        link: {
            heading: 'Platform',
            links: ['Dashboard', 'Infrastructure']
        }
    },
    {
        id: 3,
        link: {
            heading: 'Solutions',
            links: ['People platforms', 'Sales tools', 'Startups']
        }
    },
    {
        id: 4,
        link: {
            heading: 'Use cases',
            links: ['Multiplayer forms', 'Multiplayer Text Editor', 'Multiplayer creative tools', 'Multiplayer whiteboard', 'Comments', 'Sharing and permissions', 'Document browsing']
        }
    }

]
export const SecondGroup: Props[] = [
    {
        id: 1,
        link: {
            heading: 'Resources',
            links: ['Documentation', 'Examples', 'React components', 'DevTools', 'Comments', 'Next.js Starter Kit', 'Tutorials','Guides','Release notes']
        }
    },
    {
        id: 2,
        link: {
            heading: 'Techologies',
            links: ['Next.js', 'React', 'Javascript', 'Redux', 'Zustand', 'Yjs', 'Tiptap', 'Slate', 'Lexical', 'Quill','Monaco','CodeMirror']
        }
    }
]

export const ThirdGroup: Props[] = [
    {
        id: 1,
        link: {
            heading: 'Company',
            links: ['Pricing', 'Blog', 'Customers', 'Changelog', 'About', 'Contact us', 'Careers', 'Terms of service', 'Privacy policy', 'Security']
        }
    }
]
export const SocialMediaIcons: MediaIcons[] = [
    {
        id: 1,
        image: comment
    },
    {
        id: 2,
        image: comment
    },
    {
        id: 3,
        image: comment
    },
    {
        id: 4,
        image: comment
    },
    {
        id: 5,
        image: comment
    }
]