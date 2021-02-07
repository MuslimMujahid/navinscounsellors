import WhatsAppIcon from '@material-ui/icons/WhatsApp'
import InstagramIcon from '@material-ui/icons/Instagram'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

const practice_area_en = [
    {
        title: 'Corporate & Employment',
        image: '/images/practice-area-1.jpg',
        text: 'We provide legal services for area of the Company & Employment among others consisting of: drafting commercial agreement, legal opinion, conducting legal due diligence, transfer of share, acquisition & merger, liquidation, carrying out license or permit arrangements, other general corporate, drafting company regulation &employment contract, as well as handling of labor disputes.',
        link: '/practice-area/corporate-employment',
    },
    {
        title: 'Ligitation & Dispute Resolution',
        image: '/images/practice-area-2.jpeg',
        text: 'We are passionate to overcome the issue through practical and commercial solution. We help Our Clients in representing and/or accompanying during process of dispute resolution, whether through out of court settlement process and litigation process.',
        link: '/practice-area/ligitation-dispute-resolution',
    },
    {
        title: 'Commercial & Collection Bankruptcy',
        image: '/images/practice-area-3.jpg',
        text: 'We understand that smooth cash flow is very important in business. Therefore We provide legal services for the field of Commercial Collection & Bankruptcy, to assist Our Clients in conducting collection process against Customers / Debtors both through outside and inside court approaches.',
        link: '/practice-area/commercial-collection-bankruptcy',
    },
    {
        title: 'Land & Property',
        image: '/images/practice-area-4.jpg',
        text: 'We provide legal services for the area of Land and Property, among others land disputes settlement, property disputes settlement, conducting legal due diligence for land and property matters.',
        link: '/practice-area/land-property',
    }
]

const lawyer_en = [
    {
        name: 'Muh. Naim Syahrir, S.H., M.H.',
        role: 'Founder and Managing Partner',
        desc: [
            'Naim is a Founder and Managing Partner of NAV|INS. He is a member of the firm’s litigation practice. His field practice of expertise includes complex and transnational commercial disputes, bankruptcy and court-supervised debt restructuring.',
            'He has also experience in handling liquidation of company, labor dispute, medical malpractice and compliance issues.'
        ],
        education: ['Master of Law, University of Indonesia'],
        organization: ['Indonesian Bar Association (PERADI)'],
        language: ['Bahasa Indonesia', 'English'],
        image: '/images/lawyer-1.JPG',
        link: 'lawyer/muh-naim-syahrir-sh-mh',
    },
    {
        name: 'Febrian Yanata Putra, S.H., M.H.',
        role: 'Partner',
        desc: [
            'Febriyan is a Partner of NAV|INS. His field practice of expertise includes litigation, bankruptcy, dispute resolution and general corporate.'
        ],
        education: ['Master of Law, University of Hasanuddin'],
        organization: ['Indonesian Bar Association (PERADI)'],
        language: ['Bahasa Indonesia', 'English'],
        image: '/images/lawyer-2.jpeg',
        link: 'lawyer/febriyan-yanata-putra-sh-mh',
    },
    {
        name: 'Galih Putra Perdana, S.H.',
        role: 'Partner',
        desc: [
            'Galih is a Partner of NAV|INS. His field practice of expertise includes litigation (at various different stages during the process) in dispute of civil, criminal, state administration, industrial relations/labor, bankruptcy and suspension of debt payment obligation, copyright, and family law.'
        ],
        education: ['Bachelor Degree of Law, University of Katolik Parahyangan'],
        organization: ['Indonesian Bar Association (PERADI)'],
        language: ['Bahasa Indonesia', 'English'],
        image: '/images/lawyer-3.jpg',
        link: 'lawyer/galih-putra-perdama-sh',
    },
    {
        name: 'Fanny Jenifer, S.H.',
        role: 'Associate Lawyer',
        desc: [
            'Fanny is an Associate Lawyer of NAV|INS. Her field practice of expertise includes general corporate, employment, merger and acquisition, investment, compliance, and cyber law.'
        ],
        education: ['Bachelor Degree of Law, University of Padjadjaran'],
        organization: ['Indonesian Bar Association (PERADI)'],
        language: ['Bahasa Indonesia', 'English'],
        image: '/images/lawyer-4.jpg',
        link: 'lawyer/fanny-jenifer-sh',
    }
]

const social = [
    {
        type: 'Whatsapp',
        icon: <WhatsAppIcon style={{ fontSize: 60 }} />,
        link: '#'
    },
    {
        type: 'Instagram',
        icon: <InstagramIcon style={{ fontSize: 60 }} />,
        link: 'https://instagram.com/navins.law?igshid=htad3gt4ltip'
    },
    {
        type: 'Linkedin',
        icon: <LinkedInIcon style={{ fontSize: 60 }} />,
        link: '#'
    }
]

export { practice_area_en, lawyer_en, social }