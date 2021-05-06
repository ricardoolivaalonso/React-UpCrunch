import SummaryImage1 from '../../img/summary-item-1.png'
import SummaryImage2 from '../../img/summary-item-2.png'
import SummaryImage3 from '../../img/summary-item-3.png'
import FeaturesImage1 from '../../img/features-item-1.png'
import FeaturesImage2 from '../../img/features-item-2.png'
import FeaturesImage3 from '../../img/features-item-3.png'
import PlansImage1 from '../../img/plans-item-1.png';
import PlansImage2 from '../../img/plans-item-2.png';
import PlansImage3 from '../../img/plans-item-3.png';
import PlansImage4 from '../../img/plans-item-4.png';
import PlansImage5 from '../../img/plans-item-5.png';
import IdeasImage from '../../img/ideas-icon.png'
//-----------------------------------
//-----------------------------------
let summaryItem = [
    {
        id: 1,
        image: SummaryImage1,
        title: 'Fast',
        description: 'Funding in as soon as 24 hours'
    },
    {
        id: 2,
        image: SummaryImage2,
        title: 'Simple',
        description: 'Short, quick application'
    },
    {
        id: 3,
        image: SummaryImage3,
        title: 'Funding',
        description: 'Up to 200% of your avg'
    },
]
let featuresItem = [
    {
        id: '1',
        image: FeaturesImage1,
        title: 'Large credit facilities',
        description: 'Most lenders cap out at 80-100% of your average monthly sales. We have the ability to go up to 200%, so you can borrow what you need the first time.'
    },
    {
        id: '2',
        image: FeaturesImage2,
        title: 'Diverse marketplace',
        description: 'From business lines of credit to equipment financing, we’ve got you covered.'
    },
    {
        id: '3',
        image: FeaturesImage3,
        title: 'Custom game plan',
        description: 'By asking the right questions, we’ll provide you with a custom game plan that will leave you more knowledgeable about the funding game (even if we don’t end up working together)'
    },
]
let testimonialItem = [
    {
        id: 1,
        intro: 'Anton funded me when nobody else could',
        description: 'Anton funded me when nobody else could. More than that, he was able to do what two other competing organizations said was impossible, he paid off three positions and reduced my payments by $800 a day. Anton is not a guy that will just get you funding, he makes sure that the funding he gets you fit your company and makes sense. He is VERY easy to get ahold of. I often wonder when he sleeps. He has answered 5 AM texts and late evening phone calls. Additionally, everyone else I have ever dealt with disappears as soon as they get you funds. Anton followed up with me and even dealt with a company that was paid off but still debiting and got everything squared away for me - something that would have taken me hours of frustrating calls. This is the third time I have used him and he has pulled through every time. I highly recommend Anton. He is a rock-solid no-nonsense guy.',
        author: 'RC Trowbridge - Automotive Repair'
    },
    {
        id: 2,
        intro: 'Great Company',
        description: 'I had an immediate need for financing. I got very lucky and got my product into one of the major retailers in our country. One of the unwritten laws when you get into this retailer is you must always have inventory on hand. This put me into a major cash flow problem . I had a friend who dealt with UpCrunch and said to trust them (anton) he will help and find a solution. Immediately upon my first call with Anton i knew that my friend had given me good advise. I told Anton the story about my success and the consequence of it. He told me that with the proper information he could have a solution for me within 48 hours. Well it was more like 24 hours. Anton brought two potential solutions to me and spent the time with me that i would fully understand the choices. The time, the service and execution on UpCrunch part was incredible. This is a great organiation and one that can be fully trusted.',
        author: 'Neil Friedman - Manufacturing'
    },
    {
        id: 3,
        intro: 'Pickle Release',
        description: 'I like pickles, but I hate the phrase “getting into a pickle”! Our “getting into a pickle” started out to be a plan to improve our situation rather than cause more difficulty. Therefore, getting out of the pickle was the challenge that we found ourselves with when meeting Anton at Upcrunch. After laboring for months with other suppose –like-minded companies, Anton in less than 3 days alleviated our pain and provided the funding that I call the “pickle release”. Be on your toes, because once Anton gets started you won’t come back down to your heels until a solution has been manifested.',
        author: 'Gretchen B - Construction'
    },
    {
        id: 4,
        intro: 'Anton (Upcrunch)',
        description: 'This guy is a truly a professional. I called him late Thursday afternoon around 4pm. He asked me a few questions and said he can get me 95k funded by next day. I needed that money urgently to meet payroll the next day. His speed, professionalism and guidance still marvels me. He was in constant communication with me throughout the process until my account was funded. I will recommend him to anyone who needs funding. His speed and experience will surprise you.',
        author: 'George N - Home Healthcare'
    },
    {
        id: 5,
        intro: 'Anton was very efficient and competent',
        description: 'Anton delivered as he promised. No false promises. Got our six figure funding with excellent service on a very speedy process. I would highly recommend Anton and his firm. Efficient honest people.',
        author: 'Julia - Medical Optometrist'
    },
]
let plansItem = [
    {
        id: '1',
        image: PlansImage1,
        productTitle: 'Business line of credit',
        productDescription: 'Use only what you need, pay interest only on what you use. A true small business MVP.',
        capacity: 'Up to $250,000',
        term: 'Up to 2 years',
        turnaround: 'As fast as 24hrs'
    }, {
        id: '2',
        image: PlansImage2,
        productTitle: 'SBA',
        productDescription: 'Fast-tracked, low-risk funding that’s backed by the federal government.',
        capacity: 'Up to $5,000,000',
        term: 'Up to 10-25 years',
        turnaround: '4-6 weeks '
    },
    {
        id: '3',
        image: PlansImage3,
        productTitle: 'Revenue-Based Funding',
        productDescription: 'Turn tomorrow’s earnings into today’s cash flow.',
        capacity: 'Up to $2,000,000',
        term: 'Up to 2 years',
        turnaround: 'As fast as 24hrs'
    },
    {
        id: '4',
        image: PlansImage4,
        productTitle: 'Equipment Financing',
        productDescription: 'Finance the tools you need to keep your business trucking along.',
        capacity: 'Up to $75,000',
        term: 'Up to 3-5 years',
        turnaround: 'As fast as 48hrs'
    },
    {
        id: '5',
        image: PlansImage5,
        productTitle: 'Invoice Factoring',
        productDescription: 'Get paid for what you’re owed by cashing in on your unpaid invoices.',
        capacity: 'Up to $175,000',
        term: '1 to 13 weeks',
        turnaround: 'As fast as 24hrs'
    },
]
let ideasSection = {
    img: IdeasImage,
    title: 'Ideas that can’t be automated',
    description: 'The lending industry is constantly evolving. UpCrunch stays five steps ahead of the game, so you can focus on doing what you do best. Think of us as sports agents for small businesses—kind of like having Jerry Maguire by your side.',
    link:'More about how we work'
}

export {summaryItem, featuresItem ,testimonialItem, plansItem, ideasSection }